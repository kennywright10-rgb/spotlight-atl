'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'
import { categories } from '@/lib/data/categories'
import { cities } from '@/lib/data/cities'

export default function NominatePage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    website: '',
    city: '',
    category: '',
    story: '',
    instagram: '',
    hearAbout: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 bg-gold-400 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-bold text-navy-500 mb-3">
            You&apos;re on the list!
          </h1>
          <p className="text-gray-600 mb-6">
            Thanks for nominating <strong>{form.businessName}</strong>. Our team reviews nominations weekly and will be in touch at <strong>{form.email}</strong> if selected.
          </p>
          <p className="text-gray-500 text-sm">
            Questions? Email us at{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-gold-500 hover:underline">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-500 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">It&apos;s Free</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Get Your Business Featured
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">
            We tell the stories behind Metro Atlanta&apos;s most inspiring businesses — no advertising, no pay-to-play. Just real stories.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            {[['100% Free', 'No cost, ever'], ['Your Story', 'Q&A interview format'], ['Real Reach', '5,000+ local readers']].map(([title, sub]) => (
              <div key={title}>
                <p className="text-white font-bold text-lg">{title}</p>
                <p className="text-gray-400 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Business Info */}
          <fieldset>
            <legend className="font-serif text-xl font-bold text-navy-500 mb-1">Business Information</legend>
            <div className="w-8 h-0.5 bg-gold-400 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Business Name *</label>
                <input name="businessName" value={form.businessName} onChange={handleChange} required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Owner / Contact Name *</label>
                <input name="ownerName" value={form.ownerName} onChange={handleChange} required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Phone Number</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Website</label>
                <input name="website" type="url" value={form.website} onChange={handleChange} placeholder="https://"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Instagram Handle</label>
                <input name="instagram" value={form.instagram} onChange={handleChange} placeholder="@yourbusiness"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">City *</label>
                <select name="city" value={form.city} onChange={handleChange} required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition bg-white">
                  <option value="">Select a city</option>
                  {cities.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
                  <option value="Other">Other Metro Atlanta area</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Category *</label>
                <select name="category" value={form.category} onChange={handleChange} required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition bg-white">
                  <option value="">Select a category</option>
                  {categories.map((cat) => <option key={cat.slug} value={cat.name}>{cat.name}</option>)}
                </select>
              </div>
            </div>
          </fieldset>

          {/* Story */}
          <fieldset>
            <legend className="font-serif text-xl font-bold text-navy-500 mb-1">Your Story</legend>
            <div className="w-8 h-0.5 bg-gold-400 mb-6" />
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                Tell us about your business and why your story deserves to be told *
              </label>
              <textarea name="story" value={form.story} onChange={handleChange} required rows={6}
                placeholder="What makes your business unique? What's your origin story? What challenge did you overcome? What impact do you have on the community?"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition resize-none" />
              <p className="text-gray-400 text-xs mt-1.5">The more detail you share, the better we can evaluate your story. There&apos;s no wrong answer here.</p>
            </div>
          </fieldset>

          {/* How did you hear */}
          <fieldset>
            <legend className="font-serif text-xl font-bold text-navy-500 mb-1">One More Thing</legend>
            <div className="w-8 h-0.5 bg-gold-400 mb-6" />
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">How did you hear about Local Spotlight ATL?</label>
              <select name="hearAbout" value={form.hearAbout} onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition bg-white">
                <option value="">Select one</option>
                <option>Google Search</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>A Friend / Colleague</option>
                <option>Another Featured Business</option>
                <option>Email Newsletter</option>
                <option>Other</option>
              </select>
            </div>
          </fieldset>

          {/* Submit */}
          <div className="pt-2">
            <button type="submit"
              className="w-full sm:w-auto px-12 py-4 bg-navy-500 text-white font-bold text-sm hover:bg-navy-600 transition-colors">
              Submit Nomination →
            </button>
            <p className="text-gray-400 text-xs mt-3">
              By submitting, you agree to be contacted by our team. We review nominations weekly and select stories based on community impact, authenticity, and editorial fit.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
