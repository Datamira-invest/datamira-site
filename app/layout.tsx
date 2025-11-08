import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datamira — Institutional‑grade financial intelligence',
  description: 'Macro → Sector → Stock analytics in a Power BI‑native platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
