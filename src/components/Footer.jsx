export default function Footer() {
  return (
    <footer className="border-t border-accent-blue/10 py-8 px-8 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs tracking-widest font-mono">
          YAJNESH K · SOFTWARE DEVELOPER
        </p>
        <div className="flex gap-6">
          {[
            { href: 'https://github.com/yourusername',      label: 'GitHub' },
            { href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
            { href: 'mailto:yajnesh@email.com',             label: 'Email' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-accent-cyan text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}