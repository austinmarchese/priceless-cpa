import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Questions to Ask Your CPA Before You Sign | Priceless CPA',
  description: 'Before you sign your tax return, make sure your CPA can answer these 7 critical questions. Get personalized questions based on your business situation.',
  openGraph: {
    title: '7 Questions to Ask Your CPA Before You Sign',
    description: 'Before you sign your tax return, make sure your CPA can answer these 7 critical questions.',
    url: 'https://priceless-cpa.vercel.app/tax-checklist',
    siteName: 'Priceless CPA',
    type: 'website',
  },
}

export default function TaxChecklistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
