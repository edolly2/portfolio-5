# 🚀 Quick Start Guide - Secure Contact Form

## TL;DR

Your contact form is now secure and accessible! Follow these steps to get it working:

## 1️⃣ Setup Backend (5 minutes)

```bash
# Navigate to backend
cd backend

# Copy environment file
cp .env.example .env

# Edit with your email (use nano, vim, or any editor)
nano .env
```

**For Gmail users:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password  # NOT your regular password!
EMAIL_TO=your-email@gmail.com
```

**Get Gmail App Password:**
1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification"
3. Click "App passwords"
4. Generate password for "Mail"
5. Copy the 16-character password
6. Paste it in `EMAIL_PASS` (no spaces)

## 2️⃣ Install & Start Backend

```bash
# Still in backend directory
npm install
npm run dev
```

You should see:
```
Backend server running on port 3001
Email server is ready to send messages
```

## 3️⃣ Test Contact Form

```bash
# Open a new terminal
cd frontEnd
npm run dev
```

Visit: http://localhost:5173/portfolio-5/#/contact

Fill out the form and submit. Check your email inbox!

## 4️⃣ Deploy (When Ready)

### Option A: Heroku (Easiest)

```bash
cd backend
heroku create your-portfolio-api
heroku config:set EMAIL_HOST=smtp.gmail.com
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set EMAIL_TO=your-email@gmail.com
heroku config:set ALLOWED_ORIGINS=https://edolly2.github.io
git init
git add .
git commit -m "Initial backend"
heroku git:remote -a your-portfolio-api
git push heroku master
```

### Option B: Railway (Modern)

1. Go to https://railway.app
2. "New Project" → "Deploy from GitHub"
3. Select your repo → select `backend` folder
4. Add environment variables in Settings
5. Deploy!

### Option C: Render (Free)

1. Go to https://render.com
2. "New" → "Web Service"
3. Connect GitHub repo
4. Root Directory: `backend`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add environment variables
8. Deploy!

## 5️⃣ Update Frontend for Production

After deploying backend:

```bash
cd frontEnd
nano .env.local
```

Change to your deployed backend URL:
```env
VITE_API_URL=https://your-backend-url.com
```

Then rebuild and deploy:
```bash
npm run build
npm run deploy
```

## ✅ Verification Checklist

- [ ] Backend running on localhost:3001
- [ ] Frontend running on localhost:5173
- [ ] Submitted test message from form
- [ ] Received email in inbox
- [ ] No errors in browser console
- [ ] No errors in backend terminal

## 🆘 Troubleshooting

**"Invalid login" error:**
- Use App Password, not your regular Gmail password
- Remove any spaces from the password

**"Not allowed by CORS" error:**
- Add your frontend URL to `ALLOWED_ORIGINS` in `.env`
- Restart backend after changing `.env`

**Email not received:**
- Check spam folder
- Verify `EMAIL_TO` is correct
- Check backend terminal for errors
- Try with a different email provider

**"Too many requests" error:**
- You hit the rate limit (5 per 15 min)
- Wait 15 minutes
- Or adjust `RATE_LIMIT_MAX_REQUESTS` in `.env`

## 📚 Full Documentation

- **Backend Setup**: `backend/README.md`
- **Implementation Details**: `CONTACT_FORM_IMPLEMENTATION.md`

## 🔐 Security Features

✅ Rate limiting (5 requests / 15 min)
✅ XSS protection
✅ CSRF considerations
✅ Input sanitization
✅ Honeypot bot detection
✅ CORS protection
✅ Security headers

## ♿ Accessibility Features

✅ ARIA labels
✅ Keyboard navigation
✅ Screen reader support
✅ Focus indicators
✅ Error announcements
✅ Loading states

## 💡 Tips

- Test locally before deploying
- Use environment variables for secrets
- Monitor your email delivery
- Check backend logs for issues
- Keep dependencies updated

## 🎉 You're Done!

Your contact form is now:
- ✅ Secure (2025 best practices)
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Connected to your email
- ✅ Production-ready

Just configure your email and you're good to go!
