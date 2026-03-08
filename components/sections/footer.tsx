import Image from "next/image"
import { navLinks } from "@/lib/mock-data"

export function Footer() {
  return (
    <footer className="border-t border-neon/10 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Logo + manifesto */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/mala-junta-navbar-logo.png"
                alt="Mala Junta FC"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Más que un equipo, una familia. Mala Junta representa la pasión por el fútbol, los
              lazos de amistad y la competencia sana. Desde Tucumán para el mundo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-[0.2em] text-foreground">
              LINKS RÁPIDOS
            </h4>
            <div className="flex flex-col gap-2">
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
            <a
              href="https://www.instagram.com/malajunta.f7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-neon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @malajunta.f7
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-neon/10 pt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Mala Junta FC. Todos los derechos reservados.
          </p>

          {/* Developer credit */}
          <a
            href="https://marcosrigo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
            title="Desarrollado por Marcos Rigo"
          >
            <span className="text-xs tracking-wide">Desarrollado por</span>
            <Image
              src="/images/Logo_.png"
              alt="Marcos Rigo"
              width={18}
              height={18}
              className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-70"
            />
            
          </a>
        </div>
      </div>
    </footer>
  )
}
