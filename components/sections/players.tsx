"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Target, Handshake, Star, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { players, type Player, type Position } from "@/lib/mock-data"

const positions: (Position | "Todos")[] = ["Todos", "Arquero", "Defensa", "Mediocampista", "Delantero"]

function PlayerCard({ player, onClick }: { player: Player; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-lg border border-neon/10 bg-card/50 transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_25px_rgba(32,224,0,0.15)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="font-display text-5xl text-neon/20">{player.number}</span>
          <h3 className="font-display text-xl tracking-wider text-foreground">
            {player.name.toUpperCase()}
          </h3>
          {player.nickname && (
            <p className="font-display text-sm tracking-wider text-yellow">
              {`"${player.nickname.toUpperCase()}"`}
            </p>
          )}
          <Badge variant="outline" className="mt-2 border-neon/30 text-neon text-xs font-display tracking-wider">
            {player.position.toUpperCase()}
          </Badge>
        </div>
      </div>
      <div className="flex items-center justify-around border-t border-neon/10 p-3">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Target className="h-3 w-3 text-neon" />
          <span>{player.goals} goles</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Handshake className="h-3 w-3 text-yellow" />
          <span>{player.assists} asist.</span>
        </div>
      </div>
    </motion.div>
  )
}

function PlayerModal({ player, onClose }: { player: Player; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-carbon/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg border border-neon/20 bg-card p-6"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="relative h-48 w-36 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="font-display text-6xl text-neon/20">{player.number}</span>
            <h3 className="font-display text-3xl tracking-wider text-foreground">
              {player.name.toUpperCase()}
            </h3>
            {player.nickname && (
              <p className="font-display text-lg tracking-wider text-yellow">
                {`"${player.nickname.toUpperCase()}"`}
              </p>
            )}
            <Badge variant="outline" className="mt-2 border-neon/30 text-neon font-display tracking-wider">
              {player.position.toUpperCase()}
            </Badge>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="leading-relaxed text-muted-foreground">{player.bio}</p>

          <div>
            <h4 className="mb-2 font-display text-sm tracking-[0.2em] text-foreground">FORTALEZAS</h4>
            <div className="flex flex-wrap gap-2">
              {player.strengths.map((s) => (
                <Badge key={s} className="bg-neon/10 text-neon border-neon/20">
                  <Shield className="mr-1 h-3 w-3" />
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-display text-sm tracking-[0.2em] text-foreground">MOMENTO DESTACADO</h4>
            <div className="flex items-start gap-2 rounded-lg border border-yellow/20 bg-yellow/5 p-3">
              <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow" />
              <p className="text-sm text-muted-foreground">{player.highlight}</p>
            </div>
          </div>

          <div className="flex justify-center gap-8 rounded-lg border border-neon/10 bg-card/80 p-4">
            <div className="text-center">
              <span className="font-display text-2xl text-neon">{player.goals}</span>
              <p className="text-xs text-muted-foreground">Goles</p>
            </div>
            <div className="text-center">
              <span className="font-display text-2xl text-yellow">{player.assists}</span>
              <p className="text-xs text-muted-foreground">Asistencias</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Players() {
  const [filter, setFilter] = useState<Position | "Todos">("Todos")
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  const filtered = filter === "Todos" ? players : players.filter((p) => p.position === filter)

  return (
    <section id="equipo" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-neon/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">PLANTEL 2026</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">JUGADORES</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {positions.map((pos) => (
            <Button
              key={pos}
              variant={filter === pos ? "default" : "outline"}
              onClick={() => setFilter(pos)}
              className={
                filter === pos
                  ? "bg-neon text-carbon font-display tracking-wider hover:bg-neon-dark"
                  : "border-neon/20 text-muted-foreground font-display tracking-wider hover:border-neon/40 hover:text-neon"
              }
              size="sm"
            >
              {pos.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Player Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onClick={() => setSelectedPlayer(player)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
