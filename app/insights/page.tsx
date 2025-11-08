import Button from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Insights</h1>
          <p className="mt-2 text-slate-600">Research hub: Articles • White Papers • Videos • Podcasts • Newsletters.</p>
        </div>
        <div className="flex gap-2">
          <input placeholder="Search research…" className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white" />
          <Button variant="outline">Search</Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <Card key={i}><CardContent>
            <div className="text-xs uppercase tracking-wide text-slate-500">White Paper</div>
            <div className="mt-1 font-medium">Methodology & Backtests 2025</div>
            <p className="mt-2 text-sm text-slate-600">How S/T/M reinforce each other across cycles with macro-to-micro drilldowns.</p>
            <Button variant="ghost" className="p-0 mt-2">Read more →</Button>
          </CardContent></Card>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <input placeholder="Your email" className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white w-full md:w-80" />
        <Button>Subscribe</Button>
      </div>
    </div>
  )
}
