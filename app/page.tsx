import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Ticker } from "@/components/sections/ticker"
import { About } from "@/components/sections/about"
import { Players } from "@/components/sections/players"
import { Fixture } from "@/components/sections/fixture"
import { Video } from "@/components/sections/video"
{/*import { Results } from "@/components/sections/results"*/}
import { News } from "@/components/sections/news"
import { Sponsors } from "@/components/sections/sponsors"
import { Gallery } from "@/components/sections/gallery"
import { Social } from "@/components/sections/social"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <Ticker />
      <About />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      </div>

      <Players />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      </div>

      <Fixture />
      

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow/30 to-transparent" />
      </div>

      {/*<Results />*/}

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      </div>

      <News />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow/30 to-transparent" />
      </div>

      <Sponsors />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      </div>

      {/*<Gallery />*/}

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-magenta/30 to-transparent" />
      </div>

      <Social />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      </div>

      {<Contact />}
      {<Footer />}
    </main>
  )
}
