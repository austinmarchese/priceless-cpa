'use client'

import { useEffect, useState } from 'react'

const CALENDAR_ID = 'L4e0QcVE77VAkFsP6ogx'

type BookingEmbedProps = {
  source: string
  medium?: string
  campaign?: string
  content?: string
  term?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

export const BOOKING_EMBED_STYLES = `
  .bk-embed-wrap { background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.25); }
  .bk-embed-iframe { width: 100%; min-height: 700px; border: 0; display: block; background: #ffffff; }
  @media (max-width: 900px) {
    .bk-embed-iframe { min-height: 650px; }
  }
`

export default function BookingEmbed({
  source,
  medium = 'landing-page',
  campaign,
  content,
  term,
  firstName,
  lastName,
  email,
  phone,
}: BookingEmbedProps) {
  const [height, setHeight] = useState(1200)

  const params = new URLSearchParams()
  params.set('source', source)
  params.set('utm_source', source)
  params.set('utm_medium', medium)
  params.set('utm_campaign', campaign || source)
  if (content) params.set('utm_content', content)
  if (term) params.set('utm_term', term)
  if (firstName) params.set('first_name', firstName)
  if (lastName) params.set('last_name', lastName)
  if (email) params.set('email', email)
  if (phone) params.set('phone', phone)

  const query = params.toString()
  const src = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}${query ? `?${query}` : ''}`

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== 'string' || !e.origin.includes('leadconnectorhq.com')) return
      const data = e.data
      if (!data || typeof data !== 'object') return
      const h = typeof data.height === 'number' ? data.height : Number(data.height)
      if (!Number.isFinite(h) || h < 400) return
      setHeight(Math.ceil(h) + 40)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <div className="bk-embed-wrap">
      <iframe
        src={src}
        title="Book a Tax Strategy Call"
        className="bk-embed-iframe"
        style={{ height: `${height}px` }}
        scrolling="auto"
      />
    </div>
  )
}
