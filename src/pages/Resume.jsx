import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <main className="px-8 md:px-16 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

        <p className="font-mono text-xs tracking-widest mb-3" style={{ color: '#00b4ff' }}>RESUME</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">My Resume</h2>
        <p className="text-white/40 max-w-xl mb-8 leading-relaxed">
          Download a copy or preview it below.
        </p>

        <a
          href="/resume.pdf"
          download="Yajnesh_K_Resume.pdf"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-lg mb-10 font-medium transition-all duration-300"
          style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.3)', color: '#00e5ff' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#00b4ff'; e.currentTarget.style.color = '#050a12' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,180,255,0.1)'; e.currentTarget.style.color = '#00e5ff' }}
        >
          <i className="fa-solid fa-download" />
          {' '}Download PDF
        </a>

        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0,180,255,0.15)' }}>
          <iframe
            src="/resume.pdf"
            title="Yajnesh K Resume"
            width="100%"
            height="900px"
            style={{ display: 'block', background: '#fff' }}
          />
        </div>

        <p className="text-white/25 text-xs mt-4 text-center">
          If the preview doesn't load,{' '}
          <a href="/resume.pdf" download style={{ color: '#00e5ff' }} className="underline">
            download the PDF directly
          </a>
        </p>

      </motion.div>
    </main>
  )
}