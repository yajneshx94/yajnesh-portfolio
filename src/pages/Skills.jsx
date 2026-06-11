import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <main className="px-8 md:px-16 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-accent-green font-mono text-xs tracking-widest mb-3">TECH STACK</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Skills</h2>
        <p className="text-white/40 max-w-xl mb-12 leading-relaxed">
          Technologies I work with regularly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border rounded-xl p-6 transition-all duration-300"
              style={{ borderColor: 'rgba(0,180,255,0.25)', background: 'rgba(0,180,255,0.03)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="text-white font-semibold">{s.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-lg transition-colors"
                    style={{ background: 'rgba(0,180,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,180,255,0.2)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}