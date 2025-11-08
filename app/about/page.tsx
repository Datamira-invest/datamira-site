import { Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Button from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About Datamira</h1>
      <p className="mt-3 text-slate-600">We unify macro, fundamental, tactical, and momentum analytics into a transparent, Power BI‑native platform—built for banks, family offices, and wealth managers.</p>

      <div id="security" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {['Azure / on‑prem', 'SSO & RBAC', 'Data lineage', 'Export APIs'].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4" /> {t}
              </div>
            ))}
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm uppercase tracking-wide text-slate-500">Contact</div>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <input placeholder="Name" className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white" />
              <input placeholder="Company" className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white" />
              <input placeholder="Email" className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white" />
              <textarea placeholder="Message" rows={4} className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white" />
              <Button>Request a demo</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
