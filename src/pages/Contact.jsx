export default function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault()
      alert("Form not wired yet")
    }
  
    return (
      <section className="max-w-xl">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-gray-600 mt-2">
          Drop a message about roles or projects. I aim to reply within 24–48 hours.
        </p>
  
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea className="mt-1 w-full rounded-md border px-3 py-2" rows="5" placeholder="What do you need?" required />
          </div>
          <button className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm">Send</button>
        </form>
  
        <div className="mt-6 text-sm">
          Or email: <a className="underline" href="mailto:you@example.com">you@example.com</a>
        </div>
      </section>
    )
  }