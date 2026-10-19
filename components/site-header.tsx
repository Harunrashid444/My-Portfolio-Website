const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 pt-3 pb-1 sm:h-16 sm:flex-row sm:justify-between sm:p-0 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 whitespace-nowrap">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold tracking-wide text-accent-foreground"
          >
            HR
          </span>
          <span className="font-serif text-2xl leading-none tracking-tight">Harun Rashid</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative rounded-full px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
