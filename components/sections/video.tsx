"use client"

import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"

// Simple video section with a hardcoded YouTube ID.  You can change the
// constant or modify the component to accept a prop if you want to embed
// different matches.
const YOUTUBE_ID = "dQw4w9WgXcQ" // replace with actual match video ID

export function Video() {
  return (
    <section id="video" className="relative overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">VIDEO DEL PARTIDO</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">GRABACIÓN</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        <AspectRatio ratio={16 / 9} className="w-full">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="Grabación del partido"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </AspectRatio>
      </div>
    </section>
  )
}
