import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'Ledger',
    year: '2025',
    description:
      'A privacy-first personal finance dashboard with real-time bank sync and beautiful, glanceable charts.',
    tags: ['Next.js', 'PostgreSQL', 'Plaid'],
    image: '/projects/ledger.png',
    href: '#',
  },
  {
    title: 'Fieldnotes',
    year: '2024',
    description:
      'A local-first markdown editor with instant search, backlinks, and conflict-free sync across devices.',
    tags: ['React', 'CRDTs', 'Electron'],
    image: '/projects/fieldnotes.png',
    href: '#',
  },
  {
    title: 'Pulse',
    year: '2023',
    description:
      'Lightweight uptime monitoring for indie developers, with streaming logs and smart incident alerts.',
    tags: ['Go', 'WebSockets', 'Tailwind'],
    image: '/projects/pulse.png',
    href: '#',
  },
]

export function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading index="02" title="Selected projects" id="projects-title" />

      <ul className="flex flex-col gap-16">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={i * 80}>
              <a
                href={project.href}
                className="group grid items-center gap-8 md:grid-cols-2"
                aria-label={`View ${project.title} project`}
              >
                <div
                  className={`overflow-hidden rounded-2xl border border-border bg-card ${i % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`Screenshot of ${project.title}`}
                    width={1280}
                    height={800}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                  <h3 className="mt-2 flex items-center gap-2 font-serif text-3xl tracking-tight md:text-4xl">
                    {project.title}
                    <ArrowUpRight className="size-6 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-accent/40"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
