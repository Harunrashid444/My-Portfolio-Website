import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const stats = [
  { value: '7+', label: 'Years shipping' },
  { value: '40+', label: 'Projects delivered' },
  { value: '12', label: 'Open-source libs' },
]

const experience = [
  { period: '2022 — Now', role: 'Senior Engineer', company: 'Northwind Labs' },
  { period: '2019 — 2022', role: 'Frontend Engineer', company: 'Studio Parallel' },
  { period: '2017 — 2019', role: 'Web Developer', company: 'Freelance' },
]

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading index="01" title="About" id="about-title" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            {
              "I'm a full-stack developer with a soft spot for interfaces. Over the past seven years I've helped startups and studios turn rough ideas into products people genuinely enjoy using."
            }
          </p>
          <p>
            My work sits where design meets engineering — I care as much about a{' '}
            <span className="text-foreground">well-named function</span> as I do about a{' '}
            <span className="text-foreground">perfectly timed transition</span>.
          </p>
          <p>
            {
              "When I'm away from the keyboard, you'll find me brewing pour-overs, reading about typography, or hiking the coast."
            }
          </p>
        </Reveal>

        <Reveal delay={150} className="md:col-span-2">
          <ol className="divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <li key={item.period} className="group flex flex-col gap-1 py-4">
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
          <Reveal key={stat.label} delay={i * 120}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-serif text-5xl tracking-tight md:text-6xl">{stat.value}</dd>
            <p aria-hidden="true" className="mt-1 text-sm text-muted-foreground">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
