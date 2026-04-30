import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The S-Corp Owner's Tax Playbook | Priceless CPA",
  description: 'A 21-page playbook breaking down exactly how S-Corp owners can save tens of thousands of dollars in taxes. Built for business owners making $250K+ in revenue.',
  openGraph: {
    title: "The S-Corp Owner's Tax Playbook",
    description: 'A 21-page playbook breaking down exactly how S-Corp owners can save tens of thousands in taxes.',
    url: 'https://priceless-cpa.vercel.app/l/s-corp-playbook',
    siteName: 'Priceless CPA',
    type: 'website',
  },
}

export default function SCorpPlaybookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
