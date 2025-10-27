# 🚀 Quick Start: Deploy Your Portfolio in 30 Minutes

## ✅ Pre-Deployment Status
- ✅ ESLint errors: **FIXED**
- ✅ Production build: **WORKING** (278KB JS, 31KB CSS)
- ✅ Code quality: **READY**
- ⚠️ Changes need commit: **3 files modified**

## 🎯 Fastest Path to Live Website

### Option 1: Frontend Only (10 minutes) - **NO BACKEND**
**Contact form will NOT work, but site will be live**

```bash
# 1. Build the site
cd /Users/connormcgaughey/Developer/mywebsite/client
npm run build

# 2. Deploy to Netlify Drop
# Go to: https://app.netlify.com/drop
# Drag the `dist` folder onto the page
# Done! You'll get a URL instantly
```

**Result**: Live site at `https://random-name.netlify.app`
**Limitation**: Contact form won't send emails

---

### Option 2: Full Stack Deploy (30 minutes) - **RECOMMENDED**

#### Step 1: Commit Your Fixes (2 minutes)
```bash
cd /Users/connormcgaughey/Developer/mywebsite

git add .
git commit -m "fix: resolve ESLint errors and add hosting documentation"
git push origin main
```

#### Step 2: Deploy Frontend to Netlify (5 minutes)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Sign up" → Choose "GitHub"
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub" → Find `gaughey2000/mywebsite`
5. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `client/dist`
6. Click "Deploy site"
7. Wait 2-3 minutes
8. **Copy your site URL** (e.g., `https://wonderful-name-123.netlify.app`)

#### Step 3: Deploy Backend to Railway (10 minutes)

1. Go to [https://railway.app](https://railway.app)
2. Click "Start a New Project" → "Deploy from GitHub repo"
3. Select `gaughey2000/mywebsite`
4. Click "Add variables" and paste this (update values):

```bash
NODE_ENV=production
PORT=3001
CLIENT_ORIGIN=https://your-netlify-site.netlify.app
TO_EMAIL=gaughey2000@protonmail.com
FROM_NAME=Connor McGaughey Portfolio
FROM_EMAIL=noreply@connormcgaughey.com
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=YOUR_SENDGRID_API_KEY
```

5. Under "Settings":
   - **Root Directory**: `server`
   - **Start Command**: `node index.js`
6. Click "Deploy"
7. **Copy your API URL** (e.g., `https://mywebsite-production.up.railway.app`)

#### Step 4: Get SendGrid API Key (5 minutes)

1. Go to [https://sendgrid.com](https://sendgrid.com)
2. Sign up (Free: 100 emails/day)
3. Verify your email
4. Go to Settings → API Keys → Create API Key
5. Name it "Portfolio Contact Form"
6. Select "Full Access"
7. **Copy the API key**
8. Go back to Railway → Variables → Update `SMTP_PASS` with the key

#### Step 5: Connect Frontend to Backend (8 minutes)

1. On your local machine:
```bash
cd /Users/connormcgaughey/Developer/mywebsite/client
```

2. Create `.env.production`:
```bash
echo "VITE_API_URL=https://your-railway-app.up.railway.app" > .env.production
```

3. Update `src/pages/Contact.jsx`:
```javascript
// Find line ~6, add this at the top of the file:
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

// Find the fetch call (around line 40), change to:
const res = await fetch(`${API_URL}/api/contact`, {
```

4. Commit and push:
```bash
cd /Users/connormcgaughey/Developer/mywebsite
git add .
git commit -m "feat: connect frontend to production API"
git push origin main
```

5. Netlify will auto-deploy (2-3 minutes)

#### Step 6: Test Everything (5 minutes)

1. Visit your Netlify URL
2. Navigate to Contact page
3. Fill out form and submit
4. Check your email (gaughey2000@protonmail.com)
5. If received: ✅ **SUCCESS!**

---

## 🎨 Custom Domain (Optional)

### Buy Domain ($12/year)
1. Go to [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google.com)
2. Search for `connormcgaughey.com`
3. Purchase

### Configure in Netlify
1. Netlify dashboard → Domain settings
2. Add custom domain → Enter `connormcgaughey.com`
3. Follow DNS setup instructions
4. Wait 10-30 minutes for DNS to propagate

### Update Backend
1. Railway → Variables → Update:
```
CLIENT_ORIGIN=https://connormcgaughey.com
```

---

## 🆘 Troubleshooting

### Contact Form Not Working
```bash
# Check backend health
curl https://your-railway-url.up.railway.app/api/health

# Should return: {"ok":true}
```

### Frontend Not Updating
1. Check Netlify deploy logs
2. Trigger manual deploy: Netlify → Deploys → "Trigger deploy"

### Email Not Sending
1. Check Railway logs: Railway → Deployments → View logs
2. Verify SendGrid API key
3. Check spam folder

---

## 📊 What You'll Have

- ✅ Live portfolio at Netlify URL
- ✅ Working contact form
- ✅ Email notifications to gaughey2000@protonmail.com
- ✅ HTTPS enabled
- ✅ Free hosting (for now)
- ✅ Auto-deploy on git push

## 💰 Costs

- Netlify: **Free**
- Railway: **$5/month** (free $5 credit to start)
- SendGrid: **Free** (100 emails/day)
- Domain: **$12/year** (optional)

**Total**: $5/month (or $0 for first month)

---

## 🔄 Future Updates

To update your site:
```bash
# Make changes locally
git add .
git commit -m "update: description of changes"
git push origin main

# Netlify & Railway auto-deploy in 2-3 minutes
```

---

## 📚 Full Documentation

- Complete roadmap: `HOSTING-ROADMAP.md`
- Deployment guide: `DEPLOYMENT.md`
- Email setup: `server/SETUP-EMAIL.md`
- Security policy: `SECURITY.md`

---

**Ready to go live?** Start with Step 1 above! 🚀
