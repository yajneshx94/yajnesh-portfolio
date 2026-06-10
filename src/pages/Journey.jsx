import { motion } from 'framer-motion'
import { journey } from '../data/journey'

export default function Journey() {
  return (
    <main className="px-8 md:px-16 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-accent-green font-mono text-xs tracking-widest mb-3">TIMELINE</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Journey</h2>
        <p className="text-white/40 max-w-xl mb-16 leading-relaxed">
          My progression as a developer — each project taught me something new.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-blue/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {journey.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-accent-cyan/40 bg-space-dark flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                </div>

                <div className="border border-white/8 rounded-xl p-6 bg-white/2 hover:border-accent-cyan/20 transition-all duration-300">
                  <p className="text-accent-cyan/50 text-xs font-mono tracking-widest mb-1">
                    {item.month} {item.year}
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue/80 border border-accent-blue/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  )
}