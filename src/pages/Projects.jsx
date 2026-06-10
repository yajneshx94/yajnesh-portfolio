import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <main className="px-8 md:px-16 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-accent-green font-mono text-xs tracking-widest mb-3">WORK</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Projects</h2>
        <p className="text-white/40 max-w-xl mb-12 leading-relaxed">
          Things I've built — from ML-powered anomaly detectors to multi-tenant auth systems.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}