import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">React/Node Developer for MVPs & E-commerce</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I build fast, clean, and secure web apps. Available for junior dev roles and freelance projects.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/projects" className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm">See Work</Link>
          <Link to="/contact" className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100">Hire Me</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{ title: "Ship MVPs Fast", text: "From blank repo to live product in weeks, not months." },
          { title: "Stripe & Auth", text: "Secure payments, role-based dashboards, robust APIs." },
          { title: "Clean UX", text: "Responsive UI with Tailwind and solid components." }].map(c => (
          <div key={c.title} className="rounded-xl border p-6 bg-white">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}