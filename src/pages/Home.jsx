import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Connor McGaughey: <br/>Fullstack Software Developer
        </h1>
        <p className="text-secondary max-w-2xl mx-auto">
          I offer fast, clean, and secure code. Available for all software development roles and freelance projects.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/projects" className="rounded-md text-white px-4 py-2 text-sm bg-accent hover:opacity-90">See My Work</Link>
          <Link to="/contact" className="rounded-md border px-4 py-2 text-sm hover:bg-muted border-secondary text-primary">Enquire</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{ title: "Apps and Websites", text: "From your own personal website to a full buissness software solutions. No project is too big or small." },
          { title: "SaaS", text: "Building and managing all your SaaS needs" },
          { title: "Clean Responsive UI", text: "Responsive UI with using Tailwind and solid components." }].map(c => (
          <div key={c.title} className="rounded-xl border p-6 bg-white border-secondary-30">
            <h3 className="font-semibold text-primary">{c.title}</h3>
            <p className="text-sm text-secondary mt-2">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}