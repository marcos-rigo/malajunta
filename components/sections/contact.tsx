"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa los campos obligatorios.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor ingresa un email valido.")
      return
    }

    setIsSubmitting(true)
    // Simulate submit
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success("Mensaje enviado correctamente. Te responderemos a la brevedad!")
    setFormData({ name: "", email: "", phone: "", subject: "General", message: "" })
    setIsSubmitting(false)
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
              <Label htmlFor="email" className="mb-1.5 block font-display text-xs tracking-[0.2em] text-foreground">
                EMAIL *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="border-neon/20 bg-card/50 text-foreground placeholder:text-muted-foreground focus:border-neon"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="mb-1.5 block font-display text-xs tracking-[0.2em] text-foreground">
                TELEFONO
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 381 ..."
                className="border-neon/20 bg-card/50 text-foreground placeholder:text-muted-foreground focus:border-neon"
              />
            </div>

            <div>
              <Label htmlFor="subject" className="mb-1.5 block font-display text-xs tracking-[0.2em] text-foreground">
                MOTIVO
              </Label>
              <select
                id="subject"
                name="subject"
                data-contact-subject=""
                value={formData.subject}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-neon/20 bg-card/50 px-3 py-2 text-sm text-foreground ring-offset-background focus:border-neon focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="General">General</option>
                <option value="Patrocinio">Patrocinio</option>
                <option value="Prensa">Prensa</option>
              </select>
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
                placeholder="Tu mensaje..."
                rows={5}
                className="border-neon/20 bg-card/50 text-foreground placeholder:text-muted-foreground focus:border-neon"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neon text-carbon font-display text-lg tracking-wider hover:bg-neon-dark glow-green disabled:opacity-50"
              size="lg"
            >
              {isSubmitting ? (
                "ENVIANDO..."
              ) : (
                <>
                  ENVIAR MENSAJE <Send className="ml-2 h-4 w-4" />
                </>
              )}
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
                    <p className="text-foreground">+54 381 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10">
                    <Mail className="h-5 w-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-foreground">contacto@malajuntafc.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10">
                    <MapPin className="h-5 w-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sede / Cancha</p>
                    <p className="text-foreground">Cancha El Bajo — Tucuman, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex-1 overflow-hidden rounded-lg border border-neon/10 bg-card/50">
              <div className="flex h-full min-h-[250px] items-center justify-center bg-gradient-to-br from-card to-secondary">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-10 w-10 text-neon/40" />
                  <p className="font-display text-sm tracking-wider text-muted-foreground">
                    CANCHA EL BAJO
                  </p>
                  <p className="text-xs text-muted-foreground">Tucuman, Argentina</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
