import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { PricingPreview } from '@/components/sections/PricingPreview'
import { FAQ } from '@/components/sections/FAQ'
import { useTheme } from '@/context/ThemeContext'

export default function LandingPage() {
  const { isDark } = useTheme()
  return (
    <div className={`min-h-screen overflow-x-hidden ${isDark ? 'bg-[#07070f]' : 'bg-white'}`}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <PricingPreview />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
