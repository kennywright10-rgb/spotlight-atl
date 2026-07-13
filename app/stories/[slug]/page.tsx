import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getStoryBySlug, getRelatedStories, stories } from '@/lib/data/stories'
import { getAuthorBySlug } from '@/lib/data/authors'
import { siteConfig } from '@/lib/config'
import { formatDate } from '@/lib/utils'
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
  const author = story.authorSlug ? getAuthorBySlug(story.authorSlug) : undefined

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: story.excerpt,
    image: story.image,
    datePublished: story.publishDate,
    author: author
      ? { '@type': 'Person', name: author.name, url: `${siteConfig.url}/authors/${author.slug}` }
      : { '@type': 'Organization', name: siteConfig.siteName },
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500">{story.category}</span>
            <span className="text-gray-200">·</span>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">{formatDate(story.publishDate)}</span>
            <span className="text-gray-200">·</span>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">{story.location}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-500 leading-tight mb-6">
            {story.title}
          </h1>

          {/* Author byline */}
          {author && (
            <Link href={`/authors/${author.slug}`}
              className="flex items-center gap-3 mb-6 group w-fit">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image src={author.photo} alt={author.name} fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-500 group-hover:text-gold-500 transition-colors leading-none mb-0.5">
                  {author.name}
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400">{author.title}</p>
              </div>
            </Link>
          )}

          {/* Share row */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Share</span>
            {[
              { label: 'Facebook', href: `https://facebook.com/sharer/sharer.php?u=${siteConfig.url}/stories/${story.slug}` },
              { label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${siteConfig.url}/stories/${story.slug}&text=${encodeURIComponent(story.title)}` },
              { label: 'LinkedIn', href: `https://linkedin.com/sharing/share-offsite/?url=${siteConfig.url}/stories/${story.slug}` },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-navy-500 transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            style={{ objectPosition: story.imagePosition ?? 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Intro paragraph */}
        <p className="text-base md:text-lg text-gray-700 leading-[1.85] mb-10">
          {story.excerpt}
        </p>

        {/* Interview Q&A */}
        {story.interview && story.interview.length > 0 && (
          <div className="space-y-8">
            {story.interview.map((qa, i) => (
              <div key={i}>
                <p className="font-bold text-gray-900 text-base md:text-lg leading-snug mb-3">
                  {qa.question}
                </p>
                <div className="text-gray-700 text-base leading-[1.85] space-y-4">
                  {qa.answer.split('\n').filter(Boolean).map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                {qa.imageAfter && (
                  <figure className="mt-8">
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src={qa.imageAfter.src}
                        alt={qa.imageAfter.caption}
                        width={800}
                        height={534}
                        className="w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-xs tracking-wide text-gray-400 italic">
                      {qa.imageAfter.caption}
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tags row */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Filed under</span>
          <Link href={`/categories/${story.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-500 hover:text-navy-500 transition-colors">
            {story.category}
          </Link>
          <span className="text-gray-200">·</span>
          <Link href={`/${story.location.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-500 hover:text-navy-500 transition-colors">
            {story.location}
          </Link>
        </div>

        {/* Author card */}
        {author && (
          <div className="mt-10 p-6 bg-navy-500 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image src={author.photo} alt={author.name} fill className="object-cover" sizes="64px" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-400 mb-1">Written by</p>
              <Link href={`/authors/${author.slug}`}
                className="font-serif text-lg font-bold text-white hover:text-gold-300 transition-colors">
                {author.name}
              </Link>
              <p className="text-white/50 text-xs mt-0.5 mb-3">{author.title}</p>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{author.bio.slice(0, 200) + '...'}</p>
              <Link href={`/authors/${author.slug}`}
                className="inline-block mt-3 text-[10px] font-bold tracking-[0.2em] uppercase text-gold-400 hover:text-gold-300 transition-colors">
                More stories by {author.name} &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* About the business */}
        <div className="mt-10 p-6 bg-gray-50 border-l-2 border-gold-400">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-4">About {story.businessName}</p>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Owner', value: story.ownerName },
              { label: 'Location', value: story.location },
              { label: 'Industry', value: story.industry },
              story.founded ? { label: 'Founded', value: story.founded } : null,
            ].filter(Boolean).map((item) => (
              <div key={item!.label}>
                <dt className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-0.5">{item!.label}</dt>
                <dd className="text-navy-500 font-semibold">{item!.value}</dd>
              </div>
            ))}
          </dl>
          {story.website && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a href={story.website} target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold-500 hover:underline">
                Visit {story.website.replace('https://', '')} &rarr;
              </a>
            </div>
          )}
        </div>

        {/* Nominate CTA */}
        <div className="mt-14 py-12 border-t border-b border-gray-100 text-center">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-4">Local Spotlight ATL</p>
          <h3 className="font-serif text-2xl font-bold text-navy-500 mb-3">
            Know a Business Like This?
          </h3>
          <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
            We feature Metro Atlanta&apos;s finest businesses &mdash; always free, always authentic.
          </p>
          <Link href="/nominate"
            className="inline-block px-10 py-3.5 bg-navy-500 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-navy-600 transition-colors">
            Nominate a Business
          </Link>
        </div>

        {/* Newsletter */}
        <div className="mt-14 text-center">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-3">Stay Connected</p>
          <h3 className="font-serif text-xl font-bold text-navy-500 mb-2">Get Weekly Stories</h3>
          <p className="text-gray-400 text-sm mb-6">Join Atlanta readers. One story, every Tuesday. Free.</p>
          <NewsletterSignup />
        </div>

        {/* Related stories */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-5 mb-10">
              <div className="h-px flex-1 bg-gray-100" />
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">Related Stories</p>
              <div className="h-px flex-1 bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer newsletter band */}
      <section className="py-20 bg-navy-500">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-400 mb-4">Local Spotlight ATL</p>
          <h3 className="font-serif text-3xl font-bold text-white mb-3">Atlanta&apos;s Most Inspiring Stories</h3>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">One great story. Every Tuesday. Free forever.</p>
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
