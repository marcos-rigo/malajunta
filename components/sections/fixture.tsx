"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, MapPin, Clock, CalendarPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fixture } from "@/lib/mock-data"

const months = ["Todos", ...Array.from(new Set(fixture.map((m) => m.month)))]

export function Fixture() {
  const [monthFilter, setMonthFilter] = useState("Todos")

  const upcomingMatches = fixture
    .filter((m) => m.status === "Proximo")
    .filter((m) => monthFilter === "Todos" || m.month === monthFilter)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00")
    return date.toLocaleDateString("es-AR", { day: "2-digit", month: "short" })
  }

  return (
    <section id="fixture" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-neon/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">PROXIMAS FECHAS</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">FIXTURE</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        {/* Month filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {months.map((m) => (
            <Button
              key={m}
              variant={monthFilter === m ? "default" : "outline"}
              size="sm"
              onClick={() => setMonthFilter(m)}
              className={
                monthFilter === m
                  ? "bg-neon text-carbon font-display tracking-wider hover:bg-neon-dark"
                  : "border-neon/20 text-muted-foreground font-display tracking-wider hover:border-neon/40 hover:text-neon"
              }
            >
              {m.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-lg border border-neon/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neon/10 bg-card/80">
                  <th className="px-6 py-4 text-left font-display text-xs tracking-[0.2em] text-muted-foreground">FECHA</th>
                  <th className="px-6 py-4 text-left font-display text-xs tracking-[0.2em] text-muted-foreground">RIVAL</th>
                  <th className="px-6 py-4 text-left font-display text-xs tracking-[0.2em] text-muted-foreground">CONDICION</th>
                  <th className="px-6 py-4 text-left font-display text-xs tracking-[0.2em] text-muted-foreground">HORA</th>
                  <th className="px-6 py-4 text-left font-display text-xs tracking-[0.2em] text-muted-foreground">CANCHA</th>
                  <th className="px-6 py-4 text-right font-display text-xs tracking-[0.2em] text-muted-foreground">ACCION</th>
                </tr>
              </thead>
              <tbody>
                {upcomingMatches.map((match, i) => (
                  <motion.tr
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-neon/5 transition-colors hover:bg-neon/5"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CalendarDays className="h-4 w-4 text-neon" />
                        {formatDate(match.date)}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-display text-lg tracking-wider text-foreground">
                      {match.rival.toUpperCase()}
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant="outline"
                        className={
                          match.condition === "Local"
                            ? "border-neon/30 text-neon font-display tracking-wider"
                            : "border-yellow/30 text-yellow font-display tracking-wider"
                        }
                      >
                        {match.condition.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {match.time} hs
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {match.venue}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-neon hover:text-neon hover:bg-neon/10">
                        <CalendarPlus className="mr-1 h-4 w-4" /> Agendar
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-4 lg:hidden">
          {upcomingMatches.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-neon/10 bg-card/50 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-neon" />
                  {formatDate(match.date)}
                </div>
                <Badge
                  variant="outline"
                  className={
                    match.condition === "Local"
                      ? "border-neon/30 text-neon font-display tracking-wider"
                      : "border-yellow/30 text-yellow font-display tracking-wider"
                  }
                >
                  {match.condition.toUpperCase()}
                </Badge>
              </div>

              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-lg tracking-wider text-foreground">MALA JUNTA</span>
                <span className="font-display text-yellow">VS</span>
                <span className="font-display text-lg tracking-wider text-foreground text-right">
                  {match.rival.toUpperCase()}
                </span>
              </div>

              <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {match.time} hs
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {match.venue}
                </span>
              </div>

              <Button variant="ghost" size="sm" className="w-full text-neon hover:text-neon hover:bg-neon/10">
                <CalendarPlus className="mr-1 h-4 w-4" /> Agregar al calendario
              </Button>
            </motion.div>
          ))}
        </div>

        {upcomingMatches.length === 0 && (
          <p className="text-center text-muted-foreground">No hay partidos programados para este mes.</p>
        )}
      </div>
    </section>
  )
}
