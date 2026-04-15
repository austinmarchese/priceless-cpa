'use client'

import { Suspense, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

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

export default function GHLPage() {
  return (
    <Suspense>
      <GHLForm />
    </Suspense>
  )
}

function CustomSelect({ value, onChange, options, placeholder }: {
  value: string
  onChange: (val: string) => void
  options: string[]
  placeholder: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="custom-select-wrap">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="custom-select-trigger"
        style={{ color: value ? '#1a1a1a' : '#999' }}
      >
        <span>{value || placeholder}</span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M1 1l5 5 5-5" stroke="#999" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <div className="custom-select-dropdown">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`custom-select-option ${opt === value ? 'selected' : ''}`}
              onClick={() => { onChange(opt); setOpen(false) }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function GHLForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState({ name: '', phone: '', email: '', revenue: '' })
  const [utm, setUtm] = useState({ source: '', medium: '', campaign: '', content: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailWarning, setEmailWarning] = useState('')
  const [emailSuggestion, setEmailSuggestion] = useState('')
  const [qualified, setQualified] = useState(false)
  const [revenueError, setRevenueError] = useState('')

  function validatePhone(value: string): string {
    const digits = value.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 11) return 'Please enter a valid 10-digit phone number.'
    if (digits.length === 11 && !digits.startsWith('1')) return 'Please enter a valid US phone number.'
    return ''
  }

  useEffect(() => {
    setUtm({
      source: searchParams.get('utm_source') || 'organic',
      medium: searchParams.get('utm_medium') || 'social',
      campaign: searchParams.get('utm_campaign') || '',
      content: searchParams.get('utm_content') || '',
    })
  }, [searchParams])

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

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ...utm }),
      })

      const data = await res.json()
      if (res.ok) {
        setQualified(QUALIFIED_THRESHOLD.includes(form.revenue))
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error')
    }
  }

  if (status === 'success') {
    if (qualified) {
      return (
        <div className="ghl-page">
          <div className="ghl-card">
            <p className="ghl-logo"><span className="gold">Priceless</span> CPA</p>
            <div className="ghl-content">
              <p className="ghl-badge">YOU QUALIFY</p>
              <h1 className="ghl-heading">
                Let&apos;s find your<br />
                <span className="ghl-accent">savings.</span>
              </h1>
              <p className="ghl-sub">
                Based on your revenue, you may be overpaying in taxes.<br />
                Book a free strategy call to find out how much.
              </p>
              <a href="https://calendly.com/pricelesscpa/intro" target="_blank" rel="noopener noreferrer" className="ghl-btn">
                Book My Free Strategy Call →
              </a>
              <p className="ghl-security" style={{ marginTop: 24 }}>
                No obligation. 100% free. Takes 15 minutes.
              </p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="ghl-page">
        <div className="ghl-card">
          <p className="ghl-logo"><span className="gold">Priceless</span> CPA</p>
          <div className="ghl-content">
            <p className="ghl-badge">ALL SET</p>
            <h1 className="ghl-heading">
              We&apos;ll be in touch<br />
              <span className="ghl-accent">shortly.</span>
            </h1>
            <p className="ghl-sub">Check your email for your personalized savings estimate.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <style>{`
        .ghl-page {
          min-height: 100vh;
          min-height: 100dvh;
          background: #f5f0eb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: Georgia, "Times New Roman", serif;
          box-sizing: border-box;
        }
        .ghl-card {
          max-width: 560px;
          width: 100%;
          text-align: center;
        }
        .ghl-logo {
          font-size: 20px;
          font-weight: 400;
          color: #a0937e;
          letter-spacing: 1px;
          font-family: Georgia, "Times New Roman", serif;
          margin: 0;
        }
        .ghl-logo .gold { color: #b8960c; }
        .ghl-content { margin-top: 80px; }
        .ghl-badge {
          font-size: 11px;
          letter-spacing: 4px;
          color: #a0937e;
          margin-bottom: 20px;
          font-family: system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        .ghl-heading {
          font-size: 40px;
          font-weight: 400;
          line-height: 1.15;
          color: #1a1a1a;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }
        .ghl-accent {
          font-style: italic;
          color: #b8960c;
        }
        .ghl-sub {
          font-size: 16px;
          color: #888;
          margin-bottom: 40px;
          font-family: system-ui, -apple-system, sans-serif;
          line-height: 1.5;
        }
        .ghl-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }
        .ghl-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }
        .ghl-label {
          font-size: 14px;
          color: #666;
          font-family: system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        .ghl-input {
          padding: 18px 20px;
          border: 1px solid #e0dbd4;
          border-radius: 12px;
          font-size: 16px;
          background: white;
          font-family: system-ui, -apple-system, sans-serif;
          outline: none;
          transition: border-color 0.2s;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          width: 100%;
          box-sizing: border-box;
          -webkit-appearance: none;
        }
        .ghl-input:focus {
          border-color: #b8960c;
        }
        .ghl-input.error { border-color: #991b1b; }
        .ghl-input.warning { border-color: #b8960c; }
        .ghl-btn {
          margin-top: 12px;
          padding: 20px 32px;
          background: linear-gradient(135deg, #c9a84c 0%, #b8960c 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 600;
          font-family: system-ui, -apple-system, sans-serif;
          text-decoration: none;
          display: block;
          text-align: center;
          box-shadow: 0 2px 8px rgba(184, 150, 12, 0.25);
          letter-spacing: 0.3px;
          cursor: pointer;
          width: 100%;
          box-sizing: border-box;
        }
        .ghl-btn:disabled { opacity: 0.7; cursor: default; }
        .ghl-security {
          margin-top: 20px;
          font-size: 13px;
          color: #a0937e;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .ghl-field-error {
          font-size: 13px;
          color: #991b1b;
          margin-top: 4px;
          text-align: left;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .ghl-field-warning {
          font-size: 13px;
          color: #92700c;
          margin-top: 4px;
          text-align: left;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .ghl-fix-btn {
          background: none;
          border: none;
          color: #b8960c;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-size: 13px;
          font-family: system-ui, -apple-system, sans-serif;
          text-decoration: underline;
        }
        .ghl-error-banner {
          margin-top: 16px;
          padding: 14px;
          border-radius: 12px;
          background: #fef2f2;
          color: #991b1b;
          font-size: 14px;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .ghl-disclaimer {
          margin-top: 32px;
          font-size: 12px;
          color: #bfb8ad;
          line-height: 1.6;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Custom select */
        .custom-select-wrap {
          position: relative;
          z-index: 10;
        }
        .custom-select-trigger {
          padding: 18px 20px;
          border: 1px solid #e0dbd4;
          border-radius: 12px;
          font-size: 16px;
          background: white;
          font-family: system-ui, -apple-system, sans-serif;
          outline: none;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          width: 100%;
          box-sizing: border-box;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          transition: border-color 0.2s;
        }
        .custom-select-trigger:focus {
          border-color: #b8960c;
        }
        .custom-select-wrap.error .custom-select-trigger {
          border-color: #991b1b;
        }
        .custom-select-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #e0dbd4;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          z-index: 50;
          overflow: hidden;
          animation: fadeIn 0.15s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .custom-select-option {
          display: block;
          width: 100%;
          padding: 14px 20px;
          border: none;
          background: none;
          font-size: 16px;
          font-family: system-ui, -apple-system, sans-serif;
          color: #1a1a1a;
          cursor: pointer;
          text-align: left;
          transition: background 0.1s;
        }
        .custom-select-option:hover {
          background: #f5f0eb;
        }
        .custom-select-option.selected {
          background: #f5f0eb;
          color: #b8960c;
          font-weight: 500;
        }
        .custom-select-option + .custom-select-option {
          border-top: 1px solid #f0ece7;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .ghl-page { padding: 24px 16px; align-items: flex-start; padding-top: 40px; }
          .ghl-content { margin-top: 48px; }
          .ghl-heading { font-size: 32px; }
          .ghl-sub { font-size: 15px; margin-bottom: 32px; }
          .ghl-input, .custom-select-trigger { padding: 16px 16px; font-size: 16px; }
          .ghl-btn { padding: 18px 24px; font-size: 16px; }
          .custom-select-option { padding: 14px 16px; }
        }
      `}</style>
      <div className="ghl-page">
        <div className="ghl-card">
          <p className="ghl-logo"><span className="gold">Priceless</span> CPA</p>

          <div className="ghl-content">
            <p className="ghl-badge">ALMOST THERE</p>
            <h1 className="ghl-heading">
              Where should we send your<br />
              <span className="ghl-accent">results?</span>
            </h1>
            <p className="ghl-sub">Step 1 of 2 — see your personalized savings estimate</p>
          </div>

          <form onSubmit={handleSubmit} className="ghl-form">
            <div className="ghl-field">
              <label className="ghl-label">Full Name</label>
              <input
                type="text"
                placeholder="John Smith"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="ghl-input"
              />
            </div>

            <div className="ghl-field">
              <label className="ghl-label">Phone</label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                required
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value })
                  if (phoneError) setPhoneError('')
                }}
                onBlur={() => {
                  if (form.phone) setPhoneError(validatePhone(form.phone))
                }}
                className={`ghl-input ${phoneError ? 'error' : ''}`}
              />
              {phoneError && <p className="ghl-field-error">{phoneError}</p>}
            </div>

            <div className="ghl-field">
              <label className="ghl-label">Email</label>
              <input
                type="email"
                placeholder="john@company.com"
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
                className={`ghl-input ${emailError ? 'error' : ''} ${emailWarning ? 'warning' : ''}`}
              />
              {emailError && <p className="ghl-field-error">{emailError}</p>}
              {emailWarning && (
                <p className="ghl-field-warning">
                  {emailWarning}{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ ...form, email: emailSuggestion })
                      setEmailWarning(''); setEmailSuggestion('')
                    }}
                    className="ghl-fix-btn"
                  >
                    Yes, fix it
                  </button>
                </p>
              )}
            </div>

            <div className="ghl-field">
              <label className="ghl-label">Estimated Annual Revenue</label>
              <select
                value={form.revenue}
                onChange={(e) => { setForm({ ...form, revenue: e.target.value }); setRevenueError('') }}
                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault() }}
                className={`ghl-input ${revenueError ? 'error' : ''}`}
                style={{ color: form.revenue ? '#1a1a1a' : '#999', appearance: 'none', WebkitAppearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23999\' stroke-width=\'1.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center' }}
              >
                <option value="" disabled>Select your annual revenue</option>
                {revenueOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {revenueError && <p className="ghl-field-error">{revenueError}</p>}
            </div>

            <button type="submit" disabled={status === 'sending'} className="ghl-btn">
              {status === 'sending' ? 'Sending...' : 'See My Savings Estimate →'}
            </button>
          </form>

          <p className="ghl-security">Your information is secure and will never be shared.</p>

          {errorMsg && <p className="ghl-error-banner">{errorMsg}</p>}

          <p className="ghl-disclaimer">
            The savings estimate you&apos;ll receive is based on data from business owners at a similar
            revenue level. It is not a guarantee of results. Individual savings depend on your specific
            financial situation, business structure, and other factors.
          </p>
        </div>
      </div>
    </>
  )
}
