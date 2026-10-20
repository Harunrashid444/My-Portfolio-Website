import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CertificateCard, type Certificate } from '@/components/certificate-card'
import awsGenaiDeveloperPractice from '@/public/certificates/aws-genai-developer-practice.jpg'
import awsIntroGenerativeAi from '@/public/certificates/aws-intro-generative-ai.jpg'
import ciscoIntroModernAi from '@/public/certificates/cisco-intro-modern-ai.jpg'
import ibmGettingStartedAi from '@/public/certificates/ibm-getting-started-ai.jpg'
import ibmLabIbmBob from '@/public/certificates/ibm-lab-ibm-bob.jpg'
import ibmEdunetGuidedLearning from '@/public/certificates/ibm-edunet-guided-learning.jpg'
import voisIntroFullStack from '@/public/certificates/vois-intro-full-stack.jpg'
import voisBasicsOfLinux from '@/public/certificates/vois-basics-of-linux.jpg'
import efSetEnglish from '@/public/certificates/ef-set-english.jpg'

const certifications: Certificate[] = [
  {
    title: 'AWS Certified Generative AI Developer – Professional (AIP-C01): Official Practice Question Set',
    issuer: 'AWS Training & Certification',
    date: 'Jun 2026',
    image: awsGenaiDeveloperPractice,
  },
  {
    title: 'Introduction to Generative AI – Art of the Possible',
    issuer: 'AWS Training & Certification',
    date: 'Jun 2026',
    image: awsIntroGenerativeAi,
  },
  {
    title: 'Cloud Essentials Knowledge Badge Readiness Path (incl. Labs)',
    issuer: 'AWS Training & Certification',
    date: null,
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2026',
    image: ciscoIntroModernAi,
  },
  {
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    href: 'https://www.credly.com/badges/0cd5c8b4-74ee-4251-a882-f00f0bcd839b',
    image: ibmGettingStartedAi,
  },
  {
    title: 'Lab: Troubleshoot Your Code Using IBM Bob',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    image: ibmLabIbmBob,
  },
  {
    title: 'Edunet University Engagements – Advanced Guided Learning Experience 2026-27',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    image: ibmEdunetGuidedLearning,
  },
  {
    title: 'Introduction to Full-Stack Web Development',
    issuer: 'VOIS (Vodafone Idea Foundation) × Edunet Foundation',
    date: 'Jul 2026',
    image: voisIntroFullStack,
  },
  {
    title: 'Basics of Linux Operating System',
    issuer: 'VOIS (Vodafone Idea Foundation) × Edunet Foundation',
    date: 'Jul 2026',
    image: voisBasicsOfLinux,
  },
  {
    title: 'EF SET English Certificate — C2 Proficient',
    issuer: 'EF Education First',
    date: 'Jun 2026',
    image: efSetEnglish,
  },
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
              <CertificateCard cert={cert} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
