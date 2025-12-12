# Portfolio Contact Form - Secure Backend Setup

This backend API handles contact form submissions securely with 2025 best practices.

## Security Features

- ✅ **Rate Limiting**: 5 requests per 15 minutes per IP
- ✅ **Input Sanitization**: XSS protection with DOMPurify
- ✅ **CORS Protection**: Whitelist allowed origins
- ✅ **Helmet.js**: Security headers (CSP, HSTS, XSS filter)
- ✅ **Validation**: express-validator for robust input checking
- ✅ **Honeypot**: Bot detection field
- ✅ **Content Length Limits**: 10KB max request size
- ✅ **Email Validation**: Proper email regex and normalization

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` with your email credentials:

```env
PORT=3001
NODE_ENV=production

# Gmail Example (recommended: use App Password)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_TO=your-email@gmail.com

# Add your production domain when deployed
ALLOWED_ORIGINS=https://edolly2.github.io,http://localhost:5173

RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 3. Gmail Setup (Recommended)

For Gmail, you need an **App Password** (not your regular password):

1. Go to your Google Account settings
2. Security → 2-Step Verification (enable if not already)
3. Security → App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password in `EMAIL_PASS`

### 4. Alternative Email Providers

**SendGrid:**
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

**Mailgun:**
```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=postmaster@your-domain.mailgun.org
EMAIL_PASS=your-mailgun-password
```

**AWS SES:**
```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password
```

### 5. Start the Backend Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on `http://localhost:3001`

### 6. Configure Frontend

In `/frontEnd`, copy `.env.example` to `.env.local`:

```bash
cd ../frontEnd
cp .env.example .env.local
```

Edit `.env.local`:

```env
# For local development
VITE_API_URL=http://localhost:3001

# For production (update after deploying backend)
# VITE_API_URL=https://your-backend-domain.com
```

### 7. Test the Contact Form

1. Start the backend: `cd backend && npm run dev`
2. Start the frontend: `cd frontEnd && npm run dev`
3. Visit http://localhost:5173/portfolio-5/#/contact
4. Submit a test message
5. Check your email inbox

## Deployment Options

### Option 1: Heroku

```bash
# In backend directory
heroku create your-app-name
heroku config:set EMAIL_HOST=smtp.gmail.com
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set EMAIL_TO=your-email@gmail.com
heroku config:set ALLOWED_ORIGINS=https://edolly2.github.io
git push heroku master
```

### Option 2: Railway

1. Go to https://railway.app
2. Create new project → Deploy from GitHub
3. Add environment variables in Railway dashboard
4. Deploy

### Option 3: Render

1. Go to https://render.com
2. New → Web Service
3. Connect your GitHub repo
4. Add environment variables
5. Deploy

### Option 4: DigitalOcean App Platform

1. Go to DigitalOcean App Platform
2. Create new app from GitHub
3. Configure environment variables
4. Deploy

### Option 5: AWS Lambda (Serverless)

Convert to serverless function using AWS Lambda + API Gateway

## Update Frontend After Deployment

After deploying the backend, update frontend's `.env.local`:

```env
VITE_API_URL=https://your-backend-domain.com
```

Then rebuild and redeploy:

```bash
cd frontEnd
npm run build
npm run deploy
```

## Testing

Test the API directly with curl:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "user_name": "Test User",
    "user_email": "test@example.com",
    "user_message": "This is a test message",
    "referrer": "question"
  }'
```

## Security Checklist

- [ ] Changed default email credentials
- [ ] Using app-specific password (not account password)
- [ ] Updated ALLOWED_ORIGINS with your domain
- [ ] Rate limiting configured appropriately
- [ ] HTTPS enabled in production
- [ ] Environment variables not committed to git
- [ ] Backend deployed on secure server
- [ ] CORS properly configured

## Troubleshooting

**Error: "Invalid login"**
- Use app-specific password for Gmail
- Check EMAIL_USER and EMAIL_PASS are correct

**Error: "Not allowed by CORS"**
- Add your frontend domain to ALLOWED_ORIGINS
- Include both http://localhost:5173 and https://edolly2.github.io

**Error: "Too many requests"**
- Wait 15 minutes or adjust RATE_LIMIT_WINDOW_MS
- Check if you're hitting the rate limit

**Emails not arriving:**
- Check spam folder
- Verify email credentials
- Check server logs for errors
- Test email provider connection

## Accessibility Features

- ARIA labels on all form fields
- Keyboard navigation support
- Screen reader announcements
- Focus management
- Error message announcements
- High contrast error states
- Skip links for keyboard users

## Contact Form Best Practices Implemented

1. **Security**: XSS protection, CSRF considerations, rate limiting
2. **Validation**: Client and server-side validation
3. **Accessibility**: WCAG 2.1 AA compliant
4. **UX**: Loading states, success/error messages, disabled state during submission
5. **Privacy**: No data stored, immediate email forwarding
6. **Performance**: Lightweight dependencies, optimized bundle

## License

MIT
