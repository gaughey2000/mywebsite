# 🚀 Netlify Deployment - Step-by-Step Guide

**Your Domain**: `connor-mcgaughey.co.uk`
**Estimated Time**: 15 minutes

---

## 📋 Pre-Deployment Checklist

Before we start, let's make sure everything is ready:

```bash
# 1. Navigate to your project
cd /Users/connormcgaughey/Developer/mywebsite

# 2. Commit your recent fixes
git add .
git commit -m "fix: resolve ESLint errors and add deployment documentation"
git push origin main

# 3. Verify build works locally
cd client
npm run build
# Should complete without errors
```

✅ **Once that's done, you're ready to deploy!**

---

## 🌐 Part 1: Sign Up & Connect GitHub (5 minutes)

### Step 1: Create Netlify Account

1. Go to **https://app.netlify.com/signup**
2. Click **"Sign up with GitHub"**
3. Authorize Netlify to access your GitHub account
4. You'll be redirected to your Netlify dashboard

### Step 2: Import Your Repository

1. Click the big green **"Add new site"** button
2. Select **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. You'll see a list of your repositories
5. Find and click **"gaughey2000/mywebsite"**
   - Use the search box if needed: type "mywebsite"

---

## ⚙️ Part 2: Configure Build Settings (3 minutes)

You'll see a configuration screen with 3 sections:

### Section 1: Site Settings
- **Site name**: Leave default (you can change it later)
- **Branch to deploy**: `main` ✅ (already selected)

### Section 2: Build Settings

This is **CRITICAL** - configure exactly like this:

```
Base directory:     client
Build command:      npm install && npm run build
Publish directory:  client/dist
Functions directory: (leave empty)
```

**Important**: Make sure "Base directory" is set to `client`, not blank!

### Section 3: Environment Variables
- Skip this for now (click "Show advanced" then collapse it again)
- We don't need any environment variables yet

### Deploy!
1. Click the big **"Deploy gaughey2000/mywebsite"** button
2. You'll be taken to the deploy log screen

---

## ⏳ Part 3: Wait for Build (2-3 minutes)

You'll see a real-time log of the build process:

```
10:47:35 AM: Build ready to start
10:47:37 AM: Cloning repository...
10:47:40 AM: Installing dependencies...
10:48:10 AM: Building site...
10:48:12 AM: Build complete!
10:48:13 AM: Deploying to CDN...
10:48:15 AM: Site is live! ✨
```

**Watch for**:
- ✅ Green checkmarks = good
- ❌ Red errors = something went wrong

### If Build Fails:

**Common Issue #1**: "Base directory not found"
- Solution: Make sure you set "Base directory" to `client`

**Common Issue #2**: "Build command failed"
- Solution: Check that you used `npm install && npm run build`

**Common Issue #3**: "Publish directory is empty"
- Solution: Set "Publish directory" to `client/dist`

---

## 🎉 Part 4: Your Site is Live! (Immediate)

Once build completes:

1. You'll see a **green success message**
2. Your site URL will be displayed (something like):
   ```
   https://wonderful-name-123456.netlify.app
   ```
3. Click the URL to view your live site!

### Test Your Site:
- ✅ Home page loads
- ✅ Projects page works
- ✅ About page displays
- ✅ Contact page shows (form won't work yet - that's expected)
- ✅ Navigation works
- ✅ Theme changes work
- ✅ Mobile responsive

---

## 🎨 Part 5: Add Custom Domain (5 minutes)

Now let's connect your `connor-mcgaughey.co.uk` domain!

### In Netlify:

1. From your site dashboard, click **"Domain settings"** (top menu)
2. Under "Custom domains", click **"Add domain alias"**
3. Enter: `connor-mcgaughey.co.uk`
4. Click **"Add domain"**
5. You'll see a warning: **"Check DNS configuration"** - this is normal!

### Add www Subdomain:

1. Click **"Add domain alias"** again
2. Enter: `www.connor-mcgaughey.co.uk`
3. Click **"Add domain"**

### Note Your DNS Instructions:

Netlify will show you what DNS records to add. Keep this page open!

You should see something like:

```
Primary domain: connor-mcgaughey.co.uk

DNS Configuration Required:
- Type: A Record, Name: @, Value: 75.2.60.5
- Type: CNAME, Name: www, Value: wonderful-name-123456.netlify.app
```

---

## 🌍 Part 6: Configure Namecheap DNS (5 minutes)

Now switch to Namecheap:

### Step 1: Access DNS Settings

1. Go to **https://namecheap.com**
2. Sign in to your account
3. Click **"Domain List"** in the left sidebar
4. Find **connor-mcgaughey.co.uk**
5. Click **"Manage"** button

### Step 2: Go to Advanced DNS

1. Click the **"Advanced DNS"** tab at the top
2. You'll see a list of DNS records

### Step 3: Remove Default Records

Look for existing records and delete these if they exist:
- Any "Parking Page" records
- Any default "URL Redirect" records
- Old A or CNAME records pointing to Namecheap servers

**How to delete**: Click the trash icon 🗑️ next to each record

### Step 4: Add Netlify DNS Records

Click **"Add New Record"** and add each of these:

#### Record 1: Root Domain (A Record)
```
Type:  A Record
Host:  @
Value: 75.2.60.5
TTL:   Automatic
```

#### Record 2: WWW Subdomain (CNAME)
```
Type:  CNAME Record
Host:  www
Value: wonderful-name-123456.netlify.app
       ↑ Use YOUR actual Netlify URL (without https://)
TTL:   Automatic
```

### Step 5: Save Changes

1. Click the green **"Save All Changes"** button
2. You'll see a confirmation message

### DNS Propagation Time

- Usually takes: **10-30 minutes**
- Can take up to: **24-48 hours** (rare)
- Check status: Type your domain in your browser

---

## 🔒 Part 7: Enable HTTPS (Automatic)

Back in Netlify:

1. Go to **"Domain settings"** → **"HTTPS"**
2. Netlify will automatically provision an SSL certificate
3. This happens automatically once DNS is configured
4. Status will show:
   - ⏳ "Waiting for DNS propagation" (10-30 min)
   - ⏳ "Provisioning certificate" (1-5 min)
   - ✅ "Certificate active" (Done!)

### Force HTTPS Redirect

Once certificate is active:

1. Scroll down to **"Force HTTPS"**
2. Toggle it **ON** (slider turns blue)
3. This redirects `http://` to `https://` automatically

---

## ✅ Part 8: Verify Everything Works

### Test These URLs:

1. **http://connor-mcgaughey.co.uk**
   - Should redirect to https:// ✅
   
2. **https://connor-mcgaughey.co.uk**
   - Should show your site with green padlock 🔒 ✅
   
3. **https://www.connor-mcgaughey.co.uk**
   - Should also work ✅
   
4. **Your old Netlify URL** (wonderful-name-123456.netlify.app)
   - Still works as a backup ✅

### Test Site Functionality:

- [ ] All pages load (Home, Projects, About, Contact)
- [ ] Navigation works
- [ ] Theme switcher works
- [ ] Mobile responsive
- [ ] Images load (favicon, etc)
- [ ] Fast load time

---

## 🎯 What About the Contact Form?

**Current status**: Form displays but won't send emails yet

**Why**: Backend API not deployed yet

**Next step**: Deploy backend to Railway (see `RAILWAY-DEPLOYMENT-GUIDE.md`)

**For now**: The form shows your email as fallback, so visitors can still contact you!

---

## 🔄 Part 9: Set Up Auto-Deploy

**Good news**: This is already configured! 🎉

Every time you push to GitHub:

```bash
git add .
git commit -m "update: your changes"
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Build your site
3. Deploy the update
4. Live in 2-3 minutes!

### View Build Status:

1. Netlify Dashboard → **"Deploys"** tab
2. See all past and current deployments
3. Click any deploy to see logs

---

## 🎨 Part 10: Optional Site Settings

### Change Site Name:

1. Site settings → General → Site details
2. Click **"Change site name"**
3. Pick something memorable (e.g., `connor-portfolio`)
4. Your Netlify URL becomes: `connor-portfolio.netlify.app`

### Deploy Notifications:

1. Site settings → Build & deploy → Deploy notifications
2. Add email or Slack notifications for:
   - Deploy succeeded
   - Deploy failed

### Preview Deploys:

Already enabled! Pull requests automatically get preview URLs.

---

## 📊 Netlify Dashboard Overview

### Key Sections:

**Deploys**
- See all deployments
- View build logs
- Rollback to previous version

**Domain settings**
- Manage custom domains
- Configure DNS
- SSL certificates

**Site settings**
- Change site name
- Environment variables
- Build settings

**Analytics** (Optional paid feature)
- Visitor stats
- Page views
- Traffic sources

---

## 🆘 Troubleshooting

### "Site Not Found" After Adding Domain

**Cause**: DNS hasn't propagated yet
**Solution**: Wait 30 minutes, clear browser cache, try again

**Check DNS**: 
```bash
# Mac/Linux terminal
dig connor-mcgaughey.co.uk

# Should show: 75.2.60.5
```

### "Certificate Provisioning Failed"

**Cause**: DNS not configured correctly
**Solution**: 
1. Verify DNS records in Namecheap
2. Wait for DNS to propagate
3. In Netlify: Domain settings → "Verify DNS configuration"

### Build Fails After Code Changes

1. Check **Netlify deploy log** for exact error
2. Test build locally: `cd client && npm run build`
3. Fix the error
4. Push to GitHub
5. Netlify will auto-retry

### Old Netlify URL Shows Old Content

**Cause**: Browser cache
**Solution**: Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## 🎓 Next Steps

### Now:
1. ✅ Frontend is live at `connor-mcgaughey.co.uk`
2. ⏳ Contact form displays but doesn't send emails yet

### Next (Backend Deployment):
1. Deploy backend API to Railway
2. Configure SendGrid for emails
3. Connect frontend to backend
4. Test contact form end-to-end

**See**: `RAILWAY-DEPLOYMENT-GUIDE.md` (coming next!)

---

## 📞 Quick Reference

### Your URLs:
- **Production**: https://connor-mcgaughey.co.uk
- **Netlify**: https://wonderful-name-123456.netlify.app (your actual URL)
- **GitHub**: https://github.com/gaughey2000/mywebsite

### Important Links:
- **Netlify Dashboard**: https://app.netlify.com
- **Namecheap Dashboard**: https://namecheap.com/myaccount/domain-list
- **DNS Checker**: https://dnschecker.org

### Commands:
```bash
# Local development
cd /Users/connormcgaughey/Developer/mywebsite/client
npm run dev

# Test build
npm run build

# Deploy (automatic via git)
git push origin main
```

---

## ✅ Deployment Complete!

Congratulations! Your portfolio frontend is now live at:

🌐 **https://connor-mcgaughey.co.uk**

**Current status**:
- ✅ Site is live
- ✅ Custom domain configured
- ✅ HTTPS enabled
- ✅ Auto-deploy on git push
- ⏳ Backend/contact form (next step)

**Time spent**: ~15 minutes
**Cost**: $0/month (Netlify free tier)

Ready to deploy the backend? Let me know! 🚀
