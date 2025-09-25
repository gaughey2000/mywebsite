export default function ProjectCard({ title, summary, tech = [], image, live, repo }) {
  return (
    <article className="rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col border-secondary-30">
      {image && <img src={image} alt="" className="h-40 w-full object-cover" loading="lazy" />}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-primary">{title}</h3>
        <p className="text-sm text-secondary mt-2 flex-1">{summary}</p>
        {!!tech.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="rounded-full border px-2 py-1 text-xs text-primary border-secondary-30">{t}</span>
            ))}
          </div>
        )}
        <div className="mt-4 flex gap-3">
          {live && (
            <a className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted border-secondary-30 text-primary"
               href={live} target="_blank" rel="noreferrer">Live</a>
          )}
          {repo && (
            <a className="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-accent text-white hover:opacity-90"
               href={repo} target="_blank" rel="noreferrer">Code</a>
          )}
        </div>
      </div>
    </article>
  )
}