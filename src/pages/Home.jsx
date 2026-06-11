import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fullName = "YAJNESH K"
const roles = ["Software Developer", "Backend Engineer", "Java Enthusiast"]

export default function Home() {
  const [displayName, setDisplayName] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)

  // Typewriter for name on mount
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setDisplayName(fullName.slice(0, i + 1))
      i++
      if (i === fullName.length) clearInterval(t)
    }, 90)
    return () => clearInterval(t)
  }, [])

  // Cycle roles
  useEffect(() => {
    const t = setInterval(() => setRoleIndex(p => (p + 1) % roles.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <p className="text-accent-green font-mono text-sm tracking-widest mb-6 opacity-70">
          Hello, world — I'm
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-4 font-lato">
          {displayName}
          <span className="animate-type-cursor text-accent-cyan">|</span>
        </h1>

        <div className="h-12 mb-8 overflow-hidden">
          <motion.p
            key={roleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl text-accent-cyan/80 font-light tracking-wide"
          >
            {roles[roleIndex]}
          </motion.p>
        </div>

        <p className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed mb-4">
  I'm a Computer Science graduate who builds backend systems that actually work under pressure. I work primarily with Java and Spring Boot — building everything from secure authentication platforms to real-time anomaly detection systems. I'm especially drawn to fintech, logistics, and AI in IT operations, where backend software drives real decisions.
</p>

        <p className="text-white/25 text-sm font-mono tracking-widest mb-12">
          JAVA · SPRING BOOT · REACT · SQL · PYTHON
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="px-8 py-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan hover:text-space-dark font-medium transition-all duration-300"
          >
            View Projects →
          </Link>
          <Link
            to="/profile"
            className="px-8 py-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 font-medium transition-all duration-300"
          >
            View Profile
          </Link>
        </div>
      </motion.div>

      {/* Decorative scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </main>
  )
}