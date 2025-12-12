import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Create DOMPurify instance
const window = new JSDOM("").window;
const purify = DOMPurify(window);

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    noSniff: true,
    xssFilter: true,
    referrerPolicy: { policy: "same-origin" },
  })
);

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [
  "https://edolly2.github.io",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Body parser with size limits
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Rate limiting - 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5,
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message:
        "Too many contact form submissions. Please try again in 15 minutes.",
    });
  },
});

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter verification failed:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// Sanitization middleware
const sanitizeInput = (value) => {
  if (typeof value !== "string") return value;

  // Remove any HTML tags and scripts
  let sanitized = purify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });

  // Additional sanitization - remove any remaining suspicious patterns
  sanitized = sanitized
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();

  return sanitized;
};

// Honeypot check middleware
const checkHoneypot = (req, res, next) => {
  // If honeypot field is filled, it's likely a bot
  if (req.body.website || req.body.url || req.body.honeypot) {
    console.log("Honeypot triggered - potential bot detected");
    // Return success to not alert the bot
    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  }
  next();
};

// Validation rules
const contactValidation = [
  body("user_name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage("Name contains invalid characters")
    .customSanitizer(sanitizeInput),

  body("user_email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage("Email is too long")
    .customSanitizer(sanitizeInput),

  body("user_message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10, max: 2000 })
    .withMessage("Message must be between 10 and 2000 characters")
    .customSanitizer(sanitizeInput),

  body("referrer")
    .optional()
    .trim()
    .isIn(["question", "suggestion", "collaboration", "jobOp", "other", ""])
    .withMessage("Invalid referrer option")
    .customSanitizer(sanitizeInput),
];

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post(
  "/api/contact",
  limiter,
  checkHoneypot,
  contactValidation,
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors
            .array()
            .map((err) => ({ field: err.path, message: err.msg })),
        });
      }

      const { user_name, user_email, user_message, referrer } = req.body;

      // Additional sanitization pass
      const safeName = sanitizeInput(user_name);
      const safeEmail = sanitizeInput(user_email);
      const safeMessage = sanitizeInput(user_message);
      const safeReferrer = sanitizeInput(referrer || "Not specified");

      // Email content
      const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: safeEmail,
        subject: `Portfolio Contact: ${safeReferrer} - From ${safeName}`,
        text: `
Name: ${safeName}
Email: ${safeEmail}
Reference: ${safeReferrer}

Message:
${safeMessage}

---
Sent from Portfolio Contact Form
Time: ${new Date().toISOString()}
IP: ${req.ip}
      `,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #390f3d; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #390f3d; }
    .message { background-color: white; padding: 15px; border-left: 4px solid #390f3d; margin-top: 15px; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Portfolio Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${safeName}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${safeEmail}">${safeEmail}</a>
      </div>
      <div class="field">
        <span class="label">Reference:</span> ${safeReferrer}
      </div>
      <div class="message">
        <div class="label">Message:</div>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
    <div class="footer">
      <p>Sent: ${new Date().toLocaleString()}</p>
      <p>IP Address: ${req.ip}</p>
    </div>
  </div>
</body>
</html>
      `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      console.log(`Contact form submission from ${safeName} (${safeEmail})`);

      res.status(200).json({
        success: true,
        message:
          "Your message has been sent successfully! I will get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message:
          "Failed to send message. Please try again later or contact me directly via social media.",
      });
    }
  }
);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
