import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/',         label: 'Home',     icon: '⌂' },
  { to: '/projects', label: 'Projects', icon: '◈' },
  { to: '/journey',  label: 'Journey',  icon: '◎' },
  { to: '/skills',   label: 'Skills',   icon: '◉' },
  { to: '/profile',  label: 'Profile',  icon: '◐' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-space-mid border border-accent-blue/20 text-white"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full z-40 flex flex-col
        bg-space-dark/90 backdrop-blur-md border-r border-accent-blue/10
        transition-all duration-300
        ${open ? 'w-64 translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:w-20 lg:w-64
      `}>
        {/* Logo area */}
        <div className="p-6 border-b border-accent-blue/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center text-space-dark font-bold text-lg">
            Y
          </div>
          <p className="hidden lg:block mt-3 text-xs text-white/40 tracking-widest uppercase">Yajnesh K</p>
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-8 flex flex-col gap-1 px-3">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 group
                ${isActive
                  ? 'bg-accent-blue/10 text-accent-cyan border border-accent-blue/20'
                  : 'text-white/40 hover:text-white hover:bg-white/5'}
              `}
            >
              <span className="text-lg w-5 text-center shrink-0">{icon}</span>
              <span className="hidden lg:block text-sm font-medium tracking-wide">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Social footer in sidebar */}
        <div className="p-4 border-t border-accent-blue/10 flex gap-3 lg:flex-col lg:gap-2">
          {[
            { href: 'https://github.com/yourusername',     label: 'GH' },
            { href: 'https://linkedin.com/in/yourusername', label: 'LI' },
            { href: 'mailto:yajnesh@email.com',             label: '@' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-accent-cyan transition-colors tracking-widest font-mono"
            >
              {label}
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}