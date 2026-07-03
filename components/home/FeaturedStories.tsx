import { getFeaturedStories } from '@/lib/data/stories'
import StoryCard from '@/components/shared/StoryCard'
import Link from 'next/link'

export default function FeaturedStories() {
  const stories = getFeaturedStories()
  const [lead, ...rest] = stories
  const secondary = rest.slice(0, 2)
  const grid = rest.slice(2)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial section header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-gray-100" />
          <div className="text-center">
            <p className="editorial-label">Featured Stories</p>
          </div>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Lead editorial grid */}
        {lead && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 mb-0.5">
            {/* Lead story — spans 2 cols */}
            <div className="lg:col-span-2">
              <StoryCard story={lead} variant="feature" />
            </div>

            {/* Secondary stories — stacked right */}
            <div className="flex flex-col gap-0.5">
              {secondary.map((story) => (
                <StoryCard key={story.slug} story={story} variant="feature" />
              ))}
            </div>
          </div>
        )}

        {/* Supporting story grid */}
        {grid.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {grid.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        )}

        {/* View all */}
        <div className="mt-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-100" />
          <Link
            href="/featured-stories"
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-navy-500 hover:text-gold-500 transition-colors whitespace-nowrap px-4"
          >
            View All Stories →
          </Link>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
      </div>
    </section>
  )
}
