export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-red-900/40 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Account Suspension Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Never Lose Revenue When{" "}
          <span className="text-[#58a6ff]">Stripe Suspends</span>{" "}
          Your Account
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instant backup payment processing that automatically activates the moment your primary processor flags or suspends your account. Zero downtime. Zero lost sales.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Backup Protection — $99/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Setup in under 10 minutes.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">&lt; 60s</div>
            <div className="text-sm text-[#8b949e] mt-1">Failover time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-sm text-[#8b949e] mt-1">Uptime SLA</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">$0</div>
            <div className="text-sm text-[#8b949e] mt-1">Lost revenue</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-white">Full Protection Plan</h2>
            <span className="bg-[#58a6ff]/20 text-[#58a6ff] text-xs font-semibold px-2 py-1 rounded">POPULAR</span>
          </div>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-white">$99</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "Automatic processor health monitoring",
              "Instant failover to backup processor",
              "Webhook endpoints for Stripe, PayPal, Braintree",
              "Real-time Slack & email alerts",
              "Dashboard with processor status",
              "Up to 3 backup processors configured",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Protected Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How fast does the failover happen?</h3>
            <p className="text-[#8b949e] text-sm">Our monitoring checks your processor health every 30 seconds. Once a suspension or failure is detected, traffic is automatically rerouted to your backup processor in under 60 seconds — before most customers even notice.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which payment processors are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support Stripe, PayPal, Braintree, Square, and Authorize.net as both primary and backup processors. You configure your preferred backup during onboarding and we handle the rest.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need to change my existing checkout code?</h3>
            <p className="text-[#8b949e] text-sm">No. You point your checkout to our proxy endpoint instead of directly to Stripe or PayPal. We handle routing transparently. Setup takes under 10 minutes with our step-by-step guide.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Payment Processor Risk Backup. All rights reserved.
      </footer>
    </main>
  )
}
