# 🚀 Hosting Roadmap for Connor McGaughey Portfolio

## 📊 Deep Review Summary

### ✅ Strengths
- **Modern Tech Stack**: React 19, Vite, Tailwind CSS 4, Express, Node.js
- **Security Hardened**: Rate limiting, CORS, Helmet, input validation, honeypot spam protection
- **SEO Optimized**: Structured data, meta tags, sitemap.xml, robots.txt
- **Build Ready**: Production build working (278KB JS, 31KB CSS, gzipped)
- **Documentation**: Comprehensive README, DEPLOYMENT.md, SECURITY.md
- **Dual Platform Config**: Both Netlify and Vercel configs present
- **Git Ready**: Connected to GitHub repo (gaughey2000/mywebsite)

### ⚠️ Issues to Fix

#### 1. **ESLint Errors** (Non-blocking but should fix)
```
client/src/components/SkillsGrid.jsx:55 - Unused 'Icon' parameter
client/src/pages/Contact.jsx:56 - Unused 'err' variable
```

#### 2. **Uncommitted Changes**
- `client/src/pages/Contact.jsx` has modifications not committed

#### 3. **Backend Hosting Not Configured**
- Frontend: Ready for static hosting (Netlify/Vercel)
- Backend: Needs separate hosting (currently only has local setup)
- Contact form will not work without backend API deployed

#### 4. **Environment Configuration**
- Server `.env` exists but needs production SMTP credentials
- Missing domain-specific environment variables for production

---

## 🎯 Recommended Hosting Strategy

### **Option A: Split Hosting (Recommended)**
- **Frontend**: Netlify or Vercel (Free tier)
- **Backend**: Railway, Render, or Fly.io (Free/Low cost)
- **Why**: Best for your architecture, cost-effective, easy to scale

### **Option B: Full-Stack Platform**
- **Platform**: Render.com (Free tier for both)
- **Why**: Simpler setup, single platform

### **Option C: Self-Hosted**
- **Platform**: VPS (DigitalOcean, Linode, Hetzner)
- **Why**: Full control, cheapest long-term ($5-10/month)

---

## 📋 ROADMAP: Option A (Split Hosting - Recommended)

### **Phase 1: Pre-Deployment Fixes** ⏱️ 30 minutes

#### Step 1.1: Fix ESLint Errors
```bash
cd /Users/connormcgaughey/Developer/mywebsite/client

# Fix SkillsGrid.jsx - remove unused Icon parameter
# Fix Contact.jsx - remove or use err variable
```

#### Step 1.2: Commit Changes
```bash
cd /Users/connormcgaughey/Developer/mywebsite
git add .
git commit -m "fix: resolve ESLint errors before deployment"
git push origin main
```

#### Step 1.3: Test Build Locally
```bash
cd client
npm run build
# Should complete without errors

cd ../server
npm start
# Should start on port 3001
```

---

### **Phase 2: Deploy Frontend** ⏱️ 15 minutes

#### Option 2A: Netlify (Recommended)

**Step 2A.1: Sign Up & Connect**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your `gaughey2000/mywebsite` repository
5. Authorize Netlify

**Step 2A.2: Configure Build**
```
Build command:    cd client && npm install && npm run build
Publish directory: client/dist
```

**Step 2A.3: Deploy**
- Click "Deploy site"
- Wait 2-3 minutes for first build
- You'll get a URL like: `https://random-name-123.netlify.app`

**Step 2A.4: Custom Domain (Optional)**
- Buy domain on Namecheap/Google Domains (~$12/year)
- In Netlify: Site settings → Domain management → Add custom domain
- Follow DNS setup instructions

#### Option 2B: Vercel (Alternative)

**Step 2B.1: Deploy via CLI**
```bash
npm install -g vercel
cd /Users/connormcgaughey/Developer/mywebsite
vercel
# Follow prompts, select client directory
```

**Your existing `vercel.json` is already configured!**

---

### **Phase 3: Deploy Backend API** ⏱️ 30 minutes

#### Option 3A: Railway (Recommended - $5/month)

**Step 3A.1: Sign Up**
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select `gaughey2000/mywebsite`

**Step 3A.2: Configure**
```
Root Directory: server
Start Command: node index.js
```

**Step 3A.3: Environment Variables**
Add in Railway dashboard → Variables:
```
NODE_ENV=production
PORT=3001
CLIENT_ORIGIN=https://your-netlify-site.netlify.app
TO_EMAIL=gaughey2000@protonmail.com
FROM_NAME=Connor McGaughey Portfolio
FROM_EMAIL=noreply@connor-mcgaughey.co.uk
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

**Step 3A.4: Get API URL**
- Railway will give you a URL like: `https://mywebsite-server.railway.app`
- Note this for frontend configuration

#### Option 3B: Render (Free Tier)

**Step 3B.1: Sign Up**
1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Click "New +" → "Web Service"
4. Connect `gaughey2000/mywebsite`

**Step 3B.2: Configure**
```
Name: mywebsite-api
Root Directory: server
Environment: Node
Build Command: npm install
Start Command: node index.js
Instance Type: Free
```

**Step 3B.3: Add Environment Variables**
(Same as Railway above)

⚠️ **Note**: Free tier spins down after 15 min of inactivity (cold start delay)

---

### **Phase 4: Connect Frontend to Backend** ⏱️ 15 minutes

#### Step 4.1: Update Client API Endpoint

**Create `.env.production` in client directory:**
```bash
cd /Users/connormcgaughey/Developer/mywebsite/client
```

Create file `client/.env.production`:
```env
VITE_API_URL=https://your-backend-url.railway.app
```

#### Step 4.2: Update Contact Form

In `client/src/pages/Contact.jsx`, change:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

// In handleSubmit:
const res = await fetch(`${API_URL}/api/contact`, {
  // ... rest of code
})
```

#### Step 4.3: Update Server CORS

In `server/index.js`, verify:
```javascript
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
```
Make sure your Railway/Render environment has correct `CLIENT_ORIGIN`

#### Step 4.4: Redeploy Frontend
```bash
git add .
git commit -m "feat: connect to production API"
git push origin main
# Netlify/Vercel will auto-deploy
```

---

### **Phase 5: Email Configuration** ⏱️ 30 minutes

#### Option 5A: Mailtrap (Development/Testing)
- Already configured in your `.env.example`
- Good for testing, not for production
- Free tier: unlimited test emails

#### Option 5B: SendGrid (Recommended for Production)
**Free Tier: 100 emails/day**

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify sender email
3. Create API key
4. Update Railway/Render environment:
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Option 5C: ProtonMail Bridge
- Requires paid ProtonMail account
- Needs Bridge running on server (complex for cloud hosting)
- Better for self-hosted VPS

#### Option 5D: Resend (Modern Alternative)
**Free Tier: 100 emails/day**

1. Sign up at [resend.com](https://resend.com)
2. Verify domain
3. Get API key
4. May need to update server code to use Resend SDK

---

### **Phase 6: Custom Domain Setup** ⏱️ 1 hour

#### Step 6.1: Purchase Domain
**Registrars:**
- Namecheap (~$12/year for .com)
- Google Domains (~$12/year)
- Cloudflare ($9/year)

**Recommended**: `connormcgaughey.com` or `connor-mcgaughey.co.uk`

#### Step 6.2: Configure DNS

**For Frontend (Netlify):**
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5 (Netlify's IP)
```

**For Backend (Railway):**
```
Type: CNAME
Name: api
Value: your-backend.railway.app
```

#### Step 6.3: Enable HTTPS
- Netlify/Railway automatically provisions SSL certificates
- Usually takes 5-10 minutes

#### Step 6.4: Update Environment Variables
```
# Railway
CLIENT_ORIGIN=https://connormcgaughey.com

# Client .env.production
VITE_API_URL=https://api.connormcgaughey.com
```

---

### **Phase 7: Testing & Monitoring** ⏱️ 30 minutes

#### Step 7.1: Test All Pages
- [ ] Home page loads
- [ ] Projects page displays
- [ ] About page renders
- [ ] Contact form submits successfully
- [ ] Receives email notification
- [ ] 404 page works
- [ ] Mobile responsive
- [ ] Fast load times

#### Step 7.2: Test Security
```bash
# Test rate limiting (should block after 10 requests)
for i in {1..15}; do
  curl -X POST https://api.connormcgaughey.com/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
done
```

#### Step 7.3: SEO Check
- Go to [Google Search Console](https://search.google.com/search-console)
- Add property: `https://connormcgaughey.com`
- Submit sitemap: `https://connormcgaughey.com/sitemap.xml`
- Check [PageSpeed Insights](https://pagespeed.web.dev/)

#### Step 7.4: Setup Monitoring (Optional)
**Free Tools:**
- [UptimeRobot](https://uptimerobot.com) - Monitor uptime
- [Sentry](https://sentry.io) - Error tracking (free tier)
- [Google Analytics](https://analytics.google.com) - Traffic analytics

---

## 💰 Cost Breakdown

### **Recommended Setup (Option A)**
| Service | Plan | Cost |
|---------|------|------|
| Netlify (Frontend) | Free | $0/month |
| Railway (Backend) | Hobby | $5/month |
| SendGrid (Email) | Free | $0/month |
| Domain (Namecheap) | .com | $12/year |
| **Total** | | **$5/month + $12/year** |

### **Budget Setup**
| Service | Plan | Cost |
|---------|------|------|
| Netlify (Frontend) | Free | $0/month |
| Render (Backend) | Free | $0/month |
| Mailtrap (Email) | Free | $0/month |
| **Total** | | **$0/month** |
⚠️ Note: Backend cold starts on free tier

### **Self-Hosted Setup**
| Service | Plan | Cost |
|---------|------|------|
| Hetzner VPS | CX11 | €4.50/month |
| Domain | .com | $12/year |
| **Total** | | **~$5/month + $12/year** |

---

## 🔧 Alternative: Quick Deploy (Fastest Route)

### Deploy Frontend Only (5 minutes)
```bash
# Using Netlify Drop
cd /Users/connormcgaughey/Developer/mywebsite/client
npm run build
# Drag client/dist folder to netlify.com/drop
```

**Limitation**: Contact form won't work (no backend)
**Workaround**: Update Contact page with mailto link only

---

## 📝 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Contact form sends emails
- [ ] Custom domain configured (if purchased)
- [ ] HTTPS enabled
- [ ] Sitemap submitted to Google
- [ ] Analytics installed
- [ ] Uptime monitoring active
- [ ] Error tracking configured
- [ ] robots.txt accessible
- [ ] Favicon displays
- [ ] Social media preview works
- [ ] Mobile responsive verified
- [ ] Load time < 3 seconds
- [ ] SEO score > 90

---

## 🆘 Troubleshooting

### Contact Form Not Working
1. Check browser console for errors
2. Verify backend is running: `curl https://api.connormcgaughey.com/api/health`
3. Check CORS settings in server
4. Verify SMTP credentials in Railway/Render

### Frontend Not Updating
1. Check build logs in Netlify/Vercel
2. Clear browser cache
3. Verify latest commit is on GitHub
4. Trigger manual redeploy

### Email Not Sending
1. Test SMTP with: `npm run test-email` (locally with same creds)
2. Check Railway/Render logs
3. Verify email provider credentials
4. Check spam folder

---

## 🎓 Next Steps After Hosting

1. **Analytics**: Add Google Analytics or Plausible
2. **Blog**: Add a blog section with MDX
3. **CMS**: Integrate Contentful or Sanity for dynamic content
4. **Performance**: Add image optimization, lazy loading
5. **A/B Testing**: Test different CTAs, layouts
6. **Newsletter**: Add email signup (Mailchimp/ConvertKit)
7. **Authentication**: Add admin panel for content management
8. **Database**: Add PostgreSQL for dynamic projects/blog posts

---

## 📞 Quick Reference

### Important URLs
- Frontend Repo: https://github.com/gaughey2000/mywebsite
- Netlify: https://netlify.com
- Railway: https://railway.app
- Render: https://render.com
- SendGrid: https://sendgrid.com

### Commands
```bash
# Local dev
cd client && npm run dev        # Frontend: http://localhost:5173
cd server && npm run dev        # Backend: http://localhost:3001

# Production build
cd client && npm run build      # Creates client/dist/

# Test email
cd server && npm run test-email

# Deploy (Vercel)
vercel
```

---

**Last Updated**: October 27, 2025
**Status**: Ready for deployment
**Recommendation**: Start with Phase 1-2 (fix errors + deploy frontend to Netlify)
