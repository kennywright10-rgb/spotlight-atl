import { getFeaturedStories } from '@/lib/data/stories'
import StoryCard from '@/components/shared/StoryCard'
import Button from '@/components/ui/Button'

export default function FeaturedStories() {
  const stories = getFeaturedStories()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2">
              Featured Stories
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-500">
              Meet Metro Atlanta&apos;s Finest
            </h2>
            <div className="w-12 h-1 bg-gold-400 mt-4" />
          </div>
          <Button href="/featured-stories" variant="outline" size="sm">
            View All Stories →
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </section>
  )
}
