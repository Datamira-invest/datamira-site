import { Card, CardContent } from '@/components/ui/card'
import Button from '@/components/ui/button'

const tiers = [
  { name: 'Macro', price: '€', desc: 'Geo/sector dashboards & macro optimizer.' },
  { name: 'Basic', price: '€€', desc: 'Strategic score + fundamentals.' },
  { name: 'Standard', price: '€€€', desc: 'Add tactical flow signals.' },
  { name: 'Premium', price: '€€€€', desc: 'Full S+T+M with advanced screening.' },
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 text-slate-600">Annual per seat. Volume and multi‑year discounts available. Enterprise options for on‑prem/SLA.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {tiers.map((p) => (
          <Card key={p.name} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-sm uppercase tracking-wide text-slate-500">{p.name}</div>
              <div className="mt-1 text-2xl font-semibold">{p.price}</div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <Button variant="ghost" className="mt-3 p-0 text-slate-900">Compare features →</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
