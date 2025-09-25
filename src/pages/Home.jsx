import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          React/Node Developer for MVPs & E-commerce
        </h1>
        <p className="text-secondary max-w-2xl mx-auto">
          I build fast, clean, and secure web apps. Available for junior dev roles and freelance projects.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/projects" className="rounded-md text-white px-4 py-2 text-sm bg-accent hover:opacity-90">See Work</Link>
          <Link to="/contact" className="rounded-md border px-4 py-2 text-sm hover:bg-muted border-secondary text-primary">Hire Me</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{ title: "Ship MVPs Fast", text: "From blank repo to live product in weeks, not months." },
          { title: "Stripe & Auth", text: "Secure payments, role-based dashboards, robust APIs." },
          { title: "Clean UX", text: "Responsive UI with Tailwind and solid components." }].map(c => (
          <div key={c.title} className="rounded-xl border p-6 bg-white border-secondary-30">
            <h3 className="font-semibold text-primary">{c.title}</h3>
            <p className="text-sm text-secondary mt-2">{c.text}</p>
          </div>
        ))}
      </div>

      {/* Debug swatches (remove later) */}
      <div className="mt-8 grid grid-cols-4 gap-3">
        {["--primary","--secondary","--accent","--muted"].map(v => (
          <div key={v} className="rounded-lg border border-secondary-30 p-3">
            <div className="h-10 w-full rounded mb-2" style={{ background: `var(${v})` }} />
            <div className="text-xs text-secondary">{v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}