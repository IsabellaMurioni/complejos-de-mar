import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { CabinsSection } from '@/components/CabinsSection'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/Footer'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CabinsSection />
      <FAQSection />
      <Footer />
    </>
  )
}
