import { NavLink } from 'react-router-dom'
import { useState } from 'react'

// ── CHANGE NAV ICONS/LABELS HERE ──
const links = [
  { to: '/',        label: 'Home',     icon: 'fa-solid fa-house' },
  { to: '/projects', label: 'Projects', icon: 'fa fa-tasks' },
  { to: '/journey',  label: 'Journey',  icon: 'fas fa-swimmer' },
  { to: '/skills',   label: 'Skills',   icon: 'fa-solid fa-file-code' },
  { to: '/profile',  label: 'Profile',  icon: 'fa-solid fa-user' },
  { to: '/resume',   label: 'Resume',   icon: 'fa-solid fa-file-lines' },
]

// ── UPDATE YOUR SOCIAL LINKS HERE ──
const socials = [
  {
    href: 'https://github.com/yajneshx94',
    label: 'GitHub',
    icon: 'fa-brands fa-github',
  },
  {
    href: 'https://linkedin.com/in/yajnesh-k-503023258',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
  },
  {
    href: 'mailto:yajnesh.work@gmail.com',
    label: 'Email',
    icon: 'fa-solid fa-envelope',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white"
        style={{ background: '#0d1b2a', border: '1px solid rgba(0,180,255,0.2)' }}
      >
        <i className={open ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col
          transition-all duration-300
          ${open ? 'w-64 translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-20 lg:w-64
        `}
        style={{ background: 'rgba(8,18,32,0.95)', backdropFilter: 'blur(12px)', borderRight: '1px solid rgba(0,180,255,0.1)' }}
      >
        {/* Logo */}
        <div className="p-6" style={{ borderBottom: '1px solid rgba(0,180,255,0.1)' }}>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
            style={{ background: 'linear-gradient(135deg, #00b4ff, #0066cc)', color: '#fff' }}
          >
            Y
          </div>
          <p className="hidden lg:block mt-3 text-xs tracking-widest uppercase" style={{ color: 'rgba(0,180,255,0.5)' }}>
            Yajnesh K
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-8 flex flex-col gap-1 px-3">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 ${isActive ? 'border' : 'hover:bg-white/5'}`
              }
              style={({ isActive }) =>
                isActive
                  ? { background: 'rgba(0,180,255,0.08)', color: '#00e5ff', borderColor: 'rgba(0,180,255,0.25)' }
                  : { color: 'rgba(255,255,255,0.4)' }
              }
            >
              <i className={`${icon} w-5 text-center text-base shrink-0`} />
              <span className="hidden lg:block text-sm font-medium tracking-wide">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Social icons */}
        <div className="p-4 flex gap-4 lg:flex-col lg:gap-3" style={{ borderTop: '1px solid rgba(0,180,255,0.1)' }}>
          {socials.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="flex items-center gap-3 transition-colors"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              <i className={`${icon} text-lg`} />
              <span className="hidden lg:block text-xs tracking-widest font-mono">{label}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}