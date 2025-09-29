export default function ProjectCard({ title, summary, tech = [], image, live, repo }) {
  return (
    <article className="group bg-white rounded-3xl border border-secondary-30 shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={`${title} preview`} 
            className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
            loading="lazy" 
          />
        ) : (
          <div className="h-48 w-full bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center">
            <div className="text-6xl group-hover:animate-bounce">
              🚀
            </div>
          </div>
        )}
        
        {/* Overlay with links - appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {live && (
              <a 
                className="flex-1 text-center py-3 px-4 bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                href={live} 
                target="_blank" 
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
            {repo && (
              <a 
                className="flex-1 text-center py-3 px-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                href={repo} 
                target="_blank" 
                rel="noreferrer"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-primary group-hover:text-gradient transition-colors duration-300">
            {title}
          </h3>
          <p className="text-secondary leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Tech Stack */}
        {!!tech.length && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span 
                key={t} 
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors duration-200"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Actions - visible when no hover overlay on mobile */}
        <div className="flex gap-3 md:group-hover:opacity-0 transition-opacity duration-300">
          {live && (
            <a 
              className="flex-1 text-center py-3 px-4 text-sm font-medium rounded-xl border-2 border-secondary-30 text-primary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              href={live} 
              target="_blank" 
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {repo && (
            <a 
              className="flex-1 text-center py-3 px-4 text-sm font-medium rounded-xl bg-gradient-primary text-white hover:shadow-lg hover:shadow-accent/25 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              href={repo} 
              target="_blank" 
              rel="noreferrer"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}