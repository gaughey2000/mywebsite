import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// security & basics
app.use(helmet())
app.use(express.json({ limit: '20kb' }))

// CORS for local dev (client on 5173)
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
app.use(cors({ origin: [CLIENT_ORIGIN], methods: ['POST', 'GET', 'OPTIONS'] }))

// rate limit
app.use('/api/', rateLimit({ windowMs: 60_000, max: 10 }))

// SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465, // true if 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

// quick health check
app.get('/api/health', (req, res) => res.json({ ok: true }))

// contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name = '', email = '', message = '', website = '' } = req.body || {}

    // honeypot: bots often fill hidden fields
    if (website) return res.status(400).json({ ok: false, error: 'Spam detected' })

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const nameLen = name.trim().length
    const msgLen = message.trim().length
    
    if (!nameLen || nameLen > 100) {
      return res.status(400).json({ ok: false, error: 'Name must be 1-100 characters' })
    }
    if (!validEmail || email.length > 254) {
      return res.status(400).json({ ok: false, error: 'Invalid email address' })
    }
    if (msgLen < 10 || msgLen > 5000) {
      return res.status(400).json({ ok: false, error: 'Message must be 10-5000 characters' })
    }

    const safe = (s) => String(s || '').replace(/[\r\n<>]/g, '').trim()

    const mail = {
      from: `"${safe(process.env.FROM_NAME || 'Website')}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New inquiry from ${safe(name)}`,
      replyTo: `"${safe(name)}" <${safe(email)}>`, // lets you click Reply in your inbox
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from website contact form.`,
    }

    await transporter.sendMail(mail)
    res.json({ ok: true })
  } catch (err) {
    // Log safely without exposing stack traces in production
    const isProd = process.env.NODE_ENV === 'production'
    if (isProd) {
      console.error('contact error:', err.message)
    } else {
      console.error('contact error:', err)
    }
    res.status(500).json({ ok: false, error: 'Server error' })
  }
})

const PORT = Number(process.env.PORT || 3001)
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))