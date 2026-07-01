import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCityBySlug, cities, cityPaths } from '@/lib/data/cities'
import { getBestOfByCity } from '@/lib/data/bestOf'
import { stories } from '@/lib/data/stories'
import BestOfCard from '@/components/shared/BestOfCard'
import StoryCard from '@/components/shared/StoryCard'
import { siteConfig } from '@/lib/config'

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cityPaths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) return {}
  return {
    title: `Best Businesses in ${cityData.name}, GA`,
    description: `Discover the best local businesses and stories in ${cityData.name}, Georgia — featured by Local Spotlight ATL.`,
    openGraph: { title: `Best of ${cityData.name} | ${siteConfig.siteName}` },
  }
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) notFound()

  const cityGuides = getBestOfByCity(cityData.name)
  const cityStories = stories.filter((s) =>
    s.location.toLowerCase().includes(cityData.name.toLowerCase())
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: cityData.name,
    containedInPlace: { '@type': 'State', name: 'Georgia' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">
              {cityData.county} County, Georgia
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Best Businesses in {cityData.name}
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl text-lg">
            {cityData.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Best Of Guides */}
        {cityGuides.length > 0 && (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-navy-500">Best Of {cityData.name}</h2>
              <div className="w-10 h-1 bg-gold-400 mt-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityGuides.map((guide) => (
                <BestOfCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        )}

        {/* Featured stories */}
        {cityStories.length > 0 && (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-navy-500">
                Featured Business Stories in {cityData.name}
              </h2>
              <div className="w-10 h-1 bg-gold-400 mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </div>
        )}

        {/* Nominate CTA */}
        <div className="bg-navy-500 p-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">
            Do You Own a Business in {cityData.name}?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join hundreds of Metro Atlanta business owners who&apos;ve shared their story with our community. Features are 100% free.
          </p>
          <Link href="/nominate" className="inline-block px-10 py-4 bg-gold-400 text-navy-500 font-bold text-sm hover:bg-gold-500 transition-colors">
            Get Your Business Featured →
          </Link>
        </div>

        {/* Other cities */}
        <div>
          <h2 className="font-serif text-xl font-bold text-navy-500 mb-4">Explore More Cities</h2>
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city)
              .map((c) => (
                <Link key={c.slug} href={`/${c.slug}`}
                  className="px-4 py-2 border border-gray-200 text-sm font-semibold text-navy-500 hover:border-gold-400 hover:text-gold-500 transition-colors">
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
