'use client'

import CommunityLanding from '@/components/CommunityLanding'

export default function FastTrackClubhousePage() {
  return (
    <CommunityLanding
      communityName="Fast Track Clubhouse"
      source="fast-track-clubhouse"
      pillText="Complimentary Tax Audit · TikTok Shop Sellers"
      intro={
        <>
          A friend in this group mentioned what some of you have been dealing with — missed write-offs, no updates on your filings, radio silence when you needed answers.
        </>
      }
      bullets={[
        'Knowing if your return was actually filed (or extended)',
        'Catching write-offs a TikTok Shop seller should be claiming',
        'Real communication, not silence in the middle of tax season',
      ]}
      body={
        <>
          I&apos;m a CPA for creators and TikTok Shop sellers. I&apos;d love to offer you a <strong>complimentary tax audit</strong> — we&apos;ll review your last return, find missed deductions, and make sure you know where you stand.
        </>
      }
    />
  )
}
