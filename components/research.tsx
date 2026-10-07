import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const publications = [
  {
    title:
      'Artificial Intelligence in Real Estate: A Literature Review of Valuation, Digital Infrastructure, Investment Analytics and Business Communication',
    conference: '5th International SNAS Conference',
    organizer: 'Society of North American Scholars',
    location: 'USA',
    date: 'Oct 2026',
    note: 'University of Texas researchers, under Dr. Yetkin Yildirim',
    topics: ['AI', 'Real Estate', 'Property Valuation', 'Investment Analytics'],
  },
  {
    title:
      'What Readers Want: Five Gaps in AI-STEM Education Literature and a Roadmap for Multilingual Learners',
    conference: 'London International Conference',
    organizer: 'LIC',
    location: 'UK',
    date: null,
    note: null,
    topics: ['AI in Education', 'STEM', 'Multilingual Learners'],
  },
]

export function Research() {
  return (
    <section
      aria-labelledby="research-title"
      id="research"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading index="03" title="Research" id="research-title" />

      <Reveal>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Alongside building software, I write literature reviews on how AI is reshaping
          industries and classrooms. Both papers have been accepted for presentation at
          international conferences.
        </p>
      </Reveal>

      <ol className="mt-12 grid gap-6 md:grid-cols-2">
        {publications.map((pub, i) => (
          <li key={pub.title}>
            <Reveal delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/50">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    Paper {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                    Accepted
                  </span>
                </div>

                <h3 className="mt-6 text-pretty font-serif text-2xl leading-snug tracking-tight md:text-[1.7rem]">
                  {pub.title}
                </h3>

                <dl className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-muted-foreground">Venue</dt>
                    <dd>
                      {pub.conference}
                      <span className="text-muted-foreground"> · {pub.organizer}</span>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-muted-foreground">Where</dt>
                    <dd>
                      {pub.location}
                      {pub.date && <span className="text-muted-foreground"> · {pub.date}</span>}
                    </dd>
                  </div>
                  {pub.note && (
                    <div className="flex gap-3">
                      <dt className="w-20 shrink-0 text-muted-foreground">With</dt>
                      <dd>{pub.note}</dd>
                    </div>
                  )}
                </dl>

                <ul className="mt-auto flex flex-wrap gap-2 pt-8" aria-label="Topics">
                  {pub.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-accent/40"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
