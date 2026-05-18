'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type QuestionnaireAnswers = {
  businessType: string
  entityCount: string
  entityTypes: string[]
  income: string
  realEstate: string
  frustration: string
  email: string
  name: string
}

type Question = {
  id: string
  question: string
  options: { value: string; label: string }[]
  multiSelect?: boolean
}

const questions: Question[] = [
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
    id: 'entityTypes',
    question: 'What types of entities do you have?',
    multiSelect: true,
    options: [
      { value: 'scorp', label: 'S Corporation' },
      { value: 'partnership', label: 'Partnership / LLC' },
      { value: 'ccorp', label: 'C Corporation' },
      { value: 'sole-prop', label: 'Sole Proprietorship' },
      { value: 'trust', label: 'Trust' },
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
    question: "What tax planning conversations have we initiated this year?",
    why: "A proactive CPA reaches out before deadlines, not after. If they only talk to you at tax time, you're getting compliance, not strategy.",
    forProfiles: ['all'],
  },
  {
    id: 'strategies',
    question: "What strategies did you recommend or implement this year that reduced my tax liability? What should I be doing this coming year and how do I implement the strategies?",
    why: "Your CPA should be able to point to specific moves they made—not just filing your return accurately.",
    forProfiles: ['all'],
  },
  {
    id: 'projection',
    question: "What's my projected tax liability for this year, and how/when should I be making the payments?",
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
    forProfiles: ['has-scorp'],
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
    question: "Does my real estate activity qualify as active under Real Estate Professional status or the Short Term Rental Exclusion, and are we taking advantage of it?",
    why: "REP status/STR lets you use real estate losses against ordinary income—a massive benefit if you qualify.",
    forProfiles: ['real-estate', 'business-re', 'multiple-re'],
  },
  {
    id: '1031',
    question: "What's the plan if I sell a property? What are the best ways to mitigate taxes? Does a 1031 exchange make sense?",
    why: "Selling without a plan can trigger a huge tax bill. A 1031 exchange can defer it entirely.",
    forProfiles: ['real-estate', 'business-re', 'multiple-re'],
  },
  // Multi-entity specific
  {
    id: 'multiEntity',
    question: "Are my entities structured to minimize overall tax liability and liability exposure? Is this the most efficient structure?",
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
    question: "Should I be using a Donor Advised Fund, Private Family Foundation or charitable strategy?",
    why: "At higher income levels, strategic charitable giving can provide significant tax benefits while supporting causes you care about.",
    forProfiles: ['1m-3m', '3m+'],
  },
  {
    id: 'taxStrategyInvestments',
    question: "Are there any strategic investments that I could make to materially reduce my tax bill?",
    why: "At high incomes, investments into active businesses often can create losses that have a significant impact on annual taxes.",
    forProfiles: ['1m-3m', '3m+'],
  },
  {
    id: 'estatePlanning',
    question: "How is my tax planning coordinating with my estate and investment planning?",
    why: "At your wealth level, tax and estate planning should work together. Are your advisors talking to each other?",
    forProfiles: ['1m-3m', '3m+'],
  },
]

function getPersonalizedQuestions(answers: QuestionnaireAnswers): typeof baseQuestions {
  const hasRealEstate = ['multiple', 'few', 'planning'].includes(answers.realEstate)
  const hasMultipleEntities = ['3-5', '6+', 'complicated'].includes(answers.entityCount) || answers.businessType === 'multiple'
  const isHighIncome = ['1m-3m', '3m+'].includes(answers.income)
  const hasScorp = answers.entityTypes.includes('scorp')

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
  if (hasScorp) {
    profiles.push('has-scorp')
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
    entityTypes: [],
    income: '',
    realEstate: '',
    frustration: '',
    email: '',
    name: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = questions[step]

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    // Auto-advance after selection (only for single-select)
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1)
      } else {
        setStep(questions.length) // Go to email capture
      }
    }, 300)
  }

  const handleMultiSelect = (questionId: string, value: string) => {
    setAnswers(prev => {
      const currentValues = prev[questionId as keyof QuestionnaireAnswers] as string[]
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      return { ...prev, [questionId]: newValues }
    })
  }

  const handleContinue = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setStep(questions.length) // Go to email capture
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Send to FormSubmit.co (free email forwarding service)
    try {
      const formData = new FormData()
      formData.append('name', answers.name)
      formData.append('email', answers.email)
      formData.append('_subject', 'New Lead: 7 Questions to Ask Your CPA')
      formData.append('_captcha', 'false')
      formData.append('_template', 'table')

      // Include questionnaire answers for context
      formData.append('Business Type', answers.businessType)
      formData.append('Entity Count', answers.entityCount)
      formData.append('Entity Types', answers.entityTypes.join(', '))
      formData.append('Income Level', answers.income)
      formData.append('Real Estate', answers.realEstate)
      formData.append('Frustration', answers.frustration)

      await fetch('https://formsubmit.co/ajax/anthony@priceless.cpa', {
        method: 'POST',
        body: formData,
      })
    } catch (error) {
      console.error('Form submission error:', error)
      // Still show results even if email fails
    }

    setIsSubmitting(false)
    setIsComplete(true)
  }

  const personalizedQuestions = getPersonalizedQuestions(answers)
  const progress = ((step + 1) / (questions.length + 1)) * 100

  return (
    <main className="min-h-screen bg-[#0f1222] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center py-6 md:py-12 px-4 md:px-6">
        <div className="max-w-2xl mx-auto w-full">

          {!isComplete ? (
            <>
              {/* Header - Compact */}
              <div className="text-center mb-6 md:mb-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-3 md:mb-4">
                  7 Questions to Ask Your CPA
                  <span className="block text-[#c4a24e] font-serif italic">Before You Sign</span>
                </h1>
                <p className="text-white/70 text-sm md:text-lg max-w-xl mx-auto">
                  Answer a few questions, and we&apos;ll personalize what to ask.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4 md:mb-8">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c4a24e] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-white/40 text-xs md:text-sm mt-2 text-center">
                  {step < questions.length ? `Question ${step + 1} of ${questions.length}` : 'Almost there!'}
                </p>
              </div>

              {/* Questions */}
              {step < questions.length && currentQuestion && (
                <div className="bg-white/5 rounded-2xl p-5 md:p-8 border border-white/10">
                  <h2 className="text-lg md:text-2xl font-semibold text-white mb-2">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.multiSelect && (
                    <p className="text-white/50 text-xs md:text-sm mb-4 md:mb-6">Select all that apply</p>
                  )}
                  {!currentQuestion.multiSelect && <div className="mb-4 md:mb-6" />}

                  <div className="space-y-2 md:space-y-3">
                    {currentQuestion.multiSelect ? (
                      // Multi-select checkboxes
                      <>
                        {currentQuestion.options.map((option) => {
                          const selectedValues = answers[currentQuestion.id as keyof QuestionnaireAnswers] as string[]
                          const isSelected = selectedValues?.includes(option.value)
                          return (
                            <button
                              key={option.value}
                              onClick={() => handleMultiSelect(currentQuestion.id, option.value)}
                              className={`w-full text-left px-4 py-3 md:px-6 md:py-4 rounded-xl border transition-all flex items-center gap-3 md:gap-4 text-sm md:text-base ${
                                isSelected
                                  ? 'bg-[#c4a24e]/20 border-[#c4a24e] text-white'
                                  : 'bg-white/5 border-white/10 text-white hover:border-[#c4a24e]/50 hover:bg-white/10'
                              }`}
                            >
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'bg-[#c4a24e] border-[#c4a24e]' : 'border-white/30'
                              }`}>
                                {isSelected && (
                                  <svg className="w-3 h-3 text-[#0f1222]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              {option.label}
                            </button>
                          )
                        })}
                        <button
                          onClick={handleContinue}
                          disabled={(answers[currentQuestion.id as keyof QuestionnaireAnswers] as string[])?.length === 0}
                          className="w-full mt-3 md:mt-4 bg-[#c4a24e] text-[#0f1222] px-4 py-3 md:px-6 md:py-4 rounded-xl font-semibold hover:bg-[#d4b25e] transition disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                        >
                          Continue →
                        </button>
                      </>
                    ) : (
                      // Single-select buttons
                      currentQuestion.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(currentQuestion.id, option.value)}
                          className={`w-full text-left px-4 py-3 md:px-6 md:py-4 rounded-xl border transition-all text-sm md:text-base ${
                            answers[currentQuestion.id as keyof QuestionnaireAnswers] === option.value
                              ? 'bg-[#c4a24e] border-[#c4a24e] text-[#0f1222]'
                              : 'bg-white/5 border-white/10 text-white hover:border-[#c4a24e]/50 hover:bg-white/10'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Email Capture */}
              {step >= questions.length && (
                <div className="bg-white/5 rounded-2xl p-5 md:p-8 border border-white/10">
                  <h2 className="text-lg md:text-2xl font-semibold text-white mb-2">
                    Where should we send your personalized questions?
                  </h2>
                  <p className="text-white/60 text-sm md:text-base mb-4 md:mb-6">
                    We&apos;ll also send you a PDF you can bring to your CPA meeting.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your first name"
                        value={answers.name}
                        onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c4a24e] transition text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={answers.email}
                        onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c4a24e] transition text-sm md:text-base"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#c4a24e] text-[#0f1222] px-4 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-[#d4b25e] transition disabled:opacity-50 text-sm md:text-base"
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
                  className="mt-4 md:mt-6 text-white/50 hover:text-white transition text-xs md:text-sm flex items-center gap-2 mx-auto"
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

      {/* Footer - Hidden on mobile */}
      <footer className="hidden md:block py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Priceless CPA"
              width={32}
              height={32}
              className="rounded-lg"
              priority
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
