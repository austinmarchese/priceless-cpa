'use client'

import BookingEmbed, { BOOKING_EMBED_STYLES } from '@/components/BookingEmbed'

const STYLES = `
  .fc-root { background: #f5f0e8; color: #1a1f2e; font-family: 'DM Sans', system-ui, -apple-system, sans-serif; min-height: 100vh; min-height: 100dvh; display: flex; flex-direction: column; }
  .fc-root *, .fc-root *::before, .fc-root *::after { box-sizing: border-box; }
  .fc-serif { font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; }

  .fc-topbar { background: #1a1f2e; color: #d4b27a; text-align: center; padding: 6px 16px; font-size: 11px; letter-spacing: 0.4px; flex-shrink: 0; }
  .fc-topbar strong { color: #f5f0e8; font-weight: 600; }

  .fc-nav { padding: 10px 24px; display: flex; justify-content: center; flex-shrink: 0; }
  .fc-nav-logo { font-size: 18px; color: #1a1f2e; letter-spacing: 0.5px; margin: 0; font-family: 'DM Serif Display', Georgia, serif; }
  .fc-nav-logo .gold { color: #b8935a; font-style: italic; }

  .fc-grid { flex: 1; display: grid; grid-template-columns: 1fr 1.05fr; gap: 40px; align-items: center; padding: 16px 32px 24px; max-width: 1080px; margin: 0 auto; width: 100%; }

  .fc-hero { text-align: left; max-width: 480px; }
  .fc-pill { display: inline-block; background: rgba(184, 147, 90, 0.12); border: 1px solid rgba(184, 147, 90, 0.3); border-radius: 100px; padding: 5px 13px; font-size: 10.5px; color: #8a6a3d; letter-spacing: 1px; text-transform: uppercase; font-weight: 600; margin-bottom: 14px; }
  .fc-h1 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); line-height: 1.1; color: #1a1f2e; margin: 0 0 16px; letter-spacing: -0.01em; }
  .fc-h1 .accent { color: #b8935a; font-style: italic; }
  .fc-msg { font-size: 0.95rem; color: #2a2f3e; line-height: 1.55; margin: 0 0 12px; }
  .fc-msg strong { color: #1a1f2e; font-weight: 600; }
  .fc-list { list-style: none; padding: 0; margin: 0 0 12px; display: flex; flex-direction: column; gap: 6px; }
  .fc-list li { font-size: 0.9rem; color: #4a4540; padding-left: 18px; position: relative; line-height: 1.45; }
  .fc-list li::before { content: ''; position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background: #b8935a; }
  .fc-callout { font-size: 0.95rem; color: #1a1f2e; font-weight: 600; font-style: italic; line-height: 1.45; margin: 14px 0 0; padding: 11px 15px; background: rgba(184, 147, 90, 0.10); border-left: 3px solid #b8935a; border-radius: 0 10px 10px 0; }
  .fc-sig-block { margin: 22px 0 0; padding-top: 16px; border-top: 1px solid rgba(26, 31, 46, 0.08); }
  .fc-sig-mark { font-family: 'Caveat', 'Brush Script MT', cursive; font-size: 2.1rem; color: #1a1f2e; line-height: 1; margin: 0 0 4px; letter-spacing: 0.5px; }
  .fc-sig-name { font-family: 'DM Serif Display', Georgia, serif; font-size: 0.92rem; color: #1a1f2e; margin: 0; line-height: 1.3; }
  .fc-sig-meta { font-size: 0.78rem; color: #9a9590; margin: 1px 0 0; letter-spacing: 0.02em; }

  .fc-booking-col { width: 100%; }
  .fc-booking-card { background: #ffffff; border: 1px solid rgba(184, 147, 90, 0.18); border-radius: 16px; padding: 16px 16px 14px; box-shadow: 0 12px 40px rgba(26, 31, 46, 0.08); }
  .fc-booking-head { text-align: left; margin-bottom: 10px; padding: 0 4px; }
  .fc-booking-eyebrow { font-size: 0.68rem; color: #b8935a; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; margin: 0 0 4px; }
  .fc-booking-title { font-family: 'DM Serif Display', Georgia, serif; font-size: 1.2rem; color: #1a1f2e; margin: 0 0 2px; line-height: 1.2; }
  .fc-booking-note { font-size: 0.78rem; color: #9a9590; margin: 0; }

  .fc-booking-card .bk-embed-wrap { box-shadow: none; border-radius: 12px; }
  .fc-booking-card .bk-embed-iframe { height: 620px !important; min-height: 620px !important; max-height: 620px !important; }

  .fc-footer { background: #1a1f2e; color: #7a756e; padding: 14px 24px; text-align: center; flex-shrink: 0; }
  .fc-footer-line { font-size: 0.74rem; line-height: 1.4; margin: 0; }
  .fc-footer-line strong { color: #d4b27a; font-weight: 500; }

  @media (max-width: 900px) {
    .fc-grid { grid-template-columns: 1fr; gap: 20px; padding: 16px 16px 24px; max-width: 580px; align-items: start; }
    .fc-hero { max-width: none; }
    .fc-booking-card { padding: 14px; }
    .fc-booking-card .bk-embed-iframe { height: 580px !important; min-height: 580px !important; max-height: 580px !important; }
  }
  @media (max-width: 560px) {
    .fc-topbar { font-size: 10px; padding: 6px 14px; }
    .fc-nav { padding: 10px 20px; }
    .fc-nav-logo { font-size: 17px; }
    .fc-grid { gap: 16px; padding: 12px 14px 20px; }
    .fc-h1 { font-size: clamp(1.5rem, 6.5vw, 2rem); margin-bottom: 12px; }
    .fc-msg { font-size: 0.92rem; }
    .fc-callout { font-size: 0.92rem; }
    .fc-booking-card { padding: 12px; border-radius: 14px; }
  }
`

export type CommunityLandingProps = {
  communityName: string
  source: string
  topbarLabel?: string
  pillText?: string
  headlineSuffix?: string
  intro: React.ReactNode
  bullets?: string[]
  body: React.ReactNode
  callout?: string
  bookingTitle?: string
  bookingNote?: string
}

export default function CommunityLanding({
  communityName,
  source,
  topbarLabel,
  pillText = 'Complimentary Tax Audit',
  headlineSuffix,
  intro,
  bullets,
  body,
  callout,
  bookingTitle = 'Pick a time that works.',
  bookingNote = '30 minutes. No obligation. Bring your last tax return if you have it.',
}: CommunityLandingProps) {
  return (
    <div className="fc-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES + BOOKING_EMBED_STYLES }} />

      <div className="fc-topbar">
        {topbarLabel || (
          <>A Gift For <strong>{communityName}</strong> Members</>
        )}
      </div>

      <nav className="fc-nav">
        <p className="fc-nav-logo">Priceless <span className="gold">CPA</span></p>
      </nav>

      <div className="fc-grid">
        <div className="fc-hero">
          <span className="fc-pill">{pillText}</span>
          <h1 className="fc-h1 fc-serif">
            Hey <span className="accent">{communityName}{headlineSuffix || '.'}</span>
          </h1>

          <div className="fc-msg">{intro}</div>

          {bullets && bullets.length > 0 && (
            <ul className="fc-list">
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}

          <div className="fc-msg">{body}</div>

          {callout && <p className="fc-callout">{callout}</p>}

          <div className="fc-sig-block">
            <p className="fc-sig-mark">Anthony</p>
            <p className="fc-sig-name">Anthony Price, CPA</p>
            <p className="fc-sig-meta">Founder, Priceless CPA</p>
          </div>
        </div>

        <div className="fc-booking-col">
          <div className="fc-booking-card">
            <div className="fc-booking-head">
              <p className="fc-booking-eyebrow">Book Your Audit</p>
              <h2 className="fc-booking-title fc-serif">{bookingTitle}</h2>
              <p className="fc-booking-note">{bookingNote}</p>
            </div>
            <BookingEmbed source={source} />
          </div>
        </div>
      </div>

      <footer className="fc-footer">
        <p className="fc-footer-line">
          Built by <strong>Anthony Price, CPA</strong> &middot; Priceless CPA
        </p>
      </footer>
    </div>
  )
}
