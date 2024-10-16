import Footer from '@/sections/Footer'
import Hobbies from '@/sections/Hobbies'
import Projects from '@/sections/Projects'
import About from '@/sections/About'
import Hero from '@/sections/Hero'

export default function DefaultPage() {
  return (
    <div className="w-full bg-sayagata bg-repeat bg-fixed flex flex-col text-lg relative">
      <Hero />

      <About />

      <Projects />

      <Hobbies />

      <Footer />
    </div>
  )
}
