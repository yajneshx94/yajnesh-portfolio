import { motion } from 'framer-motion'

export default function Profile() {
  return (
    <main className="px-8 md:px-16 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-accent-green font-mono text-xs tracking-widest mb-3">ABOUT</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Profile</h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Photo placeholder */}
          <div className="shrink-0">
            <div className="w-48 h-48 rounded-2xl border border-accent-blue/20 bg-space-mid overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Yajnesh K"
                className="w-full h-full object-cover"
                onError={e => { e.target.style.display='none' }}
              />
              <div className="w-full h-full flex items-center justify-center text-5xl text-white/20">Y</div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">Yajnesh K</h3>
            <p className="text-accent-cyan/70 text-lg mb-6">Software Developer</p>

            <div className="flex flex-wrap gap-6 text-sm text-white/40 mb-8 font-mono">
              <span>📍 Chennai, India</span>
              <span>🎓 B.E. Computer Science</span>
              <span>📅 Class of 2025</span>
            </div>

            <p className="text-white/55 leading-relaxed max-w-2xl mb-8">
              Recent Computer Science graduate passionate about backend engineering, distributed systems, and building things that scale. I love working with Java and Spring Boot for backend, and I'm actively exploring cloud-native development and DevOps tooling.
            </p>

            {/* Education */}
            <div className="border border-white/8 rounded-xl p-5 mb-8 bg-white/2 max-w-lg">
              <p className="text-white/30 text-xs font-mono tracking-widest mb-3">EDUCATION</p>
              <h4 className="text-white font-semibold mb-1">B.E. Computer Science & Engineering</h4>
              <p className="text-white/40 text-sm">Your College Name · 2021 – 2025</p>
            </div>

            {/* Resume download — only here */}
            <a
              href="/resume.pdf"
              download="Yajnesh_K_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-accent-green/10 border border-accent-green/30 text-accent-green hover:bg-accent-green hover:text-space-dark font-medium transition-all duration-300"
            >
              ↓ Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  )
}