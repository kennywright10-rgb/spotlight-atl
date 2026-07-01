'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Get in Touch</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-gray-300 max-w-xl">Have a question, story tip, or partnership idea? We read every message.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-navy-500 mb-4">Reach Out</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gold-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-navy-500 font-semibold text-sm hover:text-gold-500 transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gold-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-navy-500 font-semibold text-sm hover:text-gold-500 transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gold-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Coverage Area</p>
                    <p className="text-navy-500 font-semibold text-sm">Metro Atlanta, Georgia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-gray-50 border border-gray-100 p-6">
              <h3 className="font-bold text-navy-500 text-sm uppercase tracking-wide mb-4">Quick Links</h3>
              <div className="space-y-3">
                {[
                  ['Get Your Business Featured', '/nominate'],
                  ['Read Featured Stories', '/featured-stories'],
                  ['Best Of Atlanta Guides', '/best-of-atlanta'],
                  ['About Local Spotlight ATL', '/about'],
                ].map(([label, href]) => (
                  <Link key={href} href={href}
                    className="block text-sm text-gray-600 hover:text-gold-500 transition-colors border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    {label} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="border-l-4 border-gold-400 pl-4">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Response Time</p>
              <p className="text-gray-600 text-sm">We typically respond within 1–2 business days. For urgent matters, email us directly.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex items-center justify-center py-20">
                <div className="text-center max-w-md">
                  <div className="w-14 h-14 bg-gold-400 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-navy-500 mb-3">Message Sent!</h2>
                  <p className="text-gray-600">Thanks, {form.name}. We&apos;ll be in touch at <strong>{form.email}</strong> shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Subject *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition bg-white">
                    <option value="">Select a topic</option>
                    <option>Feature / Nomination Question</option>
                    <option>Partnership or Sponsorship</option>
                    <option>Advertise with Us</option>
                    <option>Press / Media Inquiry</option>
                    <option>Story Tip</option>
                    <option>Correction or Update</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={7}
                    placeholder="Tell us what's on your mind..."
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 transition resize-none" />
                </div>
                <button type="submit"
                  className="px-12 py-4 bg-navy-500 text-white font-bold text-sm hover:bg-navy-600 transition-colors">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
