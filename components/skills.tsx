import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

// Skills still being learned, hidden until ready to show:
// Backend: JWT auth, Alembic · Databases: Redis · Tools: Postman
const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Tailwind CSS', 'Recharts', 'MapLibre GL JS', 'HTML5', 'CSS3'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'REST API design', 'SQLAlchemy'] },
  { group: 'Databases', items: ['PostgreSQL/PostGIS', 'MongoDB', 'SQL'] },
  { group: 'AI & Tools', items: ['Generative AI', 'Agentic AI', 'Git', 'GitHub', 'Docker', 'Vercel', 'GitHub Copilot'] },
]

export function Skills() {
  return (
    <section
      aria-labelledby="skills-title"
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-28 sm:scroll-mt-20 px-6 py-24"
    >
      <SectionHeading index="02" title="Skills" id="skills-title" />

      <dl className="divide-y divide-border border-y border-border">
        {skills.map((skill, i) => (
          <Reveal
            key={skill.group}
            delay={i * 60}
            className="grid gap-3 py-6 md:grid-cols-4 md:gap-8"
          >
            <dt className="font-serif text-2xl tracking-tight">{skill.group}</dt>
            <dd className="md:col-span-3">
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm transition-colors hover:border-accent/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
