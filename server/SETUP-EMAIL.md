# 📧 Email Setup Guide

## 🧪 Development Setup (Mailtrap)

### Step 1: Sign up for Mailtrap
1. Go to https://mailtrap.io
2. Create a free account
3. Verify your email address

### Step 2: Create an Inbox
1. Go to "Email Testing" in the sidebar
2. Click "Add Inbox" if you don't have one
3. Click on your inbox name

### Step 3: Get SMTP Credentials
1. In your inbox, click the "SMTP Settings" tab
2. Select "Node.js - Nodemailer" from the dropdown
3. Copy the credentials that look like this:
   ```
   host: 'sandbox.smtp.mailtrap.io',
   port: 2525,
   auth: {
     user: 'a1b2c3d4e5f6g7',
     pass: 'h8i9j0k1l2m3n4'
   }
   ```

### Step 4: Update Your .env File
Replace these lines in your `.env` file:
```env
SMTP_USER=REPLACE_WITH_YOUR_MAILTRAP_USER  # ← Use the 'user' value
SMTP_PASS=REPLACE_WITH_YOUR_MAILTRAP_PASS  # ← Use the 'pass' value
```

### Step 5: Test Email
```bash
npm run test-email
```

### Step 6: Test Contact Form
1. Go to http://localhost:5173/contact
2. Fill out the form and submit
3. Check your Mailtrap inbox to see the email!

---

## 🚀 Production Setup (ProtonMail)

### Requirements
- ProtonMail Bridge app (free for paid ProtonMail accounts)
- Download: https://proton.me/mail/bridge

### Setup Steps
1. **Install ProtonMail Bridge**
   - Download and install the Bridge app
   - Sign in with your ProtonMail credentials

2. **Start the Bridge**
   - Launch ProtonMail Bridge
   - It will create a local SMTP server on your machine

3. **Get Bridge Credentials**
   - In Bridge, go to Settings > Advanced
   - Note the SMTP port (usually 1025)
   - Generate an app password for your account

4. **Update .env for Production**
   ```env
   NODE_ENV=production
   SMTP_HOST=127.0.0.1
   SMTP_PORT=1025
   SMTP_USER=your-protonmail@protonmail.com
   SMTP_PASS=your-bridge-app-password
   ```

5. **Deploy Considerations**
   - ProtonMail Bridge must be running on your production server
   - Alternative: Use a service like SendGrid, Mailgun, or AWS SES for production

---

## 📋 Troubleshooting

### "Authentication failed"
- Double-check your username and password
- For Mailtrap: Make sure you copied the exact credentials
- For ProtonMail: Ensure Bridge is running and use the app password

### "Connection refused"
- Check if the SMTP host and port are correct
- For ProtonMail Bridge: Ensure the Bridge app is running

### "Still using mailto"
- Check browser console for API errors
- Ensure server is running on port 3001
- Verify Vite proxy is configured correctly

### Need Help?
Run the test script to diagnose issues:
```bash
npm run test-email
```