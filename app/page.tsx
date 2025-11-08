'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Search, Layers, LineChart, Shield, Play } from 'lucide-react'
import Button from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Page() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const slides = [
    { title: 'Macro → Sector → Stock', sub: 'Animated drilldown of relative attractiveness', type: 'video' },
    { title: 'Methodology & Backtests 2025', sub: 'Flagship whitepaper cover mock', type: 'report' },
    { title: 'Platform Teaser', sub: '30s product walkthrough', type: 'video' },
  ]

  return (
    <div className="min-h-screen text-[#0B1220]">
      {/* Top Notification Bar */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-2 text-sm flex items-center justify-between">
          <div><span className="font-medium">Methodology & Backtests 2025</span> is out — download the latest paper.</div>
          <Button variant="ghost" className="gap-2">Download <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Financial intelligence for disciplined outperformance.</h1>
            <p className="mt-4 text-slate-600 text-lg">Macro → Sector → Stock. Strategic, Tactical, and Momentum analytics across 17,000 global equities — in a Power BI-native platform.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Request a demo</Button>
              <Button variant="outline">See the platform</Button>
              <Button variant="ghost">Subscribe</Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <span>Power BI Native</span>
              <span>Backtested since 1998</span>
              <span>Secure (Azure / on-prem)</span>
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
          <p className="mt-2 text-slate-600">Top-down + bottom-up analytics with momentum overlays, delivered in one unified platform.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers className="h-5 w-5" />, title: 'Top-Down Macro', text: 'Geography & sector attractiveness with scenario toggles and rotation maps.' },
              { icon: <BarChart2 className="h-5 w-5" />, title: 'Bottom-Up Quality @ Reasonable Price', text: 'Strategic score that blends profitability, growth, safety, payout, and valuation.' },
              { icon: <LineChart className="h-5 w-5" />, title: 'Momentum Overlay', text: 'Relative & absolute trends to reinforce signal and timing.' },
            ].map((c, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-md bg-slate-900/90 text-white flex items-center justify-center">{c.icon}</div>
                  <h3 className="mt-4 font-medium text-lg">{c.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{c.text}</p>
                </CardContent>
              </Card>
            ))}
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
          <p className="mt-3 text-xs text-slate-500">Disclaimer: illustrative backtests, pre-costs; past performance is not indicative of future results.</p>
        </div>
      </section>
    </div>
  )
}
