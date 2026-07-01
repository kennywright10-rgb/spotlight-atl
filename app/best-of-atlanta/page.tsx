import type { Metadata } from 'next'
import { bestOfGuides } from '@/lib/data/bestOf'
import BestOfCard from '@/components/shared/BestOfCard'
import { cities } from '@/lib/data/cities'

export const metadata: Metadata = {
  title: 'Best of Atlanta',
  description: 'Curated guides to the best businesses in Metro Atlanta — researched and recommended by Local Spotlight ATL.',
}

const CATEGORIES = ['Wellness', 'Beauty', 'Restaurants', 'Coffee Shops', 'Fitness', 'Real Estate', 'Home Services', 'Medical']

export default function BestOfAtlantaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Curated Guides</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">The Best Businesses in Metro Atlanta</h1>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Curated recommendations featuring exceptional local businesses — researched, vetted, and featured by our team.
          </p>
        </div>
      </section>

      {/* Category filter pills */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            <button className="px-4 py-1.5 bg-navy-500 text-white text-xs font-bold whitespace-nowrap shrink-0">All</button>
            {CATEGORIES.map((cat) => (
              <button key={cat} className="px-4 py-1.5 border border-gray-200 text-gray-600 text-xs font-bold whitespace-nowrap shrink-0 hover:border-gold-400 hover:text-navy-500 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* All guides */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-bold text-navy-500">All Guides</h2>
          <div className="w-10 h-1 bg-gold-400 mt-2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bestOfGuides.map((guide) => (
            <BestOfCard key={guide.slug} guide={guide} />
          ))}
        </div>

        {/* Browse by city */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="font-serif text-2xl font-bold text-navy-500 mb-2">Browse by City</h2>
          <div className="w-10 h-1 bg-gold-400 mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`/${city.slug}`}
                className="group flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-100 hover:border-gold-300 hover:bg-navy-500 transition-all duration-200"
              >
                <span className="font-bold text-navy-500 group-hover:text-white text-sm transition-colors">{city.name}</span>
                <span className="text-gray-400 group-hover:text-gray-300 text-xs mt-0.5 transition-colors">{city.county} County</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
