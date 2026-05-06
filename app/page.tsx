import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Assessment from '@/components/Assessment'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Assessment />
      <HowItWorks />
      <Pricing />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  )
}
