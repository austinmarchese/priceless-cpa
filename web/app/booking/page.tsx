'use client'

import BookingEmbed, { BOOKING_EMBED_STYLES } from '@/components/BookingEmbed'

const STYLES = `
  .bk-root { background: #f5f0e8; color: #1a1f2e; font-family: 'DM Sans', system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; min-height: 100vh; min-height: 100dvh; }
  .bk-root *, .bk-root *::before, .bk-root *::after { box-sizing: border-box; }
  .bk-serif { font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; }

  .bk-topbar { background: #1a1f2e; color: #d4b27a; text-align: center; padding: 8px 16px; font-size: 11.5px; letter-spacing: 0.4px; flex-shrink: 0; }
  .bk-topbar strong { color: #f5f0e8; font-weight: 600; }

  .bk-nav { padding: 14px 24px; display: flex; justify-content: center; flex-shrink: 0; }
  .bk-nav-logo { font-size: 20px; color: #1a1f2e; letter-spacing: 0.5px; margin: 0; font-family: 'DM Serif Display', Georgia, serif; }
  .bk-nav-logo .gold { color: #b8935a; font-style: italic; }

  .bk-main { flex: 1; display: flex; flex-direction: column; align-items: center; padding: 40px 24px 60px; }
  .bk-head { text-align: center; max-width: 540px; margin: 0 auto 32px; }
  .bk-eyebrow { font-size: 0.78rem; color: #b8935a; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; margin: 0 0 12px; }
  .bk-heading { font-family: 'DM Serif Display', Georgia, serif; font-size: clamp(1.6rem, 3.5vw, 2.2rem); line-height: 1.2; margin: 0 0 12px; color: #1a1f2e; }
  .bk-heading .accent { color: #b8935a; font-style: italic; }
  .bk-sub { font-size: 1rem; color: #6b6760; line-height: 1.6; margin: 0; }

  .bk-embed-container { width: 100%; max-width: 700px; }
  .bk-embed-container .bk-embed-wrap { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }

  .bk-note { text-align: center; font-size: 0.85rem; color: #a8a39c; margin: 20px 0 0; }

  .bk-footer { text-align: center; padding: 32px 20px 24px; border-top: 1px solid rgba(184, 147, 90, 0.12); margin-top: auto; }
  .bk-footer-logo { font-family: 'DM Serif Display', Georgia, serif; font-size: 16px; color: #1a1f2e; margin: 0 0 6px; }
  .bk-footer-logo .light { color: #b8935a; font-style: italic; }
  .bk-footer-copy { font-size: 0.75rem; color: #a8a39c; margin: 0; }

  @media (max-width: 768px) {
    .bk-main { padding: 28px 16px 40px; }
    .bk-head { margin-bottom: 24px; }
  }
  @media (max-width: 560px) {
    .bk-topbar { font-size: 10.5px; padding: 7px 14px; }
    .bk-nav { padding: 12px 20px; }
    .bk-nav-logo { font-size: 18px; }
    .bk-main { padding: 20px 12px 32px; }
    .bk-heading { font-size: clamp(1.4rem, 6vw, 1.8rem); }
  }
`

export default function BookingPage() {
  return (
    <div className="bk-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES + BOOKING_EMBED_STYLES }} />
      <div className="bk-topbar">
        For <strong>Business Owners</strong> Making Over $250K+ Revenue
      </div>

      <nav className="bk-nav">
        <p className="bk-nav-logo">Priceless <span className="gold">CPA</span></p>
      </nav>

      <main className="bk-main">
        <div className="bk-head">
          <p className="bk-eyebrow">Free Strategy Call</p>
          <h1 className="bk-heading bk-serif">
            Book your <span className="accent">Tax Strategy Call.</span>
          </h1>
          <p className="bk-sub">
            30 minutes with Anthony Price, CPA. We will walk through your current structure and find where money is being left on the table.
          </p>
        </div>

        <div className="bk-embed-container">
          <BookingEmbed />
        </div>

        <p className="bk-note">No obligation. 100% free. Takes 30 minutes.</p>
      </main>

      <footer className="bk-footer">
        <p className="bk-footer-logo">Priceless <span className="light">CPA</span></p>
        <p className="bk-footer-copy">&copy; Priceless CPA. All rights reserved.</p>
      </footer>
    </div>
  )
}
