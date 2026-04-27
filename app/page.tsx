import Navbar from "@/components/sections/navbar"
import About from "@/components/sections/about"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Team from "@/components/sections/team"
import FAQ from "@/components/sections/faq"
import Contact from "@/components/sections/contact"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <FAQ />
      <Contact />
    </div>
  )
}
