export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-semibold">Datamira</div>
          <p className="mt-2 text-slate-600">Institutional-grade financial intelligence.</p>
        </div>
        <div>
          <div className="font-semibold">Platform</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><a href="/platform">Overview</a></li>
            <li><a href="/platform#screening">Screening Tool</a></li>
            <li><a href="/about#security">Security & Tech</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><a href="/insights">Insights</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/disclaimers">Disclaimers</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-slate-500">
        © {new Date().getFullYear()} Datamira. For professional investors. Backtests are illustrative; past performance is not indicative of future results.
      </div>
    </footer>
  )
}
