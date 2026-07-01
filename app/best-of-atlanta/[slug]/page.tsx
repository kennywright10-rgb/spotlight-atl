import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBestOfGuideBySlug, bestOfGuides } from '@/lib/data/bestOf'
import { siteConfig } from '@/lib/config'
import { formatDate } from '@/lib/utils'
import { AwardBadge } from '@/components/ui/Badge'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return bestOfGuides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getBestOfGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: { title: guide.title, description: guide.excerpt, images: [guide.image] },
  }
}

export default async function BestOfGuidePage({ params }: Props) {
  const { slug } = await params
  const guide = getBestOfGuideBySlug(slug)
  if (!guide) notFound()

  const related = bestOfGuides.filter((g) => g.slug !== slug && g.city === guide.city).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: guide.title,
    description: guide.excerpt,
    numberOfItems: guide.businesses.length,
    itemListElement: guide.businesses.map((biz, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: biz.name,
      url: biz.website,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <Image src={guide.image} alt={guide.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 via-navy-500/60 to-navy-500/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-gold-400 text-navy-500 text-xs font-bold px-2.5 py-1 tracking-wide">{guide.category}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-gray-300 text-xs">{guide.city}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">{guide.title}</h1>
          <p className="text-gray-300 text-sm mt-2">Last updated {formatDate(guide.updatedDate ?? guide.publishDate)}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Intro */}
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-gold-400 pl-6 mb-10 italic font-serif">
              {guide.excerpt}
            </p>

            {/* TOC */}
            <div className="bg-gray-50 border border-gray-200 p-6 mb-10">
              <h2 className="font-bold text-navy-500 text-sm tracking-wide uppercase mb-4">Table of Contents</h2>
              <ol className="space-y-2">
                {guide.businesses.map((biz) => (
                  <li key={biz.rank} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-navy-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {biz.rank}
                    </span>
                    <a href={`#biz-${biz.rank}`} className="text-sm text-navy-500 hover:text-gold-500 transition-colors font-medium">
                      {biz.name}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Business listings */}
            <div className="space-y-10">
              {guide.businesses.map((biz) => (
                <div key={biz.rank} id={`biz-${biz.rank}`} className="border border-gray-200 overflow-hidden">
                  {/* Listing header */}
                  <div className="flex items-center gap-4 bg-navy-500 px-6 py-4">
                    <span className="font-serif text-4xl font-bold text-gold-400 leading-none">{biz.rank}</span>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-white">{biz.name}</h2>
                      <p className="text-gray-300 text-xs">{biz.address}</p>
                    </div>
                    <div className="ml-auto">
                      <AwardBadge tier={biz.rank === 1 ? 'winner' : biz.rank === 2 ? 'gold' : 'silver'} year={2026} />
                    </div>
                  </div>

                  {/* Listing body */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 space-y-4">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image src={biz.image} alt={biz.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{biz.description}</p>

                        {/* Why we like them */}
                        <div className="bg-gold-50 border-l-4 border-gold-400 p-4">
                          <p className="text-xs font-bold text-gold-600 tracking-wider uppercase mb-1">Why We Like Them</p>
                          <p className="text-gray-700 text-sm">{biz.whyWeLikeThem}</p>
                        </div>
                      </div>

                      {/* Details sidebar */}
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4">
                          <h4 className="text-xs font-bold text-navy-500 tracking-wider uppercase mb-3">Contact & Info</h4>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-600">{biz.address}</p>
                            <p><a href={`tel:${biz.phone}`} className="text-navy-500 font-semibold hover:text-gold-500">{biz.phone}</a></p>
                            <p><a href={biz.website} target="_blank" rel="noopener noreferrer" className="text-gold-500 font-semibold hover:underline">{biz.website.replace('https://', '')}</a></p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4">
                          <h4 className="text-xs font-bold text-navy-500 tracking-wider uppercase mb-3">Services</h4>
                          <ul className="space-y-1.5">
                            {biz.services.map((svc) => (
                              <li key={svc} className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="text-gold-400">✓</span> {svc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a href={biz.website} target="_blank" rel="noopener noreferrer"
                          className="block w-full py-3 bg-navy-500 text-white text-sm font-bold text-center hover:bg-navy-600 transition-colors">
                          Visit Website →
                        </a>
                        <Link href="/nominate"
                          className="block w-full py-2.5 border-2 border-navy-500 text-navy-500 text-sm font-bold text-center hover:bg-navy-500 hover:text-white transition-colors">
                          Nominate This Business
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            {/* Related guides */}
            {related.length > 0 && (
              <div className="bg-gray-50 border border-gray-100 p-6">
                <h3 className="font-serif font-bold text-navy-500 text-lg mb-4">Related Guides</h3>
                <div className="space-y-4">
                  {related.map((g) => (
                    <Link key={g.slug} href={`/best-of-atlanta/${g.slug}`}
                      className="block text-sm text-gray-600 hover:text-gold-500 transition-colors py-2 border-b border-gray-100 last:border-0">
                      {g.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter */}
            <div className="bg-navy-500 p-6">
              <h3 className="font-serif font-bold text-white text-lg mb-2">Get Weekly Stories</h3>
              <p className="text-gray-300 text-sm mb-4">Join 5,000+ Atlanta readers.</p>
              <NewsletterSignup variant="compact" />
            </div>

            {/* Nominate */}
            <div className="border-2 border-gold-400 p-6 text-center">
              <h3 className="font-serif font-bold text-navy-500 text-xl mb-2">Get Featured</h3>
              <p className="text-gray-500 text-sm mb-4">100% free. We tell your story.</p>
              <Link href="/nominate" className="block w-full py-3 bg-gold-400 text-navy-500 font-bold text-sm hover:bg-gold-500 transition-colors">
                Nominate Your Business →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-16 bg-gold-400">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold text-navy-500 mb-3">Get Atlanta&apos;s Most Inspiring Stories</h3>
          <p className="text-navy-600 mb-6">One great story. Every Tuesday. Free.</p>
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
