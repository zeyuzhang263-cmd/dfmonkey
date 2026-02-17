import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">dfmonkey 🪼</div>
          <div className="flex gap-6">
            <a href="#products" className="hover:text-blue-400">Products</a>
            <a href="#pricing" className="hover:text-blue-400">Pricing</a>
            <a href="#community" className="hover:text-blue-400">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">AI-Powered EA Trading Solutions</h1>
          <p className="text-xl text-slate-300 mb-8">
            Three strategies designed for stable, consistent profits. Whether you're a beginner or a pro trader.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Three Proven Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Conservative */}
            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600 hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-3">TrendFlow AI</h3>
              <p className="text-slate-300 mb-4">Conservative trend-following strategy</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li>✓ Risk: 1-2% per trade</li>
                <li>✓ Win Rate: 55-65%</li>
                <li>✓ Annual Target: 20-30%</li>
                <li>✓ Max Drawdown: &lt;15%</li>
              </ul>
              <div className="text-3xl font-bold mb-4">$69<span className="text-lg text-slate-400">/one-time</span></div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold">
                Buy Now
              </button>
            </div>

            {/* Advanced */}
            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600 hover:border-green-500 transition scale-105">
              <div className="text-green-500 font-bold mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-3">BreakLevel AI</h3>
              <p className="text-slate-300 mb-4">Support/Resistance breakout strategy</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li>✓ Risk: 1-2% per trade</li>
                <li>✓ Win Rate: 65-70%</li>
                <li>✓ Annual Target: 30-50%</li>
                <li>✓ Max Drawdown: &lt;20%</li>
              </ul>
              <div className="text-3xl font-bold mb-4">$89<span className="text-lg text-slate-400">/one-time</span></div>
              <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold">
                Buy Now
              </button>
            </div>

            {/* Aggressive */}
            <div className="bg-slate-700 p-8 rounded-lg border border-slate-600 hover:border-orange-500 transition">
              <h3 className="text-2xl font-bold mb-3">InstitutionHunter AI</h3>
              <p className="text-slate-300 mb-4">FVG + Multi-timeframe strategy</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li>✓ Risk: 2-3% per trade</li>
                <li>✓ Win Rate: 60-65%</li>
                <li>✓ Annual Target: 50-100%</li>
                <li>✓ Max Drawdown: &lt;25%</li>
              </ul>
              <div className="text-3xl font-bold mb-4">$99<span className="text-lg text-slate-400">/one-time</span></div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 py-2 rounded-lg font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Launch Pricing</h2>
          <p className="text-slate-300 mb-8 text-lg">Limited time offer. Prices increase after week 4.</p>
          
          <div className="bg-slate-700 p-8 rounded-lg border border-blue-500 mb-8">
            <h3 className="text-2xl font-bold mb-4">All Three Bundle</h3>
            <p className="text-slate-300 mb-6">Get all 3 EAs + updates for life</p>
            <div className="text-5xl font-bold mb-6">$199<span className="text-lg text-slate-400">/one-time</span></div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold text-lg">
              Get Bundle
            </button>
            <p className="text-sm text-slate-400 mt-4">Save $59 vs buying separately</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
          <p className="text-slate-300 mb-8 text-lg">24/7 support, market analysis, and strategy updates</p>
          <a href="https://t.me/dfmonkey" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg">
            Join Telegram Community
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 dfmonkey. All rights reserved.</p>
          <p className="text-sm mt-2">
            Disclaimer: Past performance does not guarantee future results. Trading carries risks.
          </p>
        </div>
      </footer>
    </main>
  )
}
