'use client'
import Link from 'next/link'
import Button from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400" />
          <span className="font-semibold tracking-tight">Datamira</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/platform" className="hover:text-slate-900 text-slate-600">Platform</Link>
          <Link href="/insights" className="hover:text-slate-900 text-slate-600">Insights</Link>
          <Link href="/pricing" className="hover:text-slate-900 text-slate-600">Pricing</Link>
          <Link href="/about" className="hover:text-slate-900 text-slate-600">About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">Subscribe</Button>
          <Button>Request a demo</Button>
        </div>
      </div>
    </header>
  )
}
