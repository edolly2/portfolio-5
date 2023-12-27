// require('dotenv').config();
// const express = require('express');
// // const router = express.Router();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// app.use(bodyParser.json());

// const emailService = process.env.EMAIL_SERVICE;
// const emailUser = process.env.EMAIL_USER;
// const emailPassword = process.env.EMAIL_PASSWORD;

// const transporter = nodemailer.createTransport({
//   service: emailService,
//   auth: {
//     user: emailUser,
//     pass: emailPassword,
//   },
// });

// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: 'Incomplete data' });
//   }

//   const sanitizedMessage = message;

//   const mailOptions = {
//     from: FormData.email,
//     to: 'your@email.com',
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${sanitizedMessage}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Email sending error:', error);
//       res.status(500).json({ success: false, message: 'Failed to send email' });
//     } else {
//       console.log('Email sent:', info.response);
//       res
//         .status(200)
//         .json({ success: true, message: 'Email sent successfully' });
//     }
//   });
// });
// app.use(cors());
// // app.use(express.json());
// // app.use('/', router);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// // router.get('/', function (req, res) {
// //   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// // });

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'web.dollinger.pro@gmail.com',
//     pass: '52764Ffff52764!',
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Ready to Send');
//   }
// });
