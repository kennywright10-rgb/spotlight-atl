import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Local Spotlight ATL shines a light on the inspiring business owners and entrepreneurs who make Metro Atlanta great.',
}

const values = [
  {
    icon: '🏙️',
    title: 'Community First',
    body: 'Every story we tell strengthens the local ecosystem. When Atlanta businesses thrive, everyone wins.',
  },
  {
    icon: '🎙️',
    title: 'Real Voices',
    body: 'No PR teams. No ghostwritten bios. We interview owners directly and publish their words authentically.',
  },
  {
    icon: '🔍',
    title: 'Genuine Discovery',
    body: 'We surface businesses that deserve attention — not the ones with the biggest ad budgets.',
  },
  {
    icon: '🤝',
    title: 'Free for Everyone',
    body: 'Features are always free. We believe every business with a great story deserves a platform.',
  },
]

const stats = [
  { value: '150+', label: 'Businesses Featured' },
  { value: '5,000+', label: 'Newsletter Subscribers' },
  { value: '10', label: 'Metro Atlanta Cities' },
  { value: '12', label: 'Business Categories' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Our Mission</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Stories. Businesses. Community.
          </h1>
          <p className="mt-6 text-gray-300 text-xl max-w-2xl leading-relaxed">
            Local Spotlight ATL was built to do one thing: tell the stories of the people who make Metro Atlanta extraordinary.
          </p>
        </div>
      </section>

      {/* Mission prose */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-500 mb-6">Why We Exist</h2>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Metro Atlanta is one of the most dynamic business regions in the country — a place where immigrant entrepreneurs open restaurants that become community institutions, where fitness coaches turn garages into award-winning gyms, and where first-generation business owners build legacies that outlast them.
            </p>
            <p>
              But most of those stories never get told. Local news is shrinking. Social media is noise. The businesses that deserve attention often don&apos;t have PR budgets or connections to journalists.
            </p>
            <p>
              That&apos;s the gap Local Spotlight ATL was created to fill. We do in-depth Q&A interviews with local business owners — no advertising, no pay-to-play, no shortcuts. Just authentic stories from the people behind the businesses you love (and the ones you&apos;re about to discover).
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gold-400 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl font-bold text-navy-500">{stat.value}</p>
                <p className="text-navy-600 text-sm font-semibold mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-500 mb-2">What We Stand For</h2>
          <div className="w-10 h-1 bg-gold-400 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 p-6 bg-gray-50 border border-gray-100">
                <span className="text-3xl flex-shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-serif font-bold text-navy-500 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial process */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-500 mb-6">Our Editorial Process</h2>
          <div className="space-y-6">
            {[
              ['1. Nomination', 'Business owners or community members nominate a business through our free nomination form. We review every submission personally.'],
              ['2. Selection', 'Our team selects businesses based on community impact, authentic story, and editorial fit — not advertising budgets.'],
              ['3. Interview', 'We send a Q&A questionnaire directly to the business owner. They answer in their own words, on their own time.'],
              ['4. Publication', 'We edit lightly for clarity, add context, and publish. Owners review before anything goes live.'],
              ['5. Amplification', 'Featured stories are promoted via our newsletter, social media, and Best Of guides — ongoing, not one-and-done.'],
            ].map(([step, desc]) => (
              <div key={step} className="flex gap-5">
                <div className="w-6 h-6 bg-navy-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-navy-500 mb-1">{step}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-500 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to Be Featured?</h2>
          <p className="text-gray-300 mb-8">Tell us your story. It&apos;s free — and it always will be.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nominate" className="px-10 py-4 bg-gold-400 text-navy-500 font-bold text-sm hover:bg-gold-500 transition-colors">
              Submit a Nomination →
            </Link>
            <Link href="/contact" className="px-10 py-4 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-navy-500 transition-colors">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
