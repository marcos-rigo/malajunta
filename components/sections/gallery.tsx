"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { gallery } from "@/lib/mock-data"

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null))
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % gallery.length : null))

  return (
    <section id="galeria" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-neon/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">MOMENTOS</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">GALERIA</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {gallery.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-4 cursor-pointer overflow-hidden rounded-lg border border-neon/10 break-inside-avoid transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_20px_rgba(32,224,0,0.1)]"
              onClick={() => openLightbox(i)}
            >
              <div className="relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={i % 3 === 1 ? 600 : 400}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="absolute bottom-3 left-3">
                    <span className="font-display text-xs tracking-wider text-foreground">
                      {img.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-carbon/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-card/50 p-2 text-foreground transition-colors hover:bg-card/80"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/50 p-2 text-foreground transition-colors hover:bg-card/80"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/50 p-2 text-foreground transition-colors hover:bg-card/80"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] max-w-[90vw]"
            >
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                width={900}
                height={600}
                className="max-h-[80vh] rounded-lg object-contain"
                sizes="90vw"
              />
              <p className="mt-3 text-center font-display text-sm tracking-wider text-muted-foreground">
                {gallery[lightboxIndex].alt.toUpperCase()} — {gallery[lightboxIndex].category.toUpperCase()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
