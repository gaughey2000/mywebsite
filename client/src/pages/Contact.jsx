import { useState } from "react"

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" })
  const [status, setStatus] = useState({ sending: false, ok: false, error: "" })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return "Please enter a valid email."
    if (values.message.trim().length < 10) return "Please write a little more detail."
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

    const to = "cmcgaughey2000@icloud.com" 
    const subject = `New inquiry from ${values.name} (${values.email})`
    const bodyLines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      "",
      "Message:",
      values.message,
      "",
      "---",
      "Sent from the contact form on your website.",
    ]
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`

    try {
      // Try opening the user's email client with a prefilled draft
      window.location.href = mailto

      // Clipboard fallback: copy the message so they can paste if needed
      try {
        await navigator.clipboard.writeText(bodyLines.join("\n"))
      } catch {
        // Clipboard API not available or denied - that's okay
      }

      setStatus({ sending: false, ok: true, error: "" })
      setValues({ name: "", email: "", message: "", website: "" })
    } catch {
      setStatus({
        sending: false,
        ok: false,
        error: "Couldn’t open your email app. Please use the email link below.",
      })
    }
  }

  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-semibold text-primary">Contact</h1>
      <p className="text-secondary mt-2">
        Drop a message about roles or projects. I aim to reply within 24–48 hours.
      </p>

      {/* status */}
      {status.ok && (
        <div className="mt-4 rounded-md border border-secondary-30 bg-muted p-3 text-sm text-primary">
          Your email draft should be open now. If not, I copied the message to your clipboard—paste it into an email.
        </div>
      )}
      {status.error && (
        <div className="mt-4 rounded-md border border-secondary-30 p-3 text-sm text-primary">
          {status.error}
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
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

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">Name</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            className="mt-1 w-full rounded-md border px-3 py-2 border-secondary-30 text-primary"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className="mt-1 w-full rounded-md border px-3 py-2 border-secondary-30 text-primary"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary">Message</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={onChange}
            className="mt-1 w-full rounded-md border px-3 py-2 border-secondary-30 text-primary"
            rows={5}
            placeholder="What do you need?"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status.sending}
          className="rounded-md text-white px-4 py-2 text-sm bg-accent hover:opacity-90 disabled:opacity-60"
        >
          {status.sending ? "Opening your email app…" : "Send Email"}
        </button>
      </form>

      <div className="mt-6 text-sm text-secondary">
        Prefer direct?{" "}
        <a className="underline text-primary" href="mailto:cmcgaughey2000@icloud.com">cmcgaughey2000@icloud.com</a>
      </div>

      <p className="text-xs text-secondary mt-4">
        Tip: If nothing opens, your browser may block email apps. Use the email link above, or paste the copied text.
      </p>
    </section>
  )
}