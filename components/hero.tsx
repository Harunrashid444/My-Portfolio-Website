import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 md:pb-28 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-16 hidden size-40 animate-float md:block"
      >
        <svg viewBox="0 0 100 100" className="size-full animate-spin-slow text-accent/70">
          <defs>
            <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-current font-mono text-[9px] uppercase tracking-[0.3em]">
            <textPath href="#circle" textLength="236" lengthAdjust="spacing">
              open to work · open to work ·
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 m-auto size-3 rounded-full bg-accent" />
      </div>

      <p
        className="flex animate-fade-up items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        style={{ animationDelay: '0ms' }}
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Full-stack developer · Lisbon
      </p>

      <h1
        className="mt-6 max-w-3xl animate-fade-up text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl"
        style={{ animationDelay: '120ms' }}
      >
        I build calm, considered software for the <em className="text-accent">web</em>
        <span aria-hidden="true" className="ml-1 inline-block animate-blink text-accent">
          _
        </span>
      </h1>

      <p
        className="mt-6 max-w-xl animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground"
        style={{ animationDelay: '240ms' }}
      >
        {
          "Hi, I'm Alex — a developer who cares about the details: fast interfaces, clear APIs, and products that feel effortless to use."
        }
      </p>

      <div
        className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
        style={{ animationDelay: '360ms' }}
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          See my work
          <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:rotate-[-45deg]" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
