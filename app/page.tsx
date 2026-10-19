import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { SystemsSection } from '@/components/systems-section'
import { ChronicleSection } from '@/components/chronicle-section'
import { PrinciplesSection } from '@/components/principles-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SystemsSection />
        <ChronicleSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
