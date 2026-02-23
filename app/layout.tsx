import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rajdhani = Rajdhani({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani"
});

export const metadata: Metadata = {
  title: 'Estructura Solis - Estructuras Metálicas y Obras Menores',
  description: 'Empresa especializada en estructuras metálicas de todo tipo y obras menores de construcción en Maipú, Santiago, Chile.',
  generator: 'Blackbox AI',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/dFSy2Glaw1OKZdBXJvejz-5RkvDu5cslKlxr89LkPGpOQnmkN9j7.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${rajdhani.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
