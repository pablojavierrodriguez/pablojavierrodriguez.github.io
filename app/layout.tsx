import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Pablo Javier Rodríguez — Solutions Architect & Digital Products Builder',
  description:
    'Diseño sistemas donde la intención de negocio, la solidez técnica y los agentes autónomos convergen en software que sobrevive al sprint en que nació.',
  openGraph: {
    title: 'Pablo Javier Rodríguez — Solutions Architect & Digital Products Builder',
    description:
      'I design systems where business intent, technical resilience, and autonomous agents converge into software that outlasts the sprint it was born in.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0f14] text-zinc-100">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
