# Deployment Guide

## Production Checklist

### 1. Environment Configuration

**Server (.env)**
```bash
# Set production values
NODE_ENV=production
PORT=3001
CLIENT_ORIGIN=https://yourdomain.com

# SMTP credentials (use production provider)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password

# Email configuration
TO_EMAIL=your-email@domain.com
FROM_NAME=Your Name Portfolio
FROM_EMAIL=noreply@yourdomain.com
```

### 2. HTTPS/TLS Setup

**Option A: Using a Reverse Proxy (Recommended)**
- Use nginx, Caddy, or Cloudflare to terminate TLS
- Configure HTTP → HTTPS redirect
- Example nginx config:
  ```nginx
  server {
    listen 443 ssl http2;
    server_name yourdomain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location /api {
      proxy_pass http://localhost:3001;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    location / {
      root /path/to/client/dist;
      try_files $uri $uri/ /index.html;
    }
  }
  
  # Redirect HTTP to HTTPS
  server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
  }
  ```

**Option B: Using Cloudflare**
- Enable "Always Use HTTPS" in SSL/TLS settings
- Set SSL/TLS encryption mode to "Full" or "Full (strict)"
- Enable "Automatic HTTPS Rewrites"

### 3. Security Headers (via Helmet)

Already configured in `server/index.js`, but verify these headers in production:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security` (if using HTTPS)

### 4. Rate Limiting

Current: 10 requests per minute per IP on `/api/*` routes
- Monitor and adjust based on legitimate traffic patterns
- Consider implementing per-user rate limiting if you add authentication

### 5. Database Security (if adding database later)

- Use parameterized queries/prepared statements
- Never construct SQL with string concatenation
- Use environment variables for database credentials
- Enable SSL/TLS for database connections

### 6. Build and Deploy

**Client:**
```bash
cd client
npm ci --production
npm run build
# Upload dist/ to your static hosting or CDN
```

**Server:**
```bash
cd server
npm ci --production
NODE_ENV=production node index.js
# Or use PM2 for process management:
pm2 start index.js --name portfolio-api
```

### 7. Monitoring

- Set up error logging (e.g., Sentry, LogRocket)
- Monitor rate limit hits
- Track failed contact form submissions
- Set up uptime monitoring (e.g., UptimeRobot, Pingdom)

### 8. Credentials Rotation

If you ever suspect credentials were exposed:
1. Immediately rotate SMTP credentials
2. Review server logs for suspicious activity
3. Update `.env` with new values
4. Restart server

### 9. Backup

- Regularly backup your `.env` file (securely, not in git)
- Document your deployment configuration
- Keep a rollback plan

## Testing Production Setup

Before going live:
1. Test contact form submission
2. Verify HTTPS works and HTTP redirects
3. Check all security headers are present (use securityheaders.com)
4. Test rate limiting (submit >10 requests in 1 minute)
5. Verify error messages don't leak sensitive info
6. Test with different email providers (Gmail, Outlook, etc.)
