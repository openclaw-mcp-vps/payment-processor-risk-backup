import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Payment Processor Risk Backup — Instant Failover When Stripe Suspends You',
  description: 'Pre-configured backup payment processing that automatically activates when your primary processor suspends your account. Never lose revenue again.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0cfd6173-7714-40e8-bf44-b787e682b035"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
