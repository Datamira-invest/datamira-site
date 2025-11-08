import { Card, CardContent } from '@/components/ui/card'

export default function PlatformPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Platform</h1>
      <p className="mt-2 text-slate-600">Macro-to-micro drilldowns with Strategic (quality & valuation), Tactical (flows), and Momentum (price dynamics) scoring across 17,000 global equities.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card><CardContent>
          <h2 className="font-medium text-lg">Macro Drilldowns</h2>
          <p className="text-sm text-slate-600 mt-2">Geography → Sector → Industry → Stock views, heatmaps, and treemaps for relative attractiveness.</p>
        </CardContent></Card>
        <Card id="screening"><CardContent>
          <h2 className="font-medium text-lg">Screening Tool</h2>
          <p className="text-sm text-slate-600 mt-2">Filters for GICS, market cap, liquidity, S/T/M thresholds; sortable grid; scatter and bubble visuals; export to CSV/Excel.</p>
        </CardContent></Card>
      </div>
    </div>
  )
}
