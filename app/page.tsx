'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Search, Layers, LineChart, Shield, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Page() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const slides = [
    { title: 'Macro → Sector → Stock', sub: 'Animated drilldown of relative attractiveness', type: 'video' },
    { title: 'Methodology & Backtests 2025', sub: 'Flagship whitepaper cover mock', type: 'report' },
    { title: 'Platform Teaser', sub: '30s product walkthrough', type: 'video' },
  ]

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#0B1220]">
      {/* Top Notification Bar */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-2 text-sm flex items-center justify-between">
          <div>
            <span className="font-medium">Methodology & Backtests 2025</span> is out — download the latest paper.
          </div>
          <Button variant="ghost" className="gap-2">
            Download
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400" />
            <span className="font-semibold tracking-tight">Datamira</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#platform" className="hover:text-slate-900 text-slate-600">Platform</a>
            <a href="#insights" className="hover:text-slate-900 text-slate-600">Insights</a>
            <a href="#pricing" className="hover:text-slate-900 text-slate-600">Pricing</a>
            <a href="#about" className="hover:text-slate-900 text-slate-600">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">Subscribe</Button>
            <Button>Request a demo</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Financial intelligence for disciplined outperformance.</h1>
            <p className="mt-4 text-slate-600 text-lg">Macro → Sector → Stock. Strategic, Tactical, and Momentum analytics across 17,000 global equities — in a Power BI‑native platform.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Request a demo</Button>
              <Button variant="outline">See the platform</Button>
              <Button variant="ghost">Subscribe</Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <span>Power BI Native</span>
              <span>Backtested since 1998</span>
              <span>Secure (Azure / on‑prem)</span>
              <span>17,000 stocks</span>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] bg-slate-50">
                  <motion.div
                    key={carouselIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    {slides[carouselIndex].type === 'video' ? (
                      <div className="flex flex-col items-center">
                        <div className="h-24 w-24 rounded-full border border-slate-200 flex items-center justify-center">
                          <Play className="h-8 w-8" />
                        </div>
                        <p className="mt-3 font-medium">{slides[carouselIndex].title}</p>
                        <p className="text-sm text-slate-500">{slides[carouselIndex].sub}</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="mx-auto h-32 w-48 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 shadow-inner" />
                        <p className="mt-3 font-medium">{slides[carouselIndex].title}</p>
                        <p className="text-sm text-slate-500">{slides[carouselIndex].sub}</p>
                      </div>
                    )}
                  </motion.div>
                </div>
                <div className="flex items-center justify-between p-3 border-t border-slate-200">
                  <div className="flex gap-2">
                    {slides.map((_, i) => (
                      <button key={i} onClick={() => setCarouselIndex(i)} className={`h-2 w-2 rounded-full ${i === carouselIndex ? 'bg-slate-900' : 'bg-slate-300'}`} />
                    ))}
                  </div>
                  <div className="text-xs text-slate-500">Product • Research • Video</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore – Investment Framework */}
      <section id="platform" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Explore the investment framework</h2>
          <p className="mt-2 text-slate-600">Top‑down + bottom‑up analytics with momentum overlays, delivered in one unified platform.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers className="h-5 w-5" />, title: 'Top‑Down Macro', text: 'Geography & sector attractiveness with scenario toggles and rotation maps.' },
              { icon: <BarChart2 className="h-5 w-5" />, title: 'Bottom‑Up Quality @ Reasonable Price', text: 'Strategic score that blends profitability, growth, safety, payout, and valuation.' },
              { icon: <LineChart className="h-5 w-5" />, title: 'Momentum Overlay', text: 'Relative & absolute trends to reinforce signal and timing.' },
            ].map((c, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-md bg-slate-900/90 text-white flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="mt-4 font-medium text-lg">{c.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{c.text}</p>
                  <Button variant="ghost" className="mt-3 p-0 text-slate-900">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Our process</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Ideation','Macro sizing','Stock selection & valuation','Risk & portfolio'].map((step, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="text-4xl font-semibold">{i+1}</div>
                  <div className="mt-3 font-medium">{step}</div>
                  <p className="mt-2 text-sm text-slate-600">Concise description of how this stage works with examples from the platform.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Platform modules</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: 'Macro Plan', text: 'Top‑down allocation dashboards & macro optimizer.' },
              { title: 'Basic', text: 'Strategic score and fundamentals across 17k stocks.' },
              { title: 'Standard', text: 'Add tactical flow signals for responsive tilts.' },
              { title: 'Premium', text: 'Full S+T+M stack with advanced screening.' },
              { title: 'Screening Tool', text: 'Interactive filters, rankings, scatter, watchlists, exports.' },
            ].map((m, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="font-medium">{m.title}</div>
                  <p className="text-sm text-slate-600 mt-2">{m.text}</p>
                  <Button variant="ghost" className="mt-3 p-0 text-slate-900">See more <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Center */}
      <section id="insights" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Research center</h2>
              <p className="mt-2 text-slate-600">Articles • White Papers • Videos • Podcasts • Newsletters.</p>
            </div>
            <div className="flex gap-2">
              <input placeholder="Search research…" className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white" />
              <Button variant="outline" className="gap-2"><Search className="h-4 w-4" /> Search</Button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <Card key={i} className="h-full">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] bg-slate-100" />
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-wide text-slate-500">White Paper</div>
                    <div className="mt-1 font-medium">Methodology & Backtests 2025</div>
                    <p className="mt-2 text-sm text-slate-600">How Strategic, Tactical and Momentum scores reinforce each other across cycles.</p>
                    <Button variant="ghost" className="mt-3 p-0 text-slate-900">Read more <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            <input placeholder="Your email" className="border border-slate-300 rounded-md px-3 py-2 text-sm bg-white w-full md:w-80" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Results Highlight */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Results at a glance</h2>
          <p className="mt-2 text-slate-600">Backtests since 1998 show additive alpha from each layer; combined models reinforce across cycles.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Strategic +2.9% p.a.','Tactical +3.9% p.a.','Momentum +2.5% p.a.','S+T+M +17.7% p.a.','17,000 stocks'].map((t, i) => (
              <Card key={i}><CardContent className="p-4 text-center font-medium">{t}</CardContent></Card>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Disclaimer: illustrative backtests, pre‑costs; past performance is not indicative of future results.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-2 text-slate-600">Annual per seat. Volume and multi‑year discounts available. Enterprise options for on‑prem/SLA.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Macro', price: '€', desc: 'Geo/sector dashboards & macro optimizer.' },
              { name: 'Basic', price: '€€', desc: 'Strategic score + fundamentals.' },
              { name: 'Standard', price: '€€€', desc: 'Add tactical flow signals.' },
              { name: 'Premium', price: '€€€€', desc: 'Full S+T+M with advanced screening.' },
            ].map((p, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wide text-slate-500">{p.name}</div>
                  <div className="mt-1 text-2xl font-semibold">{p.price}</div>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <Button variant="ghost" className="mt-3 p-0 text-slate-900">Compare features <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About Datamira</h2>
            <p className="mt-3 text-slate-600">We unify macro, fundamental, tactical, and momentum analytics into a transparent, Power BI‑native platform—built for banks, family offices, and wealth managers.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Azure / on‑prem','SSO & RBAC','Data lineage','Export APIs'].map((t, i) => (
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
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold">Datamira</div>
            <p className="mt-2 text-slate-600">Institutional‑grade financial intelligence.</p>
          </div>
          <div>
            <div className="font-semibold">Platform</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>Overview</li>
              <li>Screening Tool</li>
              <li>Security & Tech</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>Insights</li>
              <li>Pricing</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Disclaimers</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-slate-500">© {new Date().getFullYear()} Datamira. For professional investors. Backtests are illustrative; past performance is not indicative of future results.</div>
      </footer>
    </div>
  )
}
