import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CopyEmail } from '@/components/copy-email'

const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X / Twitter', href: 'https://x.com' },
  { label: 'Read.cv', href: 'https://read.cv' },
]

export function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading index="03" title="Contact" id="contact-title" />

      <Reveal>
        <p className="max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          {"Have a project in mind, or just want to say hi? I'd love to hear from you."}
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <CopyEmail email="hello@alexmorgan.dev" />
      </Reveal>

      <Reveal delay={220} className="mt-14">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {socials.map((social) => (
            <li key={social.label} className="bg-background">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-5 py-5 text-sm transition-colors hover:bg-card"
              >
                {social.label}
                <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
