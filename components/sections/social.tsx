"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ExternalLink } from "lucide-react"
import { socialPosts } from "@/lib/mock-data"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/malajuntafc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@malajuntafc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.81.13v-3.5a6.37 6.37 0 00-.81-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.05a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.48z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@malajuntafc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/malajuntafc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function Social() {
  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00")
    return date.toLocaleDateString("es-AR", { day: "2-digit", month: "short" })
  }

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
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">SEGUINOS</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">REDES SOCIALES</h2>
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
                  <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-magenta">
                    <Heart className="h-3 w-3" /> {post.likes.toLocaleString()}
                  </span>
                  <a href="#" className="flex items-center gap-1 text-xs text-neon transition-colors hover:text-neon-dark">
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
