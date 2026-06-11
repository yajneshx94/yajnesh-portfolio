import { useNavigate } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const navigate = useNavigate()

  console.log('project id:', project.id) // temporary debug

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group relative rounded-xl p-6 cursor-pointer transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)'; e.currentTarget.style.background = 'rgba(0,180,255,0.05)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
    >
      {project.highlight && (
        <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full font-mono"
          style={{ color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' }}>
          Featured
        </span>
      )}
      <p className="font-mono text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>{project.year}</p>
      <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
      <p className="text-sm mb-4" style={{ color: 'rgba(0,229,255,0.7)' }}>{project.subtitle}</p>
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded font-mono"
            style={{ background: 'rgba(0,180,255,0.1)', color: '#00b4ff', border: '1px solid rgba(0,180,255,0.2)' }}>
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-2 py-1 rounded font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
            +{project.tech.length - 4} more
          </span>
        )}
      </div>
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
        View case study <span style={{ color: '#00e5ff' }}>→</span>
      </p>
    </div>
  )
}