import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Priceless CPA | Expert Tax and Crypto Business Strategies',
  description: 'Discover Priceless CPA for expert tax prep, crypto accounting, and business strategy. Simplify taxes and grow your business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
