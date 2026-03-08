"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/mock-data"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 200)
  }

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-carbon/90 backdrop-blur-md border-b border-neon/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a
  href="#inicio"
  onClick={(e) => {
    e.preventDefault()
    handleNavClick("#inicio")
  }}
  className="flex items-center gap-2"
>
  <Image
    src="/branding/mala-junta-navbar-logo.png"
    alt="Mala Junta FC"
    width={360}
    height={64}
    priority
    className="h-10 w-auto lg:h-12"
  />
  <span className="sr-only">Mala Junta FC</span>
</a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="font-display text-sm tracking-wider text-muted-foreground transition-colors hover:text-neon"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href="https://wa.me/5491133159693"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-neon text-carbon font-display tracking-wider hover:bg-neon-dark">
              CONTACTO
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground lg:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-neon/20 bg-carbon/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display py-2 text-lg tracking-wider text-muted-foreground transition-colors hover:text-neon"
                >
                  {link.label.toUpperCase()}
                </motion.a>
              ))}
              <a
                href="https://wa.me/5491133159693"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-3 w-full bg-neon text-carbon font-display tracking-wider hover:bg-neon-dark">
                  CONTACTO
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    </>
  )
}
