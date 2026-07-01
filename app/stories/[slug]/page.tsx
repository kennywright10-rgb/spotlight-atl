import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getStoryBySlug, getRelatedStories, stories } from '@/lib/data/stories'
import { siteConfig } from '@/lib/config'
import { formatDate } from '@/lib/utils'
import { CategoryBadge } from '@/components/ui/Badge'
import StoryCard from '@/components/shared/StoryCard'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return {}
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: [story.image],
      type: 'article',
      publishedTime: story.publishDate,
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) notFound()

  const related = getRelatedStories(slug, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: story.excerpt,
    image: story.image,
    datePublished: story.publishDate,
    author: { '@type': 'Organization', name: siteConfig.siteName },
    publisher: { '@type': 'Organization', name: siteConfig.siteName, url: siteConfig.url },
    about: {
      '@type': 'LocalBusiness',
      name: story.businessName,
      address: { '@type': 'PostalAddress', addressLocality: story.location },
      url: story.website,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image src={story.image} alt={story.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 via-navy-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <CategoryBadge label={story.category} className="mb-3" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
            {story.title}
          </h1>
          <p className="mt-3 text-gray-300 text-sm">
            By {story.author} · {formatDate(story.publishDate)}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main content */}
          <article className="flex-1 min-w-0">
            {/* Excerpt lead */}
            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-gold-400 pl-6 mb-10 font-serif italic">
              {story.excerpt}
            </p>

            {/* Interview Q&A */}
            {story.interview && story.interview.length > 0 && (
              <div className="space-y-10">
                {story.interview.map((qa, i) => (
                  <div key={i} className="story-content">
                    <div className="flex gap-4 mb-3">
                      <span className="font-serif text-2xl font-bold text-gold-400 shrink-0">Q</span>
                      <h3 className="font-bold text-navy-500 text-lg leading-snug pt-1">{qa.question}</h3>
                    </div>
                    <div className="pl-10">
                      <p className="text-gray-600 leading-relaxed">{qa.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Nominate CTA */}
            <div className="mt-16 bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-navy-500 mb-2">Know a Great Business?</h3>
              <p className="text-gray-500 mb-5">Nominate them for a free feature on Local Spotlight ATL.</p>
              <Link href="/nominate" className="inline-block px-8 py-3 bg-navy-500 text-white font-bold text-sm hover:bg-navy-600 transition-colors">
                Nominate a Business →
              </Link>
            </div>

            {/* Related stories */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="font-serif text-2xl font-bold text-navy-500 mb-6">Related Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((s) => (
                    <StoryCard key={s.slug} story={s} />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            {/* Quick facts */}
            <div className="bg-navy-500 p-6 text-white">
              <h3 className="font-serif font-bold text-gold-400 text-lg mb-5 pb-3 border-b border-white/10">
                Quick Facts
              </h3>
              <dl className="space-y-4">
                {[
                  { label: 'Business', value: story.businessName },
                  { label: 'Owner', value: story.ownerName },
                  { label: 'Location', value: story.location },
                  { label: 'Industry', value: story.industry },
                  story.founded ? { label: 'Founded', value: story.founded } : null,
                ]
                  .filter(Boolean)
                  .map((item) => (
                    <div key={item!.label}>
                      <dt className="text-gray-400 text-xs tracking-wider uppercase">{item!.label}</dt>
                      <dd className="text-white text-sm font-semibold mt-0.5">{item!.value}</dd>
                    </div>
                  ))}
                {story.website && (
                  <div>
                    <dt className="text-gray-400 text-xs tracking-wider uppercase">Website</dt>
                    <dd className="mt-0.5">
                      <a href={story.website} target="_blank" rel="noopener noreferrer"
                        className="text-gold-400 text-sm font-semibold hover:underline break-all">
                        {story.website.replace('https://', '')}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-50 border border-gray-200 p-6">
              <h3 className="font-serif font-bold text-navy-500 text-lg mb-2">Get Weekly Stories</h3>
              <p className="text-gray-500 text-sm mb-4">Join 5,000+ Atlanta readers.</p>
              <NewsletterSignup variant="compact" />
            </div>

            {/* Get featured */}
            <div className="border-2 border-gold-400 p-5 text-center">
              <p className="font-bold text-navy-500 mb-2">Is Your Business Ready for the Spotlight?</p>
              <p className="text-gray-500 text-xs mb-4">Free features for Metro Atlanta businesses.</p>
              <Link href="/nominate"
                className="block w-full py-2.5 bg-gold-400 text-navy-500 text-sm font-bold text-center hover:bg-gold-500 transition-colors">
                Get Featured →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Newsletter section */}
      <section className="py-16 bg-gold-400">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold text-navy-500 mb-3">
            Get Atlanta&apos;s Most Inspiring Local Stories
          </h3>
          <p className="text-navy-600 mb-6">One great story. Every Tuesday. Join free.</p>
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
