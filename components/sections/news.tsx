"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays, X, ArrowRight } from "lucide-react"
import { news, type NewsItem } from "@/lib/mock-data"

function NewsCard({ item, onClick }: { item: NewsItem; onClick: () => void }) {
  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00")
    return date.toLocaleDateString("es-AR", { day: "2-digit", month: "short", year: "numeric" })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-lg border border-neon/10 bg-card/50 transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_20px_rgba(32,224,0,0.1)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent" />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="h-3 w-3 text-neon" />
          {formatDate(item.date)}
        </div>
        <h3 className="mb-2 font-display text-lg tracking-wider text-foreground transition-colors group-hover:text-neon">
          {item.title.toUpperCase()}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {item.excerpt}
        </p>
        <span className="flex items-center gap-1 text-xs font-display tracking-wider text-neon">
          LEER MAS <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </motion.article>
  )
}

function NewsModal({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00")
    return date.toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" })
  }

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
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-neon/20 bg-card"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-carbon/50 p-2 text-foreground transition-colors hover:bg-carbon/80"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative aspect-video">
          <Image src={item.image} alt={item.title} fill className="object-cover" sizes="672px" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 text-neon" />
            {formatDate(item.date)}
          </div>
          <h2 className="mb-4 font-display text-3xl tracking-wider text-foreground">
            {item.title.toUpperCase()}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{item.content}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function News() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  return (
    <section id="noticias" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-magenta/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">ACTUALIDAD</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">NOTICIAS</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 6).map((item) => (
            <NewsCard key={item.id} item={item} onClick={() => setSelectedNews(item)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedNews && <NewsModal item={selectedNews} onClose={() => setSelectedNews(null)} />}
      </AnimatePresence>
    </section>
  )
}
