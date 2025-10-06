import { useState } from "react"
import SEO from "../components/SEO"
import { pageConfigs } from "../utils/seo"

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" })
  const [status, setStatus] = useState({ sending: false, ok: false, error: "" })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    const nameLen = values.name.trim().length
    const msgLen = values.message.trim().length
    
    if (!nameLen) return "Please enter your name."
    if (nameLen > 100) return "Name must be 100 characters or less."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return "Please enter a valid email."
    if (values.email.length > 254) return "Email address is too long."
    if (msgLen < 10) return "Please write a little more detail (at least 10 characters)."
    if (msgLen > 5000) return "Message is too long (max 5000 characters)."
    if (values.website) return "Spam detected."
    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const msg = validate()
    if (msg) {
      setStatus({ sending: false, ok: false, error: msg })
      return
    }
    setStatus({ sending: true, ok: false, error: "" })

    try {
      // Submit to server API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      if (res.ok) {
        setStatus({ sending: false, ok: true, error: "" })
        setValues({ name: "", email: "", message: "", website: "" })
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus({ 
          sending: false, 
          ok: false, 
          error: data.error || "Failed to send message. Please try the email link below." 
        })
      }
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        error: "Network error. Please check your connection or use the email link below.",
      })
    }
  }

  return (
    <>
      <SEO pageConfig={pageConfigs.contact} />
      <section className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">Get In Touch</h1>
        <p className="text-lg text-secondary max-w-xl mx-auto leading-relaxed">
          Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24-48 hours.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-3xl border border-secondary-30 shadow-sm p-8 md:p-12">
        {/* Status Messages */}
        {status.ok && (
          <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200">
            <div className="flex items-center gap-3">
              <div className="text-green-600 text-xl">✅</div>
              <div className="text-green-800 font-medium">
                {status.error ? status.error : "Message sent successfully! I'll get back to you within 24-48 hours."}
              </div>
            </div>
          </div>
        )}
        
        {status.error && !status.ok && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-3">
              <div className="text-red-600 text-xl">⚠️</div>
              <div className="text-red-800 font-medium">
                {status.error}
              </div>
            </div>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={values.website}
            onChange={onChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-primary">
              Name *
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={onChange}
              className="w-full px-4 py-4 touch-target rounded-xl border-2 border-secondary-30 text-primary placeholder-secondary/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              placeholder="Your full name"
              maxLength={100}
              autoComplete="name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-primary">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              className="w-full px-4 py-4 touch-target rounded-xl border-2 border-secondary-30 text-primary placeholder-secondary/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
              placeholder="your.email@example.com"
              maxLength={254}
              autoComplete="email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-primary">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={onChange}
              className="w-full px-4 py-4 rounded-xl border-2 border-secondary-30 text-primary placeholder-secondary/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none min-h-[120px]"
              rows={6}
              maxLength={5000}
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.sending}
            className="w-full touch-target px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status.sending ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending Message...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Alternative Contact */}
        <div className="mt-8 pt-8 border-t border-secondary-30 text-center space-y-4">
          <p className="text-sm text-secondary">
            Prefer email directly?
          </p>
          <a 
            className="inline-flex items-center gap-2 text-accent hover:text-primary font-medium hover:scale-105 transition-all duration-200"
            href="mailto:gaughey2000@protonmail.com"
          >
            📧 gaughey2000@protonmail.com
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl border border-accent/20 p-6 text-center">
        <p className="text-sm text-secondary">
          💡 <strong>Tip:</strong> Include details about your project timeline, budget range, and specific requirements to help me provide the best response.
        </p>
      </div>
      </section>
    </>
  )
}