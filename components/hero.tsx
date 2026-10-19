import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'
import profile from '@/public/profile.jpg'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-[1.35fr_1fr] md:gap-16 md:pb-28 md:pt-24"
    >
      <div>
        <p
          className="flex animate-fade-up items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Full-stack developer · Greater Noida
        </p>

        <h1
          className="mt-6 animate-fade-up text-balance font-serif text-5xl leading-[1.05] tracking-tight lg:text-7xl md:text-6xl"
          style={{ animationDelay: '120ms' }}
        >
          I build end-to-end products, from API to <em className="text-accent">interface</em>
          <span aria-hidden="true" className="ml-1 inline-block animate-blink text-accent">
            _
          </span>
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: '240ms' }}
        >
          {
            "Hi, I'm Harun Rashid Ansari — an MCA student and full-stack developer working with React, Python & FastAPI, currently leading the TerraScope team."
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
            className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        className="relative order-first mx-auto w-full max-w-[280px] animate-fade-up md:order-none md:mr-0 md:max-w-[400px]"
        style={{ animationDelay: '200ms' }}
      >
        <div className="rounded-3xl border border-border bg-card p-2 shadow-[0_24px_60px_-28px_oklch(0.22_0.01_60/0.35)]">
          <Image
            src={profile}
            alt="Portrait of Harun Rashid Ansari"
            placeholder="blur"
            preload
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 38vw, 280px"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -left-10 hidden size-32 animate-float rounded-full border border-border bg-card shadow-sm md:block"
        >
          <svg viewBox="0 0 100 100" className="size-full animate-spin-slow text-accent">
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
      </div>
    </section>
  )
}
