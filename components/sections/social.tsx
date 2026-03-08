"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { socialPosts } from "@/lib/mock-data"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/malajunta.f7/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  }
]

export function Social() {
  return (
    <section id="redes" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-magenta/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">SEGUINOS EN</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">INSTAGRAM</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        {/* Social links */}
        <div className="mb-12 flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex h-14 w-14 items-center justify-center rounded-lg border border-neon/20 bg-card/50 text-muted-foreground transition-all duration-300 hover:border-neon/40 hover:text-neon hover:shadow-[0_0_15px_rgba(32,224,0,0.2)]"
              aria-label={`Visitar ${link.name}`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Mock posts */}
        <div className="grid gap-6 md:grid-cols-3">
          {socialPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-lg border border-neon/10 bg-card/50"
            >
              <div className="relative aspect-square">
                <Image
                  src={post.image}
                  alt={post.content}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-xs tracking-wider text-neon">{post.platform.toUpperCase()}</span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center justify-end">
                  <a href={post.url} className="flex items-center gap-1 text-xs text-neon transition-colors hover:text-neon-dark" target="_blank">
                    Ver post <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
