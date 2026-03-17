'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type QuestionnaireAnswers = {
  businessType: string
  entityCount: string
  income: string
  realEstate: string
  frustration: string
  email: string
  name: string
}

const questions = [
  {
    id: 'businessType',
    question: 'What best describes your situation?',
    options: [
      { value: 'multiple', label: 'I run multiple businesses' },
      { value: 'business-re', label: 'I built a business and invest in real estate' },
      { value: 'real-estate', label: 'Primarily real estate investor' },
      { value: 'scaling', label: 'Single business, scaling fast' },
    ],
  },
  {
    id: 'entityCount',
    question: 'How many entities are you currently managing?',
    options: [
      { value: '1-2', label: '1-2 entities' },
      { value: '3-5', label: '3-5 entities' },
      { value: '6+', label: '6+ entities' },
      { value: 'complicated', label: "It's complicated" },
    ],
  },
  {
    id: 'income',
    question: 'Approximate annual income across all sources?',
    options: [
      { value: '250-500k', label: '$250K - $500K' },
      { value: '500k-1m', label: '$500K - $1M' },
      { value: '1m-3m', label: '$1M - $3M' },
      { value: '3m+', label: '$3M+' },
    ],
  },
  {
    id: 'realEstate',
    question: 'Do you have real estate investments alongside your business?',
    options: [
      { value: 'multiple', label: 'Yes, multiple properties' },
      { value: 'few', label: 'Yes, a few' },
      { value: 'planning', label: 'Not yet, but planning to' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'frustration',
    question: "What's your biggest frustration with your current tax setup?",
    options: [
      { value: 'reactive', label: 'My CPA is reactive, not proactive' },
      { value: 'modern', label: "They don't understand modern business" },
      { value: 'structure', label: "I'm not sure I'm structured optimally" },
      { value: 'money', label: "I feel like I'm leaving money on the table" },
      { value: 'all', label: 'All of the above' },
    ],
  },
]

// Questions to ask CPA based on profile
const baseQuestions = [
  {
    id: 'proactive',
    question: "What tax planning conversations have you initiated with me this year?",
    why: "A proactive CPA reaches out before deadlines, not after. If they only talk to you at tax time, you're getting compliance, not strategy.",
    forProfiles: ['all'],
  },
  {
    id: 'strategies',
    question: "What strategies did you implement this year that reduced my tax liability?",
    why: "Your CPA should be able to point to specific moves they made—not just filing your return accurately.",
    forProfiles: ['all'],
  },
  {
    id: 'projection',
    question: "What's my projected tax liability for this year, and what's the plan to minimize it?",
    why: "If they can't give you a number and a plan, they're not doing strategic planning.",
    forProfiles: ['all'],
  },
  {
    id: 'entity',
    question: "Is my current entity structure still optimal, or should we restructure?",
    why: "Entity structure should evolve as you grow. What worked at $300K might be costing you at $1M+.",
    forProfiles: ['all'],
  },
  {
    id: 'scorp',
    question: "Am I paying myself the optimal salary from my S-corp?",
    why: "Too high = excess payroll tax. Too low = audit risk. The right number saves thousands.",
    forProfiles: ['all'],
  },
  {
    id: 'retirement',
    question: "What retirement vehicles should I be using to reduce taxable income?",
    why: "Solo 401(k), SEP IRA, defined benefit plans—each has different limits and benefits based on your situation.",
    forProfiles: ['all'],
  },
  {
    id: 'qbi',
    question: "Am I maximizing my QBI (Qualified Business Income) deduction?",
    why: "The 20% QBI deduction has income limits and rules that vary by business type. Are you getting the full benefit?",
    forProfiles: ['all'],
  },
  // Real estate specific
  {
    id: 'costSeg',
    question: "Have you done a cost segregation study on my properties?",
    why: "Cost segregation can accelerate depreciation and save tens of thousands in taxes on investment properties.",
    forProfiles: ['real-estate', 'business-re', 'multiple-re'],
  },
  {
    id: 'repStatus',
    question: "Do I qualify for Real Estate Professional status, and are we taking advantage of it?",
    why: "REP status lets you use real estate losses against ordinary income—a massive benefit if you qualify.",
    forProfiles: ['real-estate', 'business-re', 'multiple-re'],
  },
  {
    id: '1031',
    question: "What's the plan if I sell a property? Have we discussed 1031 exchanges?",
    why: "Selling without a plan can trigger a huge tax bill. A 1031 exchange can defer it entirely.",
    forProfiles: ['real-estate', 'business-re', 'multiple-re'],
  },
  // Multi-entity specific
  {
    id: 'multiEntity',
    question: "Are my entities structured to minimize overall tax liability and liability exposure?",
    why: "Multiple entities should work together strategically, not just exist independently.",
    forProfiles: ['multiple', '3-5', '6+', 'complicated'],
  },
  {
    id: 'intercompany',
    question: "Are we using intercompany agreements and management fees appropriately?",
    why: "Properly structured intercompany transactions can shift income to lower-tax entities.",
    forProfiles: ['multiple', '3-5', '6+', 'complicated'],
  },
  // High income specific
  {
    id: 'charitable',
    question: "Should I be using a Donor Advised Fund or charitable strategy?",
    why: "At higher income levels, strategic charitable giving can provide significant tax benefits while supporting causes you care about.",
    forProfiles: ['1m-3m', '3m+'],
  },
  {
    id: 'estatePlanning',
    question: "How is my tax planning coordinating with estate planning?",
    why: "At your wealth level, tax and estate planning should work together. Are your advisors talking to each other?",
    forProfiles: ['1m-3m', '3m+'],
  },
]

function getPersonalizedQuestions(answers: QuestionnaireAnswers): typeof baseQuestions {
  const hasRealEstate = ['multiple', 'few', 'planning'].includes(answers.realEstate)
  const hasMultipleEntities = ['3-5', '6+', 'complicated'].includes(answers.entityCount) || answers.businessType === 'multiple'
  const isHighIncome = ['1m-3m', '3m+'].includes(answers.income)

  const profiles: string[] = ['all']

  if (hasRealEstate || answers.businessType === 'business-re' || answers.businessType === 'real-estate') {
    profiles.push('real-estate', 'business-re', 'multiple-re')
  }
  if (hasMultipleEntities) {
    profiles.push('multiple', '3-5', '6+', 'complicated')
  }
  if (isHighIncome) {
    profiles.push('1m-3m', '3m+')
  }

  const relevantQuestions = baseQuestions.filter(q =>
    q.forProfiles.some(p => profiles.includes(p))
  )

  // Return top 7 most relevant
  return relevantQuestions.slice(0, 7)
}

export default function TaxChecklist() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({
    businessType: '',
    entityCount: '',
    income: '',
    realEstate: '',
    frustration: '',
    email: '',
    name: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    // Auto-advance after selection
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1)
      } else {
        setStep(questions.length) // Go to email capture
      }
    }, 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Send to your email service (ConvertKit, Mailchimp, etc.)
    // For now, just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsComplete(true)
  }

  const personalizedQuestions = getPersonalizedQuestions(answers)
  const progress = ((step + 1) / (questions.length + 1)) * 100

  return (
    <main className="min-h-screen bg-[#0f1222]">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <nav className="max-w-6xl mx-auto bg-[#0f1222]/90 backdrop-blur-md rounded-full border border-[#c4a24e]/10 px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp"
              alt="Priceless CPA"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="text-white font-semibold text-lg hidden sm:block">Priceless</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {!isComplete ? (
            <>
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-[#c4a24e] text-sm font-medium tracking-wide uppercase mb-4">Before April 15th</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                  7 Questions to Ask Your CPA
                  <span className="block text-[#c4a24e] font-serif italic">Before You Sign</span>
                </h1>
                <p className="text-white/70 text-lg max-w-xl mx-auto">
                  Answer a few questions about your situation, and we&apos;ll show you exactly what to ask—personalized to your business.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c4a24e] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-white/40 text-sm mt-2 text-center">
                  {step < questions.length ? `Question ${step + 1} of ${questions.length}` : 'Almost there!'}
                </p>
              </div>

              {/* Questions */}
              {step < questions.length && (
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                    {questions[step].question}
                  </h2>
                  <div className="space-y-3">
                    {questions[step].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(questions[step].id, option.value)}
                        className={`w-full text-left px-6 py-4 rounded-xl border transition-all ${
                          answers[questions[step].id as keyof QuestionnaireAnswers] === option.value
                            ? 'bg-[#c4a24e] border-[#c4a24e] text-[#0f1222]'
                            : 'bg-white/5 border-white/10 text-white hover:border-[#c4a24e]/50 hover:bg-white/10'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Email Capture */}
              {step >= questions.length && (
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    Where should we send your personalized questions?
                  </h2>
                  <p className="text-white/60 mb-6">
                    We&apos;ll also send you a PDF you can bring to your CPA meeting.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your first name"
                        value={answers.name}
                        onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c4a24e] transition"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={answers.email}
                        onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c4a24e] transition"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#c4a24e] text-[#0f1222] px-8 py-4 rounded-xl font-semibold hover:bg-[#d4b25e] transition disabled:opacity-50"
                    >
                      {isSubmitting ? 'Getting your questions...' : 'Get My Personalized Questions →'}
                    </button>
                    <p className="text-white/40 text-xs text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              )}

              {/* Back Button */}
              {step > 0 && step <= questions.length && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 text-white/50 hover:text-white transition text-sm flex items-center gap-2 mx-auto"
                >
                  ← Go back
                </button>
              )}
            </>
          ) : (
            /* Results */
            <div>
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c4a24e]/20 text-[#c4a24e] text-2xl mb-6">
                  ✓
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Here are your 7 questions, {answers.name}
                </h1>
                <p className="text-white/70 text-lg">
                  Based on your situation, these are the most important questions to ask before you sign your return.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {personalizedQuestions.map((q, i) => (
                  <div key={q.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c4a24e] text-[#0f1222] font-semibold flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-white font-medium text-lg mb-2">
                          &ldquo;{q.question}&rdquo;
                        </h3>
                        <p className="text-white/60 text-sm">
                          <span className="text-[#c4a24e] font-medium">Why this matters:</span> {q.why}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#1a3a2f] to-[#0f1222] rounded-2xl p-8 text-center border border-[#c4a24e]/20">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Not happy with your CPA&apos;s answers?
                </h2>
                <p className="text-white/70 mb-6">
                  Let&apos;s talk. We specialize in proactive tax strategy for entrepreneurs with complex finances.
                </p>
                <a
                  href="https://calendly.com/pricelesscpa/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c4a24e] text-[#0f1222] px-8 py-4 rounded-full font-semibold hover:bg-[#d4b25e] transition"
                >
                  Book a Free Consultation <span>→</span>
                </a>
              </div>

              {/* What we do differently */}
              <div className="mt-10 pt-10 border-t border-white/10">
                <h3 className="text-white font-semibold text-lg mb-6 text-center">What a proactive CPA relationship looks like:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Quarterly tax projections so you always know where you stand',
                    'Proactive strategy calls—we reach out to you',
                    'Entity structure reviews as your business evolves',
                    'Coordination with your attorney and financial advisor',
                    'Year-round access, not just at tax time',
                    'Clear roadmap of strategies and deadlines',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#c4a24e] mt-1">✓</span>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp"
              alt="Priceless CPA"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-white/50 text-sm">© {new Date().getFullYear()} Priceless CPA</span>
          </div>
          <Link href="/" className="text-white/50 hover:text-white text-sm transition">
            ← Back to homepage
          </Link>
        </div>
      </footer>
    </main>
  )
}
