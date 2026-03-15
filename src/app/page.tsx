import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { TechStack } from "@/components/sections/TechStack"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
