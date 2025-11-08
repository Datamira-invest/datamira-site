import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Datamira — Institutional‑grade financial intelligence',
  description: 'Macro → Sector → Stock analytics (Strategic, Tactical, Momentum) across 17k global equities in a Power BI‑native platform.',
  metadataBase: new URL('https://datamira.io'),
  openGraph: {
    title: 'Datamira — Institutional‑grade financial intelligence',
    description: 'Macro → Sector → Stock analytics (S/T/M)',
    url: 'https://datamira.io',
    siteName: 'Datamira',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
