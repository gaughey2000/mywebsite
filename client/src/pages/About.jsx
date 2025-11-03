import { Link } from "react-router-dom"
import SkillsGrid from "../components/SkillsGrid"
import SEO from "../components/SEO"
import { pageConfigs } from "../utils/seo"

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-secondary-30 p-4 text-center">
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-xs uppercase tracking-wider text-secondary">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <SEO pageConfig={pageConfigs.about} />
      <section className="space-y-10">
      {/* Hero / Intro */}
      <header className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-8 items-start">
        {/* Left: Intro copy */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            About <span className="opacity-80">Me</span>
          </h1>
          <p className="text-secondary leading-relaxed">
            I’m a software dev in my third year of industry experience with skills across the stack. On this site you can see my projects, including an example e-commerce site, business website, and gym membership
            management software. My professional focus is usability, performance, security, and a polished UX. I aim to complete projects within 5 weeks (depending on size and scope)
            without cutting corners.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="/cv.pdf"
              className="rounded-md px-4 py-2 text-sm text-white bg-accent hover:opacity-90"
            >
              Download CV
            </a>
            <Link
              to="/contact"
              className="rounded-md px-4 py-2 text-sm border border-secondary text-primary hover:bg-muted"
            >
              Contact
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-4 py-2 text-sm border border-secondary text-primary hover:bg-muted"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Skills</h2>
        <p className="text-secondary">
          A practical toolbelt for building, deploying, and maintaining modern web apps.
        </p>
        <SkillsGrid />
      </section>

      {/* Services / What I do */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "MVPs & Prototypes",
              text: "Ship a scoped MVP fast with auth, payments, and an admin dashboard.",
              bullets: ["Auth & roles", "Stripe payments", "Postgres/Prisma"],
            },
            {
              title: "E-commerce",
              text: "Responsive storefronts and back-office dashboards that convert.",
              bullets: ["Product/catalog", "Checkout & webhooks", "Analytics"],
            },
            {
              title: "Dashboards",
              text: "Clean, accessible dashboards with charts and real-time updates.",
              bullets: ["REST/GraphQL", "Caching", "A11y & perf"],
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-secondary-30 p-5 bg-white">
              <div className="font-semibold text-primary">{card.title}</div>
              <p className="text-sm text-secondary mt-2">{card.text}</p>
              <ul className="mt-3 space-y-1 text-sm text-secondary">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Availability / CTA */}
      <section className="rounded-2xl border border-secondary-30 p-6 bg-white/70">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">Currently</h3>
            <p className="text-secondary">
              Open to developer roles and freelance work. UK-based, open to relocate or work remote.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/projects" className="rounded-md px-4 py-2 text-sm border border-secondary text-primary hover:bg-muted">
              View Projects
            </Link>
            <Link to="/contact" className="rounded-md px-4 py-2 text-sm text-white bg-accent hover:opacity-90">
              Book Intro Call
            </Link>
          </div>
        </div>
      </section>
      </section>
    </>
  )
}
