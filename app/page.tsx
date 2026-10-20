import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { StackMarquee } from '@/components/stack-marquee'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Certifications } from '@/components/certifications'
import { Projects } from '@/components/projects'
import { Research } from '@/components/research'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StackMarquee />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Research />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
