import type { Metadata } from 'next'
import { stories } from '@/lib/data/stories'
import { categories } from '@/lib/data/categories'
import StoryCard from '@/components/shared/StoryCard'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Featured Stories',
  description: 'Read the stories of Metro Atlanta\'s most inspiring entrepreneurs, creators, and business owners.',
}

export default function FeaturedStoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-navy-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Local Spotlight ATL</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Featured Stories</h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Meet the entrepreneurs, creators, and business owners shaping Metro Atlanta — one story at a time.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Stories grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-8">
            {/* Category filter */}
            <div className="bg-gray-50 p-6 border border-gray-100">
              <h3 className="font-serif font-bold text-navy-500 text-lg mb-4">Browse by Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`/categories/${cat.slug}`}
                    className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-gold-500 border-b border-gray-100 last:border-0 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      {cat.name}
                    </span>
                    <span className="text-gold-400">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter sidebar */}
            <div className="bg-navy-500 p-6">
              <h3 className="font-serif font-bold text-white text-lg mb-2">Get Weekly Stories</h3>
              <p className="text-gray-300 text-sm mb-4">Join 5,000+ Atlanta readers.</p>
              <NewsletterSignup variant="compact" />
            </div>

            {/* Get featured CTA */}
            <div className="border-2 border-gold-400 p-6 text-center">
              <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2">Free Feature</p>
              <h3 className="font-serif font-bold text-navy-500 text-xl mb-3">Tell Your Story</h3>
              <p className="text-gray-500 text-sm mb-5">
                Join hundreds of Metro Atlanta businesses who&apos;ve been featured. 100% free.
              </p>
              <a
                href="/nominate"
                className="block w-full py-3 bg-navy-500 text-white text-sm font-bold text-center hover:bg-navy-600 transition-colors"
              >
                Get Featured →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
