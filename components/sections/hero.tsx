"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, MapPin, Trophy, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = targetDate.getTime() - now
      if (diff <= 0) {
        clearInterval(interval)
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-3">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-display text-2xl text-neon md:text-3xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {label === "days" ? "dias" : label === "hours" ? "hrs" : label === "minutes" ? "min" : "seg"}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  const nextMatchDate = new Date("2026-03-21T12:30:00")

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
  <Image
  src="/images/portada-mala-junta.jpeg"
  alt="Equipo Mala Junta FC"
  fill
  priority
  quality={100}
  sizes="100vw"
  className="object-cover object-center brightness-105 contrast-105"
/>
  <div className="absolute inset-0 bg-black/50" />
</div>
      {/* Overlay principal suavizado */}
<div className="absolute inset-0 bg-gradient-to-b from-carbon/60 via-carbon/70 to-carbon/80" />

{/* Efecto lateral neon más sutil */}
<div className="absolute inset-0 bg-gradient-to-r from-neon/10 via-transparent to-transparent" />

      {/* Green glow accent */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pt-24 text-center lg:pt-32">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <Badge variant="outline" className="border-neon/40 text-neon font-display tracking-wider">
            <Trophy className="mr-1 h-3 w-3" /> LAS CAÑAS
          </Badge>
          <Badge variant="outline" className="border-yellow/40 text-yellow font-display tracking-wider">
            <MapPin className="mr-1 h-3 w-3" /> TUCUMAN
          </Badge>
          <Badge variant="outline" className="border-foreground/30 text-foreground font-display tracking-wider">
            <CalendarDays className="mr-1 h-3 w-3" /> APERTURA 2026
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="section-heading text-6xl text-neon glow-green-text md:text-8xl lg:text-9xl">
            MALA JUNTA
          </h1>
          <p className="font-display text-xl tracking-[0.3em] text-foreground/80 md:text-2xl">
            FUTBOL, AMISTAD Y COMPETENCIA
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#fixture")}
            className="bg-neon text-carbon font-display text-lg tracking-wider hover:bg-neon-dark glow-green"
          >
            VER FIXTURE <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("#sponsors")}
            className="border-neon/40 text-neon font-display text-lg tracking-wider hover:bg-neon/10"
          >
            SPONSORS
          </Button>
        </motion.div>

        {/* Next Match Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-4 w-full max-w-lg rounded-lg border border-neon/20 bg-card/80 p-6 backdrop-blur-sm"
        >
          <p className="mb-1 font-display text-xs tracking-[0.3em] text-muted-foreground">
            PROXIMO PARTIDO
          </p>
          <div className="mb-4 flex items-center justify-between">
            <div className="text-left">
              <p className="font-display text-2xl tracking-wider text-foreground">MALA JUNTA</p>
              <p className="text-xs text-muted-foreground">Local</p>
            </div>
            <span className="font-display text-xl text-yellow">VS</span>
            <div className="text-right">
              <p className="font-display text-2xl tracking-wider text-foreground">PELUSA</p>
              <p className="text-xs text-muted-foreground">Visitante</p>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" /> 21 Mar 2026
            </span>
            <span>12:30 hs</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Cancha N° 1 - Predio Perón
            </span>
          </div>
          <Countdown targetDate={nextMatchDate} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-8 w-5 rounded-full border-2 border-neon/40 flex items-start justify-center pt-1"
        >
          <div className="h-2 w-1 rounded-full bg-neon" />
        </motion.div>
      </motion.div>
    </section>
  )
}
