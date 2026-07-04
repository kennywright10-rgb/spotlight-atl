import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAuthorBySlug, authors } from '@/lib/data/authors'
import { getStoriesByAuthor } from '@/lib/data/stories'
import { siteConfig } from '@/lib/config'
import StoryCard from '@/components/shared/StoryCard'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return {}
  return {
    title: `${author.name} — ${siteConfig.siteName}`,
    description: author.bio.slice(0, 160),
    openGraph: {
      title: `${author.name} — ${siteConfig.siteName}`,
      description: author.bio.slice(0, 160),
      images: [author.photo],
    },
  }
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const authorStories = getStoriesByAuthor(slug)

  return (
    <>
      {/* Author header */}
      <div className="bg-navy-500 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-2 ring-gold-400/50">
                <Image
                  src={author.photo}
                  alt={author.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="160px"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-400 mb-2">
                {siteConfig.siteName}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                {author.name}
              </h1>
              <p className="text-white/60 text-sm tracking-wide mb-5">{author.title}</p>
              <div className="flex items-center justify-center sm:justify-start gap-4">
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold-400/50 text-gold-400 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-gold-400/10 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {author.email && (
                  <a
                    href={`mailto:${author.email}`}
                    className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/40 hover:text-white/70 transition-colors"
                  >
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 pt-10 border-t border-white/10 max-w-3xl">
            <p className="text-white/70 text-base leading-[1.85]">{author.bio}</p>
          </div>
        </div>
      </div>

      {/* Stories grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-gray-100" />
            <div className="text-center">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500">
                Stories by {author.name}
              </p>
            </div>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          {authorStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {authorStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 text-sm">No stories yet.</p>
          )}
        </div>
      </div>

      {/* Publisher note */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-4">About This Publication</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Local Spotlight ATL is an independently published lifestyle and business magazine covering
            Metro Atlanta. Every story is researched and written by our team. Features are offered at
            no cost to businesses &mdash; our only interest is telling authentic stories that matter to the
            Atlanta community.
          </p>
          <div className="mt-8">
            <Link
              href="/nominate"
              className="inline-block px-8 py-3 bg-navy-500 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-navy-600 transition-colors"
            >
              Nominate a Business
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
