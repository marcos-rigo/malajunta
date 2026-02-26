"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check, ArrowRight, Crown, Award, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { sponsors, sponsorPackages } from "@/lib/mock-data"

const tierConfig = {
  Principal: { icon: Crown, color: "text-yellow", borderColor: "border-yellow/30" },
  Sponsor: { icon: Award, color: "text-neon", borderColor: "border-neon/30" },
  Partner: { icon: Handshake, color: "text-smoke", borderColor: "border-foreground/20" },
}

function SponsorLogo({ sponsor }: { sponsor: (typeof sponsors)[0] }) {
  const config = tierConfig[sponsor.tier]
  return (
    <motion.a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border ${config.borderColor} bg-card/50 p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(32,224,0,0.1)]`}
    >
      <div className="relative h-12 w-24">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          sizes="96px"
        />
      </div>
      <span className="text-xs font-display tracking-wider text-muted-foreground">
        {sponsor.name.toUpperCase()}
      </span>
    </motion.a>
  )
}

export function Sponsors() {
  const handleScrollToContact = (subject?: string) => {
    const el = document.querySelector("#contacto")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      // Set subject in form if possible
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

  const principal = sponsors.filter((s) => s.tier === "Principal")
  const regular = sponsors.filter((s) => s.tier === "Sponsor")
  const partners = sponsors.filter((s) => s.tier === "Partner")

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

        {/* Sponsor Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Crown className="h-5 w-5 text-yellow" />
            <h3 className="font-display text-lg tracking-[0.2em] text-yellow">SPONSOR PRINCIPAL</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {principal.map((s) => (
              <SponsorLogo key={s.id} sponsor={s} />
            ))}
          </div>
        </motion.div>

        {/* Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Award className="h-5 w-5 text-neon" />
            <h3 className="font-display text-lg tracking-[0.2em] text-neon">SPONSORS</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {regular.map((s) => (
              <SponsorLogo key={s.id} sponsor={s} />
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Handshake className="h-5 w-5 text-smoke" />
            <h3 className="font-display text-lg tracking-[0.2em] text-smoke">PARTNERS</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((s) => (
              <SponsorLogo key={s.id} sponsor={s} />
            ))}
          </div>
        </motion.div>

        {/* Sponsorship Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="section-heading mb-10 text-center text-3xl text-foreground md:text-4xl">
            PAQUETES DE PATROCINIO
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {sponsorPackages.map((pkg, i) => {
              const isGold = pkg.name === "Oro"
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-lg border p-6 ${
                    isGold
                      ? "border-yellow/40 bg-yellow/5"
                      : "border-neon/10 bg-card/50"
                  }`}
                >
                  {isGold && (
                    <Badge className="absolute right-4 top-4 bg-yellow text-carbon font-display tracking-wider">
                      RECOMENDADO
                    </Badge>
                  )}
                  <h4
                    className={`mb-1 font-display text-3xl tracking-wider ${
                      isGold ? "text-yellow" : "text-foreground"
                    }`}
                  >
                    {pkg.name.toUpperCase()}
                  </h4>
                  <p className="mb-6 text-sm text-muted-foreground">{pkg.price}</p>
                  <ul className="mb-6 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                            isGold ? "text-yellow" : "text-neon"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handleScrollToContact("Patrocinio")}
                    className={
                      isGold
                        ? "w-full bg-yellow text-carbon font-display tracking-wider hover:bg-yellow/90"
                        : "w-full bg-neon text-carbon font-display tracking-wider hover:bg-neon-dark"
                    }
                  >
                    SOLICITAR PROPUESTA <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
