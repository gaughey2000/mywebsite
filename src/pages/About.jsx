export default function About() {
    return (
      <section className="prose max-w-none">
        <h1 className="text-primary">About</h1>
        <p className="text-secondary">
          I’m a React/Node developer focused on MVPs, e-commerce, and clean admin dashboards. I care about performance,
          security, and accessibility.
        </p>
        <h2 className="text-primary">Skills</h2>
        <ul className="text-secondary">
          <li>Frontend: React, React Router, Tailwind</li>
          <li>Backend: Node, Express, PostgreSQL, Prisma</li>
          <li>Payments/Auth: Stripe, JWT, role-based access</li>
          <li>Tooling: Vite, Jest, GitHub, Render/Vercel</li>
        </ul>
        <h2 className="text-primary">Currently</h2>
        <p className="text-secondary">Open to junior developer roles and freelance work. Based in the UK; remote-friendly.</p>
      </section>
    )
  }