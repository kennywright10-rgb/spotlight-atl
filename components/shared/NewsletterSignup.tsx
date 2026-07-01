'use client'

import { useState } from 'react'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'dark'
  className?: string
}

export default function NewsletterSignup({ variant = 'default', className }: NewsletterSignupProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire up to Mailchimp / ConvertKit / etc.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`text-center py-8 ${className ?? ''}`}>
        <div className="text-3xl mb-3">🎉</div>
        <h3 className="font-serif text-xl font-bold text-navy-500">You&apos;re in!</h3>
        <p className="text-gray-500 mt-2 text-sm">
          Welcome to the Local Spotlight ATL community. First story arrives Tuesday.
        </p>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className ?? ''}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-gold-400"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-navy-500 text-white text-sm font-bold hover:bg-navy-600 transition-colors whitespace-nowrap"
        >
          Subscribe →
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="flex-1 px-5 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-gold-400 bg-white"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 px-5 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-gold-400 bg-white"
        />
        <button
          type="submit"
          className="px-8 py-3.5 bg-gold-400 text-navy-500 text-sm font-bold hover:bg-gold-500 transition-colors whitespace-nowrap"
        >
          Subscribe →
        </button>
      </div>
      <p className="mt-3 text-xs text-gray-400 text-center">
        Join 5,000+ Metro Atlanta readers. Unsubscribe any time.
      </p>
    </form>
  )
}
