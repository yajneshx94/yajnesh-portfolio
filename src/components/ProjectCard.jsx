export default function ProjectCard({ project }) {
  return (
    <div className="group relative border border-white/10 rounded-xl p-6 bg-white/2 hover:bg-white/5 hover:border-accent-cyan/30 transition-all duration-300">
      {project.highlight && (
        <span className="absolute top-4 right-4 text-xs text-accent-green border border-accent-green/30 px-2 py-0.5 rounded-full">
          Featured
        </span>
      )}
      <p className="text-white/30 text-xs font-mono mb-2">{project.year}</p>
      <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
      <p className="text-accent-cyan/70 text-sm mb-4">{project.subtitle}</p>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
            {t}
          </span>
        ))}
      </div>
      
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-accent-cyan transition-colors group-hover:text-accent-cyan/80"
      >
        <span className="font-mono">→</span> GitHub Repository
      </a>
    </div>
  )
}