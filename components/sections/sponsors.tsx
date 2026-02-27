"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check, ArrowRight, Crown, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { sponsors, sponsorPackages } from "@/lib/mock-data"

function SponsorLogo({ sponsor }: { sponsor: (typeof sponsors)[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center gap-3 rounded-lg border border-foreground/20 bg-card/50 p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(32,224,0,0.1)]"
    >
      <div className="relative h-12 w-24">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
          sizes="96px"
        />
      </div>
      <span className="text-xs font-display tracking-wider text-muted-foreground">
        {sponsor.name.toUpperCase()}
      </span>
    </motion.div>
  )
}

export function Sponsors() {
  const handleScrollToContact = (subject?: string) => {
    const el = document.querySelector("#contacto")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      if (subject) {
        setTimeout(() => {
          const select = document.querySelector("[data-contact-subject]") as HTMLSelectElement
          if (select) {
            select.value = subject
            select.dispatchEvent(new Event("change", { bubbles: true }))
          }
        }, 800)
      }
    }
  }

  // Sponsors 2026: Educación 24, FV Group, Farmacia del Cerro
  const actuales = sponsors.filter((s) =>
    [1, 2, 6,17].includes(s.id) // Educación 24, FV Group SRL, Farmacia del Cerro
  )

  // Todos los demás
  const anteriores = sponsors.filter((s) => ![1, 2, 6,17].includes(s.id))

  return (
    <section id="sponsors" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-yellow/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">NUESTROS ALIADOS</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">SPONSORS</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        {/* Sponsors 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <Crown className="h-5 w-5 text-yellow" />
            <h3 className="font-display text-lg tracking-[0.2em] text-yellow">SPONSORS 2026</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {actuales.map((s) => (
              <SponsorLogo key={s.id} sponsor={s} />
            ))}
          </div>
        </motion.div>

        {/* Sponsors que confiaron en nosotros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <Handshake className="h-5 w-5 text-neon" />
            <h3 className="font-display text-lg tracking-[0.2em] text-neon">
              SPONSORS QUE CONFIARON EN NOSOTROS
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {anteriores.map((s) => (
              <SponsorLogo key={s.id} sponsor={s} />
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}