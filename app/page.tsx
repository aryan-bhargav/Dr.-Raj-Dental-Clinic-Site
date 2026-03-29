import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import StepsBar from '@/components/sections/StepsBar'
import About from '@/components/sections/About'
import Features from '@/components/sections/Features'
import WhyChoose from '@/components/sections/WhyChoose'
import Blog from '@/components/sections/Blog'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/layout/footer/Footer'
import LocationSection from '@/components/sections/locations/Locationsection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <StepsBar />
      <About />
      <Features />
      <WhyChoose />
      <Blog />
      <Newsletter />
      <LocationSection/>
    </main>
  )
}
