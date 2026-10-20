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

// Skills still being learned, hidden until ready to show:
// Backend: JWT auth, Alembic · Databases: Redis · Tools: Postman
const skills = [
  { group: 'Languages', items: 'Python, JavaScript, Java, C, SQL' },
  { group: 'Frontend', items: 'React, Tailwind CSS, Recharts, MapLibre GL JS, HTML5, CSS3' },
  { group: 'Backend', items: 'FastAPI, Node.js, REST API design, SQLAlchemy' },
  { group: 'Databases', items: 'PostgreSQL/PostGIS, MongoDB, SQL' },
  { group: 'AI & Tools', items: 'Generative AI, Agentic AI, Git, GitHub, Docker, Vercel, GitHub Copilot' },
]

const certifications = [
  {
    title: 'AWS Certified Generative AI Developer – Professional (AIP-C01): Official Practice Question Set',
    issuer: 'AWS Training & Certification',
    date: 'Jun 2026',
  },
  {
    title: 'Introduction to Generative AI – Art of the Possible',
    issuer: 'AWS Training & Certification',
    date: 'Jun 2026',
  },
  {
    title: 'Cloud Essentials Knowledge Badge Readiness Path (incl. Labs)',
    issuer: 'AWS Training & Certification',
    date: null,
  },
  { title: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy', date: 'Jun 2026' },
  {
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    href: 'https://www.credly.com/badges/0cd5c8b4-74ee-4251-a882-f00f0bcd839b',
  },
  { title: 'Lab: Troubleshoot Your Code Using IBM Bob', issuer: 'IBM SkillsBuild', date: 'Jul 2026' },
  {
    title: 'Edunet University Engagements – Advanced Guided Learning Experience 2026-27',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
  },
  {
    title: 'Introduction to Full-Stack Web Development',
    issuer: 'VOIS (Vodafone Idea Foundation) × Edunet Foundation',
    date: 'Jul 2026',
  },
  {
    title: 'Basics of Linux Operating System',
    issuer: 'VOIS (Vodafone Idea Foundation) × Edunet Foundation',
    date: 'Jul 2026',
  },
  { title: 'EF SET English Certificate — C2 Proficient', issuer: 'EF Education First', date: 'Jun 2026' },
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

      <Reveal className="mt-20">
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Skills</h3>
        <dl className="mt-5 divide-y divide-border border-y border-border">
          {skills.map((skill) => (
            <div key={skill.group} className="grid gap-1 py-3 text-sm sm:grid-cols-4 sm:gap-4">
              <dt className="text-muted-foreground">{skill.group}</dt>
              <dd className="sm:col-span-3">{skill.items}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Certifications
          </h3>
        </Reveal>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <li key={cert.title}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
                  <p className="text-pretty text-sm font-medium leading-snug">{cert.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 font-mono text-xs text-muted-foreground">
                    <span>{cert.date}</span>
                    {cert.href && (
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        Verify ↗
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
