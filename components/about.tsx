import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const stats = [
  { value: '487K+', label: 'Property parcels served' },
  { value: '40+', label: 'REST endpoints shipped' },
  { value: '2', label: 'Accepted publications' },
]

const experience = [
  { period: '2026 — Now', role: 'Technical Lead', company: 'TerraScope' },
  { period: 'Jun — Sep 2026', role: 'Full Stack Developer', company: 'GrowwStaff (Contract)' },
  { period: '2025 — 2027', role: 'MCA', company: 'GL Bajaj College of Technology and Management, AKTU' },
  { period: '2024', role: 'BCA', company: 'P.K. Roy Memorial College, Binod Bihari Mahato Koylanchal University' },
]

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl scroll-mt-28 sm:scroll-mt-20 px-6 py-24">
      <SectionHeading index="01" title="About" id="about-title" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            I&apos;m an MCA student and{' '}
            <span className="text-foreground">full-stack developer</span> who builds end-to-end
            applications — from data pipelines and REST APIs to responsive React interfaces.
          </p>
          <p>
            I lead a 3-member team as{' '}
            <span className="text-foreground">Technical Lead on TerraScope</span>, an AI-driven real
            estate analytics platform over 487,000+ property parcels, and recently completed a
            3-month remote contract delivering MERN-stack work at GrowwStaff. I also build
            time-series ML pipelines, multi-agent AI apps and browser extensions.
          </p>
          <p>
            {
              "Outside of code, I've volunteered as lead guide at the 3-day International Hizmet Conference (touring a 25-member group of international professors), been a finalist in the GL Bajaj Bug Bounty Challenge 2026, and speak English (C2) with beginner Arabic."
            }
          </p>
        </Reveal>

        <Reveal delay={150} className="md:col-span-2">
          <ol className="divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <li key={`${item.role}-${item.period}`} className="group flex flex-col gap-1 py-4">
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                <span className="font-medium transition-transform duration-300 group-hover:translate-x-1">
                  {item.role}
                  <span className="text-muted-foreground"> · {item.company}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <dl className="mt-16 grid grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 120} className="flex flex-col-reverse">
            <dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="font-serif text-4xl tracking-tight md:text-6xl">{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
