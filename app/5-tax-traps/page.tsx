'use client'

import { useEffect, useRef, useState } from 'react'

const QUALIFIED_THRESHOLD = ['$150K - $500K', '$500K - $1M', '$1M - $3M', '$3M+']

const revenueOptions = [
  'Under $50K',
  '$50K - $150K',
  '$150K - $500K',
  '$500K - $1M',
  '$1M - $3M',
  '$3M+',
  'Prefer not to say',
]

const TYPO_CORRECTIONS: Record<string, string> = {
  'gmial.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gnail.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'yhaoo.com': 'yahoo.com',
  'hotmal.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'hotmial.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'outlool.com': 'outlook.com',
}

const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'yopmail.com', 'sharklasers.com', 'guerrillamailblock.com', 'grr.la',
  'dispostable.com', 'trashmail.com',
]

type Trap = {
  number: string
  title: string
  body: string
  example: string
}

const TRAPS: Trap[] = [
  {
    number: '01',
    title: 'Filing your taxes instead of planning them.',
    body: 'Your accountant shows up once a year with a number. A tax strategist shows up quarterly with a plan. If your CPA only talks to you in February and March, they are not your strategist. They are your filer. By the time they see your numbers, every decision that could have changed your bill has already been made without them.',
    example: 'A quarterly planning cadence typically surfaces $30K to $80K in legitimate savings that a filing mindset never touches.',
  },
  {
    number: '02',
    title: 'Running the wrong entity structure for your income.',
    body: 'This goes deeper than the S-Corp election. The entrepreneur who acquires a business with $400K in depreciable assets and structures it inside an S-Corp with no basis cannot take a dollar of those losses. They disappear on April 15th. The founder with the wrong holding structure cannot move assets between entities without triggering a taxable event. The operator who built everything in a single LLC is doing surgery on a running engine the moment they try to bring in a partner or sell a division.',
    example: 'Entity structure is the foundation. Get it wrong and everything built on top of it costs more.',
  },
  {
    number: '03',
    title: 'Running without a multi-year tax plan.',
    body: 'It is not about how much you pay in taxes this year. It is about your lifetime tax rate. Roth conversions belong in low-income years. Retirement plan stacking can shelter $200K+ annually when sequenced correctly. Exit planning on a $10M business needs a three-to-five-year runway, not a ninety-day sprint to close.',
    example: 'The business owner who skipped a Roth conversion in a down year missed a window that does not reopen. You are not trying to win this year. You are trying to win the whole game.',
  },
  {
    number: '04',
    title: 'Having your advisors out of sync.',
    body: 'A business owner sells a $4M company. The attorney structures it as an asset sale. The financial advisor starts mapping allocations. The CPA is not in the room. The deal closes. The owner pays ordinary rates on proceeds that a coordinated structure could have treated as capital gains.',
    example: 'Three advisors can all be technically correct and still cost you $300K to $600K. Coordination is the strategy.',
  },
  {
    number: '05',
    title: 'Ignoring real estate and business investments as a tax tool.',
    body: 'Taxes are the single largest expense most high-income earners have, larger than payroll, larger than their mortgage. Which means a tax-strategic investment can produce a better effective ROI than a higher-yield investment with no tax benefit. A business acquisition with $400K in depreciable assets generates a $400K deduction in year one, worth $160K in real cash at a 40% bracket, before the business earns a dollar.',
    example: 'A $1.2M short-term rental with cost segregation can generate $300K+ in paper losses that offset active income directly. The investors who compound wealth fastest are finding assets where the after-tax return beats everything else on the board.',
  },
]

function validateEmail(email: string): { error?: string; warning?: string; suggestion?: string } {
  const trimmed = email.trim().toLowerCase()
  if (!trimmed) return {}

  const atCount = (trimmed.match(/@/g) || []).length
  if (atCount > 1) return { error: 'Email contains multiple @ signs.' }
  if (atCount === 0) return { error: 'Email must contain an @ sign.' }

  const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!basicFormat.test(trimmed)) {
    const afterAt = trimmed.split('@')[1]
    if (afterAt && !afterAt.includes('.')) {
      return { error: 'Missing a domain extension (like .com or .net).' }
    }
    return { error: 'Please enter a valid email address.' }
  }

  const domain = trimmed.split('@')[1]
  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return { error: 'Please use a permanent email address.' }
  }
  if (TYPO_CORRECTIONS[domain]) {
    const corrected = trimmed.replace(domain, TYPO_CORRECTIONS[domain])
    return { warning: `Did you mean ${corrected}?`, suggestion: corrected }
  }

  return {}
}

const STYLES = `
  .tt-root { background: #f5f0e8; color: #1a1f2e; font-family: 'DM Sans', system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; min-height: 100vh; min-height: 100dvh; }
  .tt-root *, .tt-root *::before, .tt-root *::after { box-sizing: border-box; }
  .tt-serif { font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; }

  /* Landing shell: fills viewport, no scroll pre-submit */
  .tt-landing { flex: 1; display: flex; flex-direction: column; }

  /* Top bar */
  .tt-topbar { background: #1a1f2e; color: #d4b27a; text-align: center; padding: 8px 16px; font-size: 11.5px; letter-spacing: 0.4px; flex-shrink: 0; }
  .tt-topbar strong { color: #f5f0e8; font-weight: 600; }

  /* Nav */
  .tt-nav { padding: 14px 24px; display: flex; justify-content: center; flex-shrink: 0; }
  .tt-nav-logo { font-size: 20px; color: #1a1f2e; letter-spacing: 0.5px; margin: 0; font-family: 'DM Serif Display', Georgia, serif; }
  .tt-nav-logo .gold { color: #b8935a; font-style: italic; }

  /* Container */
  .tt-container { max-width: 780px; margin: 0 auto; padding: 0 24px; }
  .tt-narrow { max-width: 640px; margin: 0 auto; padding: 0 24px; }

  /* Landing grid (two-column desktop, stacked mobile) */
  .tt-landing-grid { flex: 1; display: grid; grid-template-columns: 1.05fr 1fr; gap: 56px; align-items: center; padding: 32px 40px 40px; max-width: 1180px; margin: 0 auto; width: 100%; }

  /* Hero column */
  .tt-hero-col { text-align: left; max-width: 540px; }
  .tt-pill { display: inline-block; background: rgba(184, 147, 90, 0.12); border: 1px solid rgba(184, 147, 90, 0.3); border-radius: 100px; padding: 7px 16px; font-size: 11.5px; color: #8a6a3d; letter-spacing: 1px; text-transform: uppercase; font-weight: 600; margin-bottom: 20px; }
  .tt-h1 { font-size: clamp(2rem, 4.2vw, 3.1rem); line-height: 1.1; color: #1a1f2e; margin: 0 0 18px; letter-spacing: -0.01em; }
  .tt-h1 .accent { color: #b8935a; font-style: italic; }
  .tt-sub { font-size: 1.02rem; color: #6b6760; line-height: 1.55; margin: 0 0 28px; }

  /* Stats row */
  .tt-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 22px 0 0; border-top: 1px solid rgba(26, 31, 46, 0.1); max-width: 480px; }
  .tt-stat-num { font-family: 'DM Serif Display', Georgia, serif; font-size: 1.6rem; color: #1a1f2e; line-height: 1; margin: 0 0 5px; }
  .tt-stat-num .accent { color: #b8935a; }
  .tt-stat-label { font-size: 0.72rem; color: #9a9590; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; margin: 0; }

  /* Form card (pre-submit, in-grid) */
  .tt-form-card { background: #ffffff; border: 1px solid rgba(184, 147, 90, 0.18); border-radius: 20px; padding: 32px 32px; box-shadow: 0 12px 40px rgba(26, 31, 46, 0.08); width: 100%; max-width: 460px; justify-self: end; }
  .tt-form-head { text-align: left; margin-bottom: 20px; }
  .tt-form-eyebrow { font-size: 0.72rem; color: #b8935a; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; margin: 0 0 8px; }
  .tt-form-title { font-family: 'DM Serif Display', Georgia, serif; font-size: 1.4rem; color: #1a1f2e; margin: 0 0 6px; line-height: 1.2; }
  .tt-form-note { font-size: 0.85rem; color: #9a9590; margin: 0; }
  .tt-form { display: flex; flex-direction: column; gap: 14px; }
  .tt-row { display: flex; flex-direction: column; gap: 14px; }
  .tt-field { display: flex; flex-direction: column; gap: 5px; }
  .tt-label { font-size: 0.72rem; color: #1a1f2e; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 600; }
  .tt-input { padding: 13px 16px; border: 1px solid rgba(26, 31, 46, 0.14); border-radius: 10px; font-size: 16px; background: #ffffff; color: #1a1f2e; font-family: 'DM Sans', system-ui, sans-serif; outline: none; transition: border-color 0.2s, box-shadow 0.2s; width: 100%; -webkit-appearance: none; appearance: none; }
  .tt-input:focus { border-color: #b8935a; box-shadow: 0 0 0 3px rgba(184, 147, 90, 0.12); }
  .tt-input.error { border-color: #c44a4a; }
  .tt-input.warning { border-color: #b8935a; }
  .tt-input::placeholder { color: #b9b4ad; }
  .tt-select-wrap { position: relative; }
  .tt-select-wrap::after { content: ''; position: absolute; right: 18px; top: 50%; width: 10px; height: 10px; border-right: 1.5px solid #9a9590; border-bottom: 1.5px solid #9a9590; transform: translateY(-70%) rotate(45deg); pointer-events: none; }
  .tt-btn { margin-top: 4px; padding: 15px 28px; background: #b8935a; color: #ffffff; border: none; border-radius: 100px; font-size: 0.98rem; font-weight: 600; font-family: 'DM Sans', system-ui, sans-serif; cursor: pointer; width: 100%; letter-spacing: 0.3px; box-shadow: 0 4px 16px rgba(184, 147, 90, 0.25); transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }
  .tt-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(184, 147, 90, 0.35); background: #c9a46a; }
  .tt-btn:disabled { opacity: 0.65; cursor: default; }
  .tt-btn-arrow { width: 16px; height: 16px; transition: transform 0.15s ease; }
  .tt-btn:hover:not(:disabled) .tt-btn-arrow { transform: translateX(3px); }
  .tt-field-error { font-size: 0.82rem; color: #c44a4a; margin: 2px 0 0; }
  .tt-field-warning { font-size: 0.82rem; color: #8a6a3d; margin: 2px 0 0; }
  .tt-fix-btn { background: none; border: none; color: #b8935a; font-weight: 600; cursor: pointer; padding: 0; font-size: 0.82rem; font-family: inherit; text-decoration: underline; }
  .tt-security { margin-top: 14px; font-size: 0.76rem; color: #9a9590; text-align: center; }
  .tt-error-banner { margin-top: 16px; padding: 14px 16px; border-radius: 12px; background: #fdf0f0; border: 1px solid #f0cfcf; color: #9a3a3a; font-size: 0.9rem; }

  /* Reveal */
  .tt-reveal { padding: 72px 0 48px; animation: fadeUp 0.6s ease; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .tt-reveal-head { text-align: center; margin-bottom: 44px; }
  .tt-reveal-eyebrow { font-size: 0.78rem; color: #b8935a; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; margin: 0 0 12px; }
  .tt-reveal-heading { font-family: 'DM Serif Display', Georgia, serif; font-size: clamp(1.8rem, 4vw, 2.5rem); line-height: 1.2; color: #1a1f2e; margin: 0 0 12px; }
  .tt-reveal-heading .accent { color: #b8935a; font-style: italic; }
  .tt-reveal-sub { font-size: 1rem; color: #6b6760; margin: 0; max-width: 520px; margin-left: auto; margin-right: auto; line-height: 1.6; }

  /* Trap card */
  .tt-trap { background: #ffffff; border: 1px solid rgba(184, 147, 90, 0.18); border-radius: 16px; padding: 32px 36px; margin-bottom: 20px; box-shadow: 0 4px 20px rgba(26, 31, 46, 0.04); display: grid; grid-template-columns: auto 1fr; gap: 28px; }
  .tt-trap-num { font-family: 'DM Serif Display', Georgia, serif; font-size: 2.4rem; color: rgba(184, 147, 90, 0.35); line-height: 1; padding-top: 4px; }
  .tt-trap-title { font-family: 'DM Serif Display', Georgia, serif; font-size: 1.35rem; color: #1a1f2e; line-height: 1.3; margin: 0 0 14px; font-weight: 400; }
  .tt-trap-body { font-size: 0.98rem; color: #6b6760; line-height: 1.7; margin: 0 0 16px; }
  .tt-trap-example { background: rgba(184, 147, 90, 0.08); border-left: 3px solid #b8935a; padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #5a5550; line-height: 1.55; font-style: italic; margin: 0; }

  /* Qualified CTA */
  .tt-cta-dark { background: #1a1f2e; color: #f5f0e8; border-radius: 20px; padding: 56px 44px; margin-top: 40px; text-align: center; box-shadow: 0 12px 40px rgba(26, 31, 46, 0.18); }
  .tt-cta-eyebrow { font-size: 0.78rem; color: #d4b27a; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; margin: 0 0 16px; }
  .tt-cta-h { font-family: 'DM Serif Display', Georgia, serif; font-size: clamp(1.6rem, 3.5vw, 2.2rem); line-height: 1.2; margin: 0 0 16px; color: #f5f0e8; }
  .tt-cta-h .accent { color: #d4b27a; font-style: italic; }
  .tt-cta-sub { font-size: 1rem; color: #a8a39c; line-height: 1.65; max-width: 460px; margin: 0 auto 28px; }
  .tt-cta-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 17px 36px; background: #b8935a; color: #ffffff; border-radius: 100px; font-size: 1rem; font-weight: 600; text-decoration: none; letter-spacing: 0.3px; box-shadow: 0 6px 24px rgba(184, 147, 90, 0.4); transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease; }
  .tt-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(184, 147, 90, 0.5); background: #c9a46a; }
  .tt-cta-note { margin-top: 18px; font-size: 0.82rem; color: #7a756e; }
  .tt-booking-wrap { background: #ffffff; border-radius: 16px; overflow: hidden; margin: 8px 0 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.25); }
  .tt-booking-iframe { width: 100%; min-height: 1400px; border: 0; display: block; background: #ffffff; }

  /* Soft CTA (unqualified) */
  .tt-cta-soft { background: #ffffff; border: 1px solid rgba(184, 147, 90, 0.2); border-radius: 20px; padding: 44px 40px; margin-top: 40px; text-align: center; box-shadow: 0 4px 20px rgba(26, 31, 46, 0.04); }
  .tt-cta-soft-h { font-family: 'DM Serif Display', Georgia, serif; font-size: 1.6rem; color: #1a1f2e; margin: 0 0 14px; line-height: 1.25; }
  .tt-cta-soft-h .accent { color: #b8935a; font-style: italic; }
  .tt-cta-soft-sub { font-size: 0.98rem; color: #6b6760; line-height: 1.65; margin: 0 auto 24px; max-width: 440px; }

  /* Footer */
  .tt-footer { background: #1a1f2e; color: #7a756e; padding: 48px 24px 36px; margin-top: 80px; text-align: center; }
  .tt-footer-logo { font-family: 'DM Serif Display', Georgia, serif; font-size: 20px; color: #d4b27a; margin: 0 0 10px; }
  .tt-footer-logo .light { color: #f5f0e8; font-style: italic; }
  .tt-footer-line { font-size: 0.85rem; line-height: 1.7; margin: 0; }
  .tt-footer-line strong { color: #d4b27a; font-weight: 500; }
  .tt-footer-copy { font-size: 0.75rem; color: #4a4540; margin: 22px 0 0; }

  /* Tablet/mobile: stack grid, compact everything */
  @media (max-width: 900px) {
    .tt-landing-grid { grid-template-columns: 1fr; gap: 24px; padding: 20px 20px 24px; max-width: 560px; align-items: start; }
    .tt-hero-col { max-width: none; text-align: center; margin: 0 auto; }
    .tt-stats { margin: 0 auto; }
    .tt-form-card { justify-self: stretch; max-width: none; padding: 26px 24px; }
    .tt-form-head { text-align: center; }
    .tt-reveal { padding: 56px 0 32px; }
    .tt-trap { padding: 26px 24px; gap: 18px; grid-template-columns: 1fr; }
    .tt-trap-num { font-size: 1.8rem; padding: 0; }
    .tt-trap-title { font-size: 1.2rem; margin-bottom: 12px; }
    .tt-trap-body { font-size: 0.95rem; }
    .tt-cta-dark { padding: 44px 28px; }
    .tt-cta-soft { padding: 36px 24px; }
    .tt-cta-btn { width: 100%; }
    .tt-booking-iframe { min-height: 1300px; }
    .tt-footer { padding: 32px 20px 24px; margin-top: 40px; }
  }
  @media (max-width: 560px) {
    .tt-topbar { font-size: 10.5px; padding: 7px 14px; }
    .tt-nav { padding: 12px 20px; }
    .tt-nav-logo { font-size: 18px; }
    .tt-landing-grid { gap: 20px; padding: 16px 16px 20px; }
    .tt-pill { font-size: 10.5px; padding: 6px 13px; margin-bottom: 14px; }
    .tt-h1 { font-size: clamp(1.55rem, 7vw, 2.1rem); line-height: 1.12; margin-bottom: 12px; }
    .tt-sub { font-size: 0.95rem; line-height: 1.5; margin-bottom: 18px; }
    .tt-stats { gap: 14px; padding-top: 16px; max-width: 420px; }
    .tt-stat-num { font-size: 1.25rem; }
    .tt-stat-label { font-size: 0.65rem; letter-spacing: 0.05em; }
    .tt-form-card { padding: 22px 20px; border-radius: 16px; }
    .tt-form-title { font-size: 1.2rem; }
    .tt-form-note { font-size: 0.78rem; }
    .tt-form { gap: 12px; }
    .tt-row { grid-template-columns: 1fr; gap: 12px; }
    .tt-input { padding: 12px 14px; }
    .tt-btn { padding: 13px 24px; font-size: 0.95rem; }
    .tt-reveal-head { margin-bottom: 28px; }
    .tt-trap { padding: 22px 20px; border-radius: 14px; }
    .tt-trap-example { font-size: 0.85rem; padding: 10px 14px; }
    .tt-cta-dark { padding: 32px 20px; border-radius: 16px; }
    .tt-cta-soft { padding: 28px 20px; border-radius: 16px; }
    .tt-cta-sub { font-size: 0.9rem; }
    .tt-container, .tt-narrow { padding: 0 16px; }
  }

  /* Short viewports: further tighten hero so form still fits */
  @media (max-height: 760px) and (min-width: 901px) {
    .tt-landing-grid { padding: 20px 40px 28px; gap: 40px; }
    .tt-h1 { font-size: clamp(1.8rem, 3.4vw, 2.6rem); margin-bottom: 14px; }
    .tt-sub { margin-bottom: 20px; font-size: 0.96rem; }
    .tt-stats { padding-top: 16px; }
    .tt-stat-num { font-size: 1.3rem; }
    .tt-form-card { padding: 26px 28px; }
  }
`

export default function FiveTaxTrapsPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', revenue: '' })
  const [utm, setUtm] = useState({
    source: '5-tax-traps',
    medium: 'lead-magnet',
    campaign: '5-tax-traps',
    content: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailWarning, setEmailWarning] = useState('')
  const [emailSuggestion, setEmailSuggestion] = useState('')
  const [revenueError, setRevenueError] = useState('')
  const [qualified, setQualified] = useState(false)
  const [bookingHeight, setBookingHeight] = useState(1400)
  const [bookingSrc, setBookingSrc] = useState('https://api.leadconnectorhq.com/widget/bookings/anthony-price-personal-calendar')
  const revealRef = useRef<HTMLDivElement>(null)

  function validatePhone(value: string): string {
    const digits = value.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 11) return 'Please enter a valid 10-digit phone number.'
    if (digits.length === 11 && !digits.startsWith('1')) return 'Please enter a valid US phone number.'
    return ''
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setUtm({
      source: params.get('utm_source') || '5-tax-traps',
      medium: params.get('utm_medium') || 'lead-magnet',
      campaign: params.get('utm_campaign') || '5-tax-traps',
      content: params.get('utm_content') || '',
    })
  }, [])

  // Auto-resize the GHL booking iframe based on postMessage events it broadcasts.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== 'string' || !e.origin.includes('leadconnectorhq.com')) return
      const data = e.data
      if (!data || typeof data !== 'object') return
      // GHL broadcasts { type: 'iframeHeight' | 'setHeight' | ..., height: number }
      const height = typeof data.height === 'number' ? data.height : Number(data.height)
      if (!Number.isFinite(height) || height < 400) return
      setBookingHeight(Math.ceil(height) + 40)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    if (status === 'success' && revealRef.current) {
      revealRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [status])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const phoneErr = validatePhone(form.phone)
    if (phoneErr) { setPhoneError(phoneErr); return }

    const emailResult = validateEmail(form.email)
    if (emailResult.error) {
      setEmailError(emailResult.error); setEmailWarning(''); setEmailSuggestion(''); return
    }
    if (emailResult.warning) {
      setEmailWarning(emailResult.warning); setEmailSuggestion(emailResult.suggestion || ''); setEmailError(''); return
    }

    if (!form.revenue) { setRevenueError('Please select your annual revenue.'); return }

    // Reveal instantly. Fire lead capture in the background with keepalive so delivery is guaranteed
    // even if the browser is navigating. This is the same pattern beacons use.
    setErrorMsg('')

    // Pre-fill the GHL booking widget with the data we already captured
    const nameParts = form.name.trim().split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // Format phone as E.164 (+1XXXXXXXXXX) so GHL's intl-tel-input parses it.
    const digits = form.phone.replace(/\D/g, '')
    const e164 = digits.length === 10 ? `+1${digits}` : digits.length === 11 ? `+${digits}` : ''

    const bookingParams = new URLSearchParams({
      first_name: firstName,
      last_name: lastName,
      email: form.email,
      phone: e164,
    })
    setBookingSrc(`https://api.leadconnectorhq.com/widget/bookings/anthony-price-personal-calendar?${bookingParams.toString()}`)

    setQualified(QUALIFIED_THRESHOLD.includes(form.revenue))
    setStatus('success')

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, ...utm }),
      keepalive: true,
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          console.error('Lead capture failed:', res.status, data)
        }
      })
      .catch((err) => {
        console.error('Lead capture error:', err)
      })
  }

  const isRevealed = status === 'success'

  return (
    <div className="tt-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="tt-topbar">
          For <strong>Serial Entrepreneurs</strong> at $250K+ Revenue
        </div>

        <nav className="tt-nav">
          <p className="tt-nav-logo">Priceless <span className="gold">CPA</span></p>
        </nav>

        {!isRevealed && (
          <div className="tt-landing">
            <div className="tt-landing-grid">
              <div className="tt-hero-col">
                <span className="tt-pill">Free Guide · 5 Traps Inside</span>
                <h1 className="tt-h1 tt-serif">
                  5 Tax Traps Your Accountant Is <span className="accent">Missing.</span>
                </h1>
                <p className="tt-sub">
                  The same 5 traps cost serial entrepreneurs $20K to $200K every year. Your accountant files. A strategist plans.
                </p>

                <div className="tt-stats">
                  <div>
                    <p className="tt-stat-num tt-serif"><span className="accent">$20K+</span></p>
                    <p className="tt-stat-label">Avg Savings</p>
                  </div>
                  <div>
                    <p className="tt-stat-num tt-serif">5</p>
                    <p className="tt-stat-label">Traps</p>
                  </div>
                  <div>
                    <p className="tt-stat-num tt-serif">30s</p>
                    <p className="tt-stat-label">To Unlock</p>
                  </div>
                </div>
              </div>

              <div className="tt-form-card">
                <div className="tt-form-head">
                  <p className="tt-form-eyebrow">Unlock The Guide</p>
                  <h2 className="tt-form-title tt-serif">Get the 5 traps instantly.</h2>
                  <p className="tt-form-note">Fill this out and we will reveal all 5 on the next screen.</p>
                </div>

                <form onSubmit={handleSubmit} className="tt-form">
                  <div className="tt-field">
                    <label className="tt-label">Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="tt-input"
                    />
                  </div>

                  <div className="tt-row">
                    <div className="tt-field">
                      <label className="tt-label">Phone</label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value })
                          if (phoneError) setPhoneError('')
                        }}
                        onBlur={() => { if (form.phone) setPhoneError(validatePhone(form.phone)) }}
                        className={`tt-input ${phoneError ? 'error' : ''}`}
                      />
                      {phoneError && <p className="tt-field-error">{phoneError}</p>}
                    </div>

                    <div className="tt-field">
                      <label className="tt-label">Email</label>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        required
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value })
                          if (emailError) setEmailError('')
                          if (emailWarning) { setEmailWarning(''); setEmailSuggestion('') }
                        }}
                        onBlur={() => {
                          if (form.email) {
                            const result = validateEmail(form.email)
                            setEmailError(result.error || '')
                            setEmailWarning(result.warning || '')
                            setEmailSuggestion(result.suggestion || '')
                          }
                        }}
                        className={`tt-input ${emailError ? 'error' : ''} ${emailWarning ? 'warning' : ''}`}
                      />
                      {emailError && <p className="tt-field-error">{emailError}</p>}
                      {emailWarning && (
                        <p className="tt-field-warning">
                          {emailWarning}{' '}
                          <button
                            type="button"
                            onClick={() => {
                              setForm({ ...form, email: emailSuggestion })
                              setEmailWarning(''); setEmailSuggestion('')
                            }}
                            className="tt-fix-btn"
                          >
                            Yes, fix it
                          </button>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="tt-field">
                    <label className="tt-label">Estimated Annual Revenue</label>
                    <div className="tt-select-wrap">
                      <select
                        value={form.revenue}
                        onChange={(e) => { setForm({ ...form, revenue: e.target.value }); setRevenueError('') }}
                        onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault() }}
                        className={`tt-input ${revenueError ? 'error' : ''}`}
                        style={{ color: form.revenue ? '#1a1f2e' : '#b9b4ad', paddingRight: 44 }}
                      >
                        <option value="" disabled>Select your annual revenue</option>
                        {revenueOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    {revenueError && <p className="tt-field-error">{revenueError}</p>}
                  </div>

                  <button type="submit" disabled={status === 'sending'} className="tt-btn">
                    {status === 'sending' ? 'Unlocking...' : 'Show Me The 5 Traps'}
                    {status !== 'sending' && (
                      <svg className="tt-btn-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </form>

                <p className="tt-security">Your information is secure and will never be shared.</p>

                {errorMsg && <p className="tt-error-banner">{errorMsg}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Reveal */}
        {isRevealed && (
          <section className="tt-reveal" ref={revealRef}>
            <div className="tt-narrow">
              <div className="tt-reveal-head">
                <p className="tt-reveal-eyebrow">The 5 Traps</p>
                <h2 className="tt-reveal-heading">
                  Here are the <span className="accent">5 traps.</span>
                </h2>
                <p className="tt-reveal-sub">
                  Read them once. You will see your own situation in at least three of them.
                </p>
              </div>

              {TRAPS.map((trap) => (
                <article key={trap.number} className="tt-trap">
                  <div className="tt-trap-num">{trap.number}</div>
                  <div>
                    <h3 className="tt-trap-title">{trap.title}</h3>
                    <p className="tt-trap-body">{trap.body}</p>
                    <p className="tt-trap-example">{trap.example}</p>
                  </div>
                </article>
              ))}

              {qualified && (
                <div className="tt-cta-dark">
                  <p className="tt-cta-eyebrow">You Qualify</p>
                  <h3 className="tt-cta-h">
                    Let&apos;s build your <span className="accent">proactive plan.</span>
                  </h3>
                  <p className="tt-cta-sub">
                    Book a free 30-minute Tax Strategy Call below. We will walk through which of these 5 traps is costing you the most, and what a proactive plan would look like for your business.
                  </p>
                  <div className="tt-booking-wrap">
                    <iframe
                      src={bookingSrc}
                      title="Book a Tax Strategy Call"
                      className="tt-booking-iframe"
                      style={{ height: `${bookingHeight}px` }}
                      scrolling="no"
                    />
                  </div>
                  <p className="tt-cta-note">No obligation. 100% free. Takes 30 minutes.</p>
                </div>
              )}

              {!qualified && (
                <div className="tt-cta-soft">
                  <p className="tt-form-eyebrow">Keep Going</p>
                  <h3 className="tt-cta-soft-h tt-serif">
                    You are <span className="accent">earlier</span> in the journey.
                  </h3>
                  <p className="tt-cta-soft-sub">
                    Our 1-on-1 Tax Strategy Calls are built for entrepreneurs at $150K+ in revenue. Grab our free CPA audit tool so you know exactly what to ask your current accountant.
                  </p>
                  <a href="/tax-checklist" className="tt-cta-btn">
                    Get the Free CPA Audit
                    <svg className="tt-btn-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        <footer className="tt-footer">
          <p className="tt-footer-logo">Priceless <span className="light">CPA</span></p>
          <p className="tt-footer-line">
            Built by <strong>Anthony Price, CPA</strong>. We work with serial entrepreneurs running $250K to $50M across multiple entities.
          </p>
          <p className="tt-footer-copy">© Priceless CPA. All rights reserved.</p>
        </footer>
    </div>
  )
}
