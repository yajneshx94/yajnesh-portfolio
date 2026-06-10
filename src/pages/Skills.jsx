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
              className="border border-white/8 rounded-xl p-6 bg-white/2 hover:border-accent-cyan/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="text-white font-semibold">{s.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-lg bg-space-mid/80 text-white/60 border border-white/8 hover:text-accent-cyan hover:border-accent-cyan/20 transition-colors"
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