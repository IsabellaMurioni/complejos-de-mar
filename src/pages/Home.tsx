import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { CabinsSection } from '@/components/CabinsSection'
import { AmenitiesSection } from '@/components/AmenitiesSection'
import { ContactSection } from '@/components/ContactSection'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/Footer'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CabinsSection />
      <AmenitiesSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  )
}
