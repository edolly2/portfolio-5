#!/bin/bash

# Portfolio Contact Form Setup Script

echo "🚀 Portfolio Contact Form Setup"
echo "================================"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found!"
    echo "📋 Copying .env.example to .env..."
    cp .env.example .env
    echo ""
    echo "✅ Created .env file"
    echo ""
    echo "📝 IMPORTANT: Edit .env with your email credentials!"
    echo "   nano .env"
    echo ""
    echo "For Gmail:"
    echo "  1. Enable 2-Step Verification in your Google Account"
    echo "  2. Go to Security → App passwords"
    echo "  3. Generate an app password for 'Mail'"
    echo "  4. Use that password in EMAIL_PASS"
    echo ""
    read -p "Press Enter after you've configured .env..."
fi

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🧪 Testing email configuration..."
node -e "
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Email configuration error:', error.message);
        process.exit(1);
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});
"

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "To start the server:"
    echo "  npm run dev    (development)"
    echo "  npm start      (production)"
    echo ""
    echo "The server will run on http://localhost:3001"
else
    echo ""
    echo "⚠️  Email configuration test failed"
    echo "Please check your .env file and try again"
    exit 1
fi
