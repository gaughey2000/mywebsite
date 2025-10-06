# Connor McGaughey - Portfolio Website

Full-stack portfolio website built with React, Node.js, and Express. Features a dynamic theme system, SEO optimization, and a secure contact form with email integration.

## Tech Stack

**Frontend:**
- React 19 with React Router
- Vite for build tooling
- Tailwind CSS 4 for styling
- React Icons

**Backend:**
- Node.js with Express
- Nodemailer for email delivery
- Helmet for security headers
- Rate limiting and CORS protection

## Features

- 🎨 **Dynamic theme system** with randomizable color palettes
- 🔍 **Comprehensive SEO** with structured data and meta tags
- 📧 **Contact form** with spam protection and server-side validation
- 📱 **Fully responsive** mobile-first design
- 🔒 **Security hardened** with rate limiting, input validation, and sanitization
- ⚡ **Fast builds** with Vite

## Local Development

### Prerequisites
- Node.js 18+ and npm
- SMTP credentials (Mailtrap for dev, or your email provider)

### Setup

1. **Clone and install:**
   ```bash
   git clone https://github.com/gaughey2000/mywebsite.git
   cd mywebsite
   ```

2. **Server setup:**
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your SMTP credentials
   npm start
   ```

3. **Client setup (separate terminal):**
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. **Access:**
   - Frontend: http://localhost:5173
   - API: http://localhost:3001/api/health

### Email Setup

For development, use [Mailtrap.io](https://mailtrap.io) (free):
1. Sign up and create an inbox
2. Get SMTP credentials from Settings > SMTP
3. Add to `server/.env`:
   ```bash
   SMTP_HOST=sandbox.smtp.mailtrap.io
   SMTP_PORT=2525
   SMTP_USER=your-username
   SMTP_PASS=your-password
   ```

See `server/SETUP-EMAIL.md` for detailed instructions.

## Project Structure

```
mywebsite/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route pages
│   │   ├── theme/       # Theme system
│   │   ├── utils/       # SEO and utilities
│   │   └── data/        # Static content
│   └── dist/            # Production build (gitignored)
├── server/              # Express API
│   ├── index.js         # Main server file
│   └── .env             # Secrets (gitignored)
├── SECURITY.md          # Security policy
├── DEPLOYMENT.md        # Production deployment guide
└── README.md            # This file
```

## Scripts

**Client:**
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint

**Server:**
- `npm start` - Start production server
- `npm run dev` - Start with nodemon (auto-reload)
- `npm run test-email` - Test email configuration

## Security

- ✅ Input validation and sanitization
- ✅ Rate limiting (10 req/min per IP)
- ✅ CORS configured for specific origins
- ✅ Helmet security headers
- ✅ Body size limits (20kb)
- ✅ Honeypot spam protection
- ✅ No secrets in source code

See [SECURITY.md](SECURITY.md) for full security policy.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment checklist and configuration.

**Quick production build:**
```bash
# Client
cd client && npm run build

# Server
cd server && NODE_ENV=production node index.js
```

## License

Personal portfolio project. Code available for reference.

## Contact

- Portfolio: [connormcgaughey.com](https://connormcgaughey.com)
- Email: gaughey2000@protonmail.com
- GitHub: [@gaughey2000](https://github.com/gaughey2000)
