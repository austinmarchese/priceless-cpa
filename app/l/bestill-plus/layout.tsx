import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Gift For BeStill+ | Priceless CPA',
  description: 'Complimentary tax audit for BeStill+ members. Built for TikTok Shop sellers who deserve a CPA that actually communicates.',
  openGraph: {
    title: 'A Gift For BeStill+',
    description: 'Complimentary tax audit for BeStill+ members. Built for TikTok Shop sellers.',
    url: 'https://priceless-cpa.vercel.app/l/bestill-plus',
    siteName: 'Priceless CPA',
    type: 'website',
  },
}

export default function BeStillPlusLayout({ children }: { children: React.ReactNode }) {
  return children
}
