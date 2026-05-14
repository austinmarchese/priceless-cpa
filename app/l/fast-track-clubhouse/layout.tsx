import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Gift For Fast Track Clubhouse | Priceless CPA',
  description: 'Complimentary tax audit for Fast Track Clubhouse members. Built for TikTok Shop sellers who deserve a CPA that actually communicates.',
  openGraph: {
    title: 'A Gift For Fast Track Clubhouse',
    description: 'Complimentary tax audit for Fast Track Clubhouse members. Built for TikTok Shop sellers.',
    url: 'https://priceless-cpa.vercel.app/l/fast-track-clubhouse',
    siteName: 'Priceless CPA',
    type: 'website',
  },
}

export default function FastTrackClubhouseLayout({ children }: { children: React.ReactNode }) {
  return children
}
