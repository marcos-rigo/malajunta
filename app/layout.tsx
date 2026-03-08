import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import Script from 'next/script'
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { url: '/favicon-192x192.png', sizes: '192x192' },
      { url: '/favicon-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'Mala Junta FC',
    description: 'Futbol, Amistad y Competencia - Temporada 2026',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 512,
        height: 512,
        alt: 'Mala Junta FC',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mala Junta FC',
    description: 'Futbol, Amistad y Competencia - Temporada 2026',
    images: ['/images/og-image.png'],
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
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}