import { Reveal } from '@/components/reveal'

export function SectionHeading({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <Reveal className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 id={id} className="font-serif text-4xl tracking-tight md:text-5xl">
        {title}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 translate-y-[-0.4rem] bg-border" />
    </Reveal>
  )
}
