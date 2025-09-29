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
    <section className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {allTech.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1.5 rounded-full border text-sm ${filter === t ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}