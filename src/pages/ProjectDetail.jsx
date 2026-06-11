import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projectDetails } from '../data/projectDetails'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectDetails[id]

  if (!project) {
    return (
      <main className="px-8 md:px-16 py-20">
        <p className="text-white/40">Project not found.</p>
        <button onClick={() => navigate('/projects')} className="mt-4 text-accent-cyan underline">
          ← Back to Projects
        </button>
      </main>
    )
  }

  return (
    <main className="px-8 md:px-16 py-20 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

        {/* Back button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: 'rgba(255,255,255,0.35)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
        >
          <i className="fa-solid fa-arrow-left" /> Back to Projects
        </button>

        {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-xs tracking-widest mb-2" style={{ color: '#00b4ff' }}>{project.year}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-lg" style={{ color: '#00e5ff' }}>{project.subtitle}</p>
          </div>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium shrink-0 transition-all duration-200"
            style={{ border: '1px solid rgba(0,180,255,0.3)', color: '#00e5ff', background: 'rgba(0,180,255,0.08)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#00b4ff'; e.currentTarget.style.color = '#050a12' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,180,255,0.08)'; e.currentTarget.style.color = '#00e5ff' }}
          >
            <i className="fa-brands fa-github" /> GitHub Repository
          </a>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-3 py-1 rounded-lg font-mono"
              style={{ background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.2)', color: '#00e5ff' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Problem */}
        <Section title="Problem" icon="fa-solid fa-circle-exclamation">
          <p className="text-white/50 leading-relaxed">{project.problem}</p>
        </Section>

        {/* Architecture */}
        <Section title="Architecture" icon="fa-solid fa-layer-group">
          <div className="flex flex-col gap-4">
            {project.architecture.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-5"
                style={{ background: 'rgba(0,180,255,0.04)', border: '1px solid rgba(0,180,255,0.12)' }}
              >
                <p className="text-white font-semibold mb-2">{layer.layer}</p>
                <p className="text-white/45 text-sm leading-relaxed mb-3">{layer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{ background: 'rgba(0,180,255,0.1)', color: 'rgba(0,229,255,0.7)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Challenges */}
        <Section title="Challenges" icon="fa-solid fa-bolt">
          <div className="flex flex-col gap-3">
            {project.challenges.map((c, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'rgba(0,180,255,0.15)', color: '#00e5ff' }}>
                  {i + 1}
                </span>
                <p className="text-white/50 text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Outcome */}
        <Section title="Outcome" icon="fa-solid fa-chart-line">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.outcome.map((o, i) => (
              <div key={i} className="flex gap-3 rounded-xl p-4"
                style={{ background: 'rgba(0,180,255,0.04)', border: '1px solid rgba(0,180,255,0.12)' }}>
                <i className="fa-solid fa-check mt-0.5 shrink-0" style={{ color: '#4ade80' }} />
                <p className="text-white/55 text-sm leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </Section>

      </motion.div>
    </main>
  )
}

function Section({ title, icon, children }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <i className={`${icon} text-sm`} style={{ color: '#00b4ff' }} />
        <h2 className="text-lg font-semibold text-white tracking-wide">{title}</h2>
        <div className="flex-1 h-px" style={{ background: 'rgba(0,180,255,0.1)' }} />
      </div>
      {children}
    </div>
  )
}