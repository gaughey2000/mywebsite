import { useMemo, useState } from "react"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const allTech = useMemo(() => {
    const set = new Set()
    projects.forEach(p => p.tech?.forEach(t => set.add(t)))
    return ["All", ...Array.from(set)]
  }, [])

  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? projects : projects.filter(p => p.tech?.includes(filter))

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">My Projects</h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          A showcase of web applications and solutions I've built using modern technologies
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {allTech.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === t 
                ? "bg-gradient-primary text-white shadow-lg shadow-accent/25" 
                : "bg-white border-2 border-secondary-30 text-secondary hover:border-accent hover:text-accent hover:bg-accent/5 hover:scale-105"
            }`}
          >
            {t} {filter === t && "✓"}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, index) => (
          <div
            key={project.title}
            className="animate-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16 space-y-4">
          <div className="text-6xl">🔍</div>
          <h3 className="text-xl font-semibold text-secondary">No projects found</h3>
          <p className="text-secondary">Try selecting a different technology filter</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl border border-accent/20 p-8 md:p-12 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient">
          Like What You See?
        </h2>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          These projects represent just a sample of my work. I'd love to discuss how I can help bring your ideas to life.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Let's Work Together
          </a>
          <a 
            href="/about"
            className="px-8 py-4 font-semibold rounded-2xl border-2 border-accent/30 text-primary hover:bg-accent/10 transform hover:scale-105 transition-all duration-200"
          >
            Learn More About Me
          </a>
        </div>
      </div>
    </section>
  )
}