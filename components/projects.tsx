import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'TerraScope',
    year: 'Ongoing · Technical Lead',
    description:
      'AI real estate investment analytics platform built under a Texas university professor. A FastAPI + PostgreSQL/PostGIS backend serves 487,000+ property parcels from TCAD, Zillow ZHVI, permits, and auction records through 40+ REST endpoints, with weekly alerts across 146 ZIP zones and a MapLibre-powered Next.js map.',
    tags: ['FastAPI', 'PostGIS', 'Next.js', 'MapLibre GL'],
    image: '/projects/terrascope.png',
    href: 'https://github.com/Harunrashid444/Terrascope',
  },
  {
    title: 'AI Nutrition',
    year: 'IBM SkillsBuild',
    description:
      'An AI-powered nutrition recommendation agent built with IBM Bob in two days, applying prompt engineering and generative AI to deliver personalized dietary suggestions.',
    tags: ['Generative AI', 'Prompt Engineering', 'IBM Bob'],
    image: '/projects/ai-nutrition.png',
    href: 'https://github.com/Harunrashid444/AI-Nutrition-Agent',
  },
  {
    title: 'Gold Price Analysis & Prediction',
    year: 'Forecasting dashboard',
    description:
      'A 9-screen React 19 + TypeScript dashboard visualising 40 years of gold-price data across two markets, with JWT-protected routes, a persisted dataset switcher and 7 custom charts including correlograms and forecast confidence bands. A typed, abort-aware API layer removes duplicate fetch logic and stale-response races.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Recharts'],
    image: '',
    href: 'https://mygoldprice-wisp-dd7a12.netlify.app/',
  },
  {
    title: 'Personal Portfolio',
    year: 'Web',
    description:
      'A responsive personal website built with Next.js, showcasing projects, technical skills, certifications and contact details with a clean, interactive UI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/portfolio.png',
    href: 'https://github.com/Harunrashid444/My-Portfolio-Website',
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
                target="_blank"
                rel="noopener noreferrer"
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
                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
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
