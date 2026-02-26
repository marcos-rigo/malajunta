import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mala Junta FC | Futbol, Amistad y Competencia',
  description:
    'Mala Junta es un equipo de futbol amateur de Tucuman, Argentina. Pasion, amistad y competencia en cada partido. Temporada 2026.',
  keywords: ['futbol amateur', 'Mala Junta', 'Tucuman', 'futbol', 'liga amateur', 'sponsors'],
  openGraph: {
    title: 'Mala Junta FC',
    description: 'Futbol, Amistad y Competencia - Temporada 2026',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
