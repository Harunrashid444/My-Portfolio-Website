import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const stats = [
  { value: '487K+', label: 'Property parcels served' },
  { value: '40+', label: 'REST endpoints shipped' },
  { value: '2', label: 'Accepted publications' },
]

const experience = [
  { period: '2026 — Now', role: 'Technical Lead', company: 'TerraScope' },
  { period: 'Jun — Sep 2026', role: 'Agent Full Stack Developer', company: 'GrowwStaff (Contract)' },
  { period: '2025 — 2027', role: 'MCA', company: 'GL Bajaj, AKTU' },
  { period: '2024', role: 'BCA', company: 'P.K. Roy Memorial College' },
]

const skills = [
  { group: 'Languages', items: 'JavaScript, TypeScript, Python, Java, C' },
  { group: 'Frontend', items: 'React, Next.js, Tailwind CSS, Recharts, MapLibre GL JS' },
  { group: 'Backend', items: 'Node.js/Express, FastAPI, SQLAlchemy, Alembic, REST APIs' },
  { group: 'Data', items: 'SQL, PostgreSQL, PostGIS, MongoDB' },
  { group: 'AI & Tools', items: 'Git, GitHub, Vite, Postman, Copilot, Generative AI' },
]

const certifications = [
  'Introduction to Generative AI — Amazon AWS',
  'Introduction to Modern AI — Cisco Networking Academy',
  'Cloud Essentials Knowledge Badge Readiness Path (incl. Labs) — Amazon AWS',
]

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading index="01" title="About" id="about-title" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            {
              "I'm an MCA student and full-stack developer who builds end-to-end web applications — from backend APIs to interactive frontends."
            }
          </p>
          <p>
            I currently lead a 3-member team as{' '}
            <span className="text-foreground">Technical Lead on TerraScope</span>, an AI real estate
            analytics platform, and I&apos;m comfortable across{' '}
            <span className="text-foreground">Java, Python, JavaScript and the MERN stack</span> with
            hands-on experience in REST API design, relational data modelling, and responsive UI.
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

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Skills</h3>
          <dl className="mt-5 divide-y divide-border border-y border-border">
            {skills.map((skill) => (
              <div key={skill.group} className="grid grid-cols-3 gap-4 py-3 text-sm">
                <dt className="text-muted-foreground">{skill.group}</dt>
                <dd className="col-span-2">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="space-y-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
