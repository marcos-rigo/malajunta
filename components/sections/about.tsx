"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Users, Share2, Megaphone, TrendingUp, CalendarDays, Target, Heart } from "lucide-react"

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const offerings = [
  {
    icon: Eye,
    title: "Visibilidad",
    desc: "Logo en indumentaria, presencia en redes sociales y contenido audiovisual del equipo.",
  },
  {
    icon: Users,
    title: "Alcance Local",
    desc: "Conexion directa con la comunidad tucumana a traves de partidos, eventos y actividades del equipo.",
  },
  {
    icon: Share2,
    title: "Contenido Digital",
    desc: "Produccion profesional de fotos, videos, reels y stories con mención y posicionamiento de marca.",
  }
]

const metrics = [
  { icon: Users, value: "700+", label: "Seguidores en redes" },
  { icon: TrendingUp, value: "7.000+", label: "Alcance mensual" },
  { icon: CalendarDays, value: "4", label: "Partidos por mes" },
  { icon: Target, value: "6", label: "Sponsors activos" },
]

export function About() {
  return (
    <section id="quienes-somos" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background accents */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-neon/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">SOBRE NOSOTROS</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">
            QUIENES SOMOS
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </AnimatedSection>

        {/* Institutional text */}
        <AnimatedSection className="mx-auto mb-20 max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Mala Junta nació como un grupo de amigos con una pasión en común: el fútbol. Con el
            tiempo, esa pasión se convirtió en un proyecto deportivo sólido, con identidad propia,
            valores claros y una comunidad que crece partido a partido.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Somos más que un equipo amateur. Representamos disciplina, compromiso y camaraderia
            dentro y fuera de la cancha. Cada temporada buscamos superarnos, competir con seriedad y
            construir un espacio donde el deporte sea motor de vínculos genuinos y desarrollo
            personal.
          </p>

          <div className="flex items-center justify-center gap-2 pt-4">
            <Heart className="h-5 w-5 text-magenta" />
            <span className="font-display tracking-wider text-foreground">
              PASION. AMISTAD. COMPETENCIA.
            </span>
          </div>
        </AnimatedSection>

        {/* What we offer to sponsors */}
        <AnimatedSection className="mb-20">
          <h3 className="section-heading mb-10 text-center text-3xl text-foreground md:text-4xl">
            QUE OFRECEMOS A SPONSORS
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-lg border border-neon/10 bg-card/50 p-6 transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_20px_rgba(32,224,0,0.1)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon/10">
                  <item.icon className="h-6 w-6 text-neon" />
                </div>
                <h4 className="mb-2 font-display text-lg tracking-wider text-foreground">
                  {item.title.toUpperCase()}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Metrics */}
        <AnimatedSection>
          <h3 className="section-heading mb-10 text-center text-3xl text-foreground md:text-4xl">
            AUDIENCIA E IMPACTO
          </h3>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center rounded-lg border border-neon/10 bg-card/50 p-6 text-center"
              >
                <metric.icon className="mb-3 h-6 w-6 text-neon" />
                <span className="font-display text-3xl text-neon md:text-4xl">{metric.value}</span>
                <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
