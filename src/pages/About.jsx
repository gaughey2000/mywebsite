import SkillsGrid from "../components/SkillsGrid"

export default function About() {
    return (
      <section className="prose max-w-none">
        <h1 className="text-primary">About</h1>
        <p className="text-secondary">
          I’m a React/Node developer focused on MVPs, e-commerce, and clean admin dashboards. I care about performance,
          security, and accessibility.
        </p>
        <h2 className="text-primary">Skills</h2>
        <SkillsGrid />
        <h2 className="text-primary">Currently</h2>
        <p className="text-secondary">Open to developer roles and freelance work. Based in the UK but im open to relocate to any corner of the world; remote-friendly.</p>
      </section>
    )
  }