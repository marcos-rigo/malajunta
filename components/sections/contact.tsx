"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.message) return

    const text = `Hola! Soy *${formData.name}* y les escribo desde la web de Mala Junta FC.%0A%0A${encodeURIComponent(formData.message)}`
    window.open(`https://wa.me/5491133159693?text=${text}`, "_blank")
    setFormData({ name: "", message: "" })
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-neon/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-neon">ESCRIBINOS</p>
          <h2 className="section-heading text-5xl text-foreground md:text-7xl">CONTACTO</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-neon" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <Label htmlFor="name" className="mb-1.5 block font-display text-xs tracking-[0.2em] text-foreground">
                NOMBRE *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="border-neon/20 bg-card/50 text-foreground placeholder:text-muted-foreground focus:border-neon"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="mb-1.5 block font-display text-xs tracking-[0.2em] text-foreground">
                MENSAJE *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                rows={6}
                className="border-neon/20 bg-card/50 text-foreground placeholder:text-muted-foreground focus:border-neon"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={!formData.name || !formData.message}
              className="w-full bg-neon text-carbon font-display text-lg tracking-wider hover:bg-neon-dark glow-green disabled:opacity-40 disabled:cursor-not-allowed"
              size="lg"
            >
              ENVIAR POR WHATSAPP <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-lg border border-neon/10 bg-card/50 p-6">
              <h3 className="mb-4 font-display text-xl tracking-wider text-foreground">
                DATOS DE CONTACTO
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10">
                    <Phone className="h-5 w-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <a href="https://wa.me/5491133159693" target="_blank" rel="noopener noreferrer" className="text-foreground transition-colors hover:text-neon">+54 9 11 3315-9693</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10">
                    <MapPin className="h-5 w-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sede / Cancha</p>
                    <p className="text-foreground">Las Cañas Fútbol — Tucumán, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1 overflow-hidden rounded-lg border border-neon/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.1808371994643!2d-65.27746512558353!3d-26.802369988600578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3619ddfe27%3A0x51721a7af1fcdb93!2sLas%20Ca%C3%B1as%20Futbol!5e0!3m2!1ses!2sar!4v1772991841797!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
