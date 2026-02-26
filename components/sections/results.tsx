"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Trophy, Target, Star, Minus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { fixture, type FixtureMatch } from "@/lib/mock-data"

function getResultBadge(match: FixtureMatch) {
  if (match.scoreHome === undefined || match.scoreAway === undefined) return null
  const malaJuntaScore = match.condition === "Local" ? match.scoreHome : match.scoreAway
  const rivalScore = match.condition === "Local" ? match.scoreAway : match.scoreHome
  if (malaJuntaScore > rivalScore) return { label: "VICTORIA", color: "border-neon/50 text-neon bg-neon/10" }
  if (malaJuntaScore < rivalScore) return { label: "DERROTA", color: "border-destructive/50 text-destructive bg-destructive/10" }
  return { label: "EMPATE", color: "border-yellow/50 text-yellow bg-yellow/10" }
}

function ResultIcon({ match }: { match: FixtureMatch }) {
  const result = getResultBadge(match)
  if (!result) return null
  if (result.label === "VICTORIA") return <Trophy className="h-4 w-4 text-neon" />
  if (result.label === "DERROTA") return <Target className="h-4 w-4 text-destructive" />
  return <Minus className="h-4 w-4 text-yellow" />
}

export function Results() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const finishedMatches = fixture
    .filter((m) => m.status === "Finalizado")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00")
    return date.toLocaleDateString("es-AR", { day: "2-digit", month: "short" })
  }

  // Last 5 results for mini chart
  const last5 = finishedMatches.slice(0, 5).reverse()

  return (
    <section id="resultados" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">PARTIDOS FINALIZADOS</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">RESULTADOS</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        {/* Last 5 results mini chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 flex max-w-md items-center justify-center gap-3"
        >
          <span className="font-display text-xs tracking-wider text-muted-foreground">ULTIMOS 5:</span>
          {last5.map((match) => {
            const result = getResultBadge(match)
            if (!result) return null
            const letter =
              result.label === "VICTORIA" ? "V" : result.label === "DERROTA" ? "D" : "E"
            const colorClass =
              result.label === "VICTORIA"
                ? "bg-neon text-carbon"
                : result.label === "DERROTA"
                  ? "bg-destructive text-foreground"
                  : "bg-yellow text-carbon"
            return (
              <span
                key={match.id}
                className={`flex h-9 w-9 items-center justify-center rounded-md font-display text-sm ${colorClass}`}
              >
                {letter}
              </span>
            )
          })}
        </motion.div>

        {/* Result Cards */}
        <div className="flex flex-col gap-4">
          {finishedMatches.map((match, i) => {
            const result = getResultBadge(match)
            const isExpanded = expandedId === match.id
            const homeScore = match.condition === "Local" ? match.scoreHome : match.scoreAway
            const awayScore = match.condition === "Local" ? match.scoreAway : match.scoreHome

            return (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-lg border border-neon/10 bg-card/50"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : match.id)}
                  className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-neon/5"
                  aria-expanded={isExpanded}
                >
                  <ResultIcon match={match} />

                  <span className="text-xs text-muted-foreground">{formatDate(match.date)}</span>

                  <div className="flex flex-1 items-center justify-center gap-3">
                    <span className="font-display text-sm tracking-wider text-foreground md:text-lg">
                      MALA JUNTA
                    </span>
                    <div className="flex items-center gap-2 rounded-lg border border-neon/20 bg-card px-4 py-1">
                      <span className="font-display text-2xl text-neon md:text-3xl">{homeScore}</span>
                      <span className="font-display text-lg text-muted-foreground">-</span>
                      <span className="font-display text-2xl text-foreground md:text-3xl">{awayScore}</span>
                    </div>
                    <span className="font-display text-sm tracking-wider text-foreground md:text-lg">
                      {match.rival.toUpperCase()}
                    </span>
                  </div>

                  {result && (
                    <Badge variant="outline" className={`hidden md:inline-flex font-display tracking-wider ${result.color}`}>
                      {result.label}
                    </Badge>
                  )}

                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-neon/10"
                    >
                      <div className="flex flex-wrap gap-6 p-5">
                        {match.scorers && match.scorers.length > 0 && (
                          <div>
                            <h4 className="mb-2 font-display text-xs tracking-[0.2em] text-muted-foreground">
                              GOLEADORES
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {match.scorers.map((s, idx) => (
                                <Badge key={idx} variant="outline" className="border-neon/20 text-neon">
                                  <Target className="mr-1 h-3 w-3" /> {s}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {match.mvp && (
                          <div>
                            <h4 className="mb-2 font-display text-xs tracking-[0.2em] text-muted-foreground">
                              FIGURA DEL PARTIDO
                            </h4>
                            <Badge variant="outline" className="border-yellow/30 text-yellow">
                              <Star className="mr-1 h-3 w-3" /> {match.mvp}
                            </Badge>
                          </div>
                        )}
                        <div>
                          <h4 className="mb-2 font-display text-xs tracking-[0.2em] text-muted-foreground">
                            CONDICION
                          </h4>
                          <Badge variant="outline" className="border-foreground/20 text-foreground font-display tracking-wider">
                            {match.condition.toUpperCase()} - {match.venue}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
