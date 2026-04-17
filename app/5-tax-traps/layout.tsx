import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Tax Traps Your Accountant Is Missing | Priceless CPA',
  description: 'The same 5 tax traps cost serial entrepreneurs $20K-$200K every year. Your accountant files. A tax strategist plans. See what they are missing.',
  openGraph: {
    title: '5 Tax Traps Your Accountant Is Missing',
    description: 'The same 5 tax traps cost serial entrepreneurs $20K-$200K every year. See what your accountant is missing.',
    url: 'https://priceless-cpa.vercel.app/5-tax-traps',
    siteName: 'Priceless CPA',
    type: 'website',
  },
}

export default function FiveTaxTrapsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
