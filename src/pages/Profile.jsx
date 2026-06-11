import { motion } from 'framer-motion'

const developer = {
  name: "Yajnesh K",
  role: "Java Backend Developer",
  education: "B.E. Computer Science & Engineering",
  college: "Misrimal Navajee Munoth Jain Engineering College",
  university: "Anna University, Chennai",
  cgpa: "7.78 / 10",
  duration: "Sept 2022 – April 2026",
  certifications: [
    "Spring REST — Infosys Springboard, 2025",
    "Spring Data JPA with Boot — Infosys Springboard, 2025",
    "Spring 5 Basics with Spring Boot — Infosys Springboard, 2025",
    "Python Essentials 2 — Cisco Networking Academy, 2025",
    "Python Essentials 1 — Cisco Networking Academy, 2025",    
    "CCNA: Introduction to Networks — Cisco Networking Academy, 2024",
  ],
  achievements: [
    "2nd place — Paper Presentation, Saveetha Engineering College Symposium",
    "170+ DSA problems solved on LeetCode and GeeksforGeeks",
  ],
  focus: ["Java", "Spring Boot", "REST API Design", "Docker", "DSA"],
  stats: [
    { label: "Projects Built", value: "4+" },
    { label: "DSA Problems", value: "170+" },
    { label: "Certifications", value: "6" },
    { label: "Available", value: "Now" },
  ],
}

const codeLines = [
  { token: 'const', color: '#00b4ff' },
  { key: 'name',          value: '"Yajnesh K"' },
  { key: 'role',          value: '"Java Backend Developer"' },
  { key: 'education',     value: '"B.E. CSE, MNMJEC"' },
  { key: 'cgpa',          value: '7.78' },
  { key: 'openToWork',    value: 'true', highlight: true },
  { key: 'focus',         value: '["Java", "Spring Boot", "Docker"]' },
  { key: 'greet',         value: '() => "Let\'s build something."', fn: true },
]

export default function Profile() {
  return (
    <main className="px-8 md:px-16 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

        {/* Available badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-mono tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        {/* Top — two column */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">

          {/* Left — identity */}
          <div className="flex-1">
            <p className="font-mono text-xs tracking-widest mb-3" style={{ color: '#00b4ff' }}>ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Yajnesh K</h2>
            <p className="text-lg mb-6" style={{ color: '#00e5ff' }}>Java Backend Developer</p>

            <p className="text-white/50 leading-relaxed mb-6 max-w-lg">
              I'm a final-year Computer Science student at MNMJEC, Chennai, graduating in 2026. I work primarily with Java and Spring Boot — building backend systems that are secure, well-structured, and built to last. Over the past year I've shipped four projects across backend engineering, ML integration, and AI tooling. I'm drawn to domains where software has real operational weight — fintech, logistics, and AIOps.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {developer.stats.map(({ label, value }) => (
                <div key={label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(0,180,255,0.06)', border: '1px solid rgba(0,180,255,0.15)' }}>
                  <p className="text-2xl font-bold text-white mb-1">{value}</p>
                  <p className="text-xs text-white/40 font-mono">{label}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 flex-wrap">
              {[
                { href: 'https://github.com/yajneshx94', label: 'GitHub', icon: 'fa-brands fa-github' },
                { href: 'https://linkedin.com/in/yajnesh-k-503023258', label: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
                { href: 'mailto:yajnesh.work@gmail.com', label: 'Email', icon: 'fa-solid fa-envelope' },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ border: '1px solid rgba(0,180,255,0.2)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.borderColor = 'rgba(0,180,255,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(0,180,255,0.2)' }}
                >
                  <i className={icon} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — code card */}
<div className="lg:w-96 shrink-0">
  <div className="rounded-xl overflow-hidden" style={{ background: '#0a1628', border: '1px solid rgba(0,180,255,0.15)' }}>
    {/* Window bar */}
    <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(0,180,255,0.1)' }}>
      <span className="w-3 h-3 rounded-full bg-red-500/70" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
      <span className="w-3 h-3 rounded-full bg-green-500/70" />
      <span className="ml-3 text-xs font-mono text-white/30">Yajnesh.java</span>
    </div>
    {/* Code */}
    <div className="p-5 font-mono text-sm leading-7">
      <p><span style={{ color: '#00b4ff' }}>public class</span> <span style={{ color: '#00e5ff' }}>Yajnesh</span> <span className="text-white/40">{'{'}</span></p>
      <p className="pl-4"><span style={{ color: '#00b4ff' }}>String</span> <span style={{ color: '#7dd3fc' }}>name</span> <span className="text-white/40">=</span> <span style={{ color: '#86efac' }}>"Yajnesh K"</span><span className="text-white/40">;</span></p>
      <p className="pl-4"><span style={{ color: '#00b4ff' }}>String</span> <span style={{ color: '#7dd3fc' }}>role</span> <span className="text-white/40">=</span> <span style={{ color: '#86efac' }}>"Java Backend Developer"</span><span className="text-white/40">;</span></p>
      <p className="pl-4"><span style={{ color: '#00b4ff' }}>String</span> <span style={{ color: '#7dd3fc' }}>college</span> <span className="text-white/40">=</span> <span style={{ color: '#86efac' }}>"MNMJEC, Chennai"</span><span className="text-white/40">;</span></p>
      <p className="pl-4"><span style={{ color: '#00b4ff' }}>double</span> <span style={{ color: '#7dd3fc' }}>cgpa</span> <span className="text-white/40">=</span> <span style={{ color: '#fbbf24' }}>7.78</span><span className="text-white/40">;</span></p>
      <p className="pl-4" style={{ background: 'rgba(34,197,94,0.08)', borderRadius: '4px' }}>
        <span style={{ color: '#00b4ff' }}>boolean</span> <span style={{ color: '#7dd3fc' }}>openToWork</span> <span className="text-white/40">=</span> <span style={{ color: '#4ade80' }}>true</span><span className="text-white/40">;</span>
      </p>
      <p className="pl-4"><span style={{ color: '#00b4ff' }}>String[]</span> <span style={{ color: '#7dd3fc' }}>stack</span> <span className="text-white/40">= {'{'}</span><span style={{ color: '#86efac' }}>"Java"</span><span className="text-white/40">, </span><span style={{ color: '#86efac' }}>"Spring Boot"</span><span className="text-white/40">, </span><span style={{ color: '#86efac' }}>"Docker"</span><span className="text-white/40">{'}'};</span></p>
      <p className="pl-4 mt-2"><span style={{ color: '#00b4ff' }}>String</span> <span style={{ color: '#00e5ff' }}>greet</span><span className="text-white/40">() {'{'}</span></p>
      <p className="pl-8"><span style={{ color: '#00b4ff' }}>return</span> <span style={{ color: '#86efac' }}>"Let's build something."</span><span className="text-white/40">;</span></p>
      <p className="pl-4"><span className="text-white/40">{'}'}</span></p>
      <p><span className="text-white/40">{'}'}</span></p>
    </div>
  </div>
</div>

        </div>

        {/* Bottom cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Education */}
          <div className="rounded-xl p-6" style={{ background: 'rgba(0,180,255,0.04)', border: '1px solid rgba(0,180,255,0.15)' }}>
            <p className="text-xs font-mono tracking-widest mb-4" style={{ color: '#00b4ff' }}>EDUCATION</p>
            <h4 className="text-white font-semibold mb-1">B.E. Computer Science & Engineering</h4>
            <p className="text-white/40 text-sm mb-1">MNMJEC · Anna University</p>
            <p className="text-white/40 text-sm mb-3">Sept 2022 – April 2026</p>
            <p className="text-sm font-mono" style={{ color: '#00e5ff' }}>CGPA: 7.78 / 10</p>
          </div>

          {/* Certifications */}
          <div className="rounded-xl p-6" style={{ background: 'rgba(0,180,255,0.04)', border: '1px solid rgba(0,180,255,0.15)' }}>
            <p className="text-xs font-mono tracking-widest mb-4" style={{ color: '#00b4ff' }}>CERTIFICATIONS</p>
            <div className="flex flex-col gap-3">
              {developer.certifications.map((cert, i) => (
                <div key={i} className="flex gap-2">
                  <i className="fa-solid fa-certificate text-xs mt-1" style={{ color: '#00b4ff' }} />
                  <p className="text-white/50 text-sm leading-snug">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="rounded-xl p-6" style={{ background: 'rgba(0,180,255,0.04)', border: '1px solid rgba(0,180,255,0.15)' }}>
            <p className="text-xs font-mono tracking-widest mb-4" style={{ color: '#00b4ff' }}>ACHIEVEMENTS</p>
            <div className="flex flex-col gap-3">
              {developer.achievements.map((a, i) => (
                <div key={i} className="flex gap-2">
                  <i className="fa-solid fa-trophy text-xs mt-1" style={{ color: '#fbbf24' }} />
                  <p className="text-white/50 text-sm leading-snug">{a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </main>
  )
}