import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'
import './ecom.css'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
})

const body = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Priceless CPA | The CPA Firm for 7-Figure eCommerce Brands',
  description:
    'The eCom Profit & Tax Audit: find the money your store is leaking in taxes, sales tax exposure, and inventory accounting. If we can\'t find you savings worth more than the fee, we refund the difference.',
  openGraph: {
    title: 'Priceless CPA | The CPA Firm for 7-Figure eCommerce Brands',
    description:
      'Find the money your store is leaking in taxes, sales tax exposure, and inventory accounting.',
    siteName: 'Priceless CPA',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EcomLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ecom-root`}>
      {children}
    </div>
  )
}
