import { navLinks } from "@/lib/mock-data"

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/malajuntafc" },
  { name: "TikTok", url: "https://tiktok.com/@malajuntafc" },
  { name: "YouTube", url: "https://youtube.com/@malajuntafc" },
  { name: "X", url: "https://x.com/malajuntafc" },
]

export function Footer() {
  return (
    <footer className="border-t border-neon/10 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo + manifesto */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="font-display text-2xl tracking-wider text-foreground">MALA JUNTA</span>
              <span className="font-display text-sm tracking-widest text-neon">FC</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mas que un equipo, una familia. Mala Junta representa la pasion por el futbol, los
              lazos de amistad y la competencia sana. Desde Tucuman para el mundo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-[0.2em] text-foreground">
              LINKS RAPIDOS
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-neon"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-[0.2em] text-foreground">
              REDES SOCIALES
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-neon"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neon/10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {'© 2026 Mala Junta FC. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
