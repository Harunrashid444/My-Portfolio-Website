import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { StackMarquee } from '@/components/stack-marquee'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
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
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
