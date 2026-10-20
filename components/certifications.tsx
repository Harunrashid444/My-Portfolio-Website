import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

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

export function Certifications() {
  return (
    <section
      aria-labelledby="certifications-title"
      id="certifications"
      className="mx-auto max-w-6xl scroll-mt-28 sm:scroll-mt-20 px-6 py-24"
    >
      <SectionHeading index="03" title="Certifications" id="certifications-title" />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <li key={cert.title}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <p className="text-pretty font-serif text-xl leading-snug tracking-tight">
                  {cert.title}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5 font-mono text-xs text-muted-foreground">
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
    </section>
  )
}
