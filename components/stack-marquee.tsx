const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'FastAPI',
  'Java',
  'PostgreSQL',
  'PostGIS',
  'MapLibre',
  'MERN Stack',
  'Generative AI',
]

export function StackMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-5" aria-label="Tech stack">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...stack, ...stack].map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= stack.length}
            className="flex items-center gap-10 font-serif text-2xl text-muted-foreground"
          >
            {item}
            <span aria-hidden="true" className="size-1.5 rotate-45 bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  )
}
