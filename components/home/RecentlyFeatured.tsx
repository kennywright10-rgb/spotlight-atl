import Link from 'next/link'
import Image from 'next/image'
import { stories } from '@/lib/data/stories'

export default function RecentlyFeatured() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2">Social Proof</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-500">Recently Featured</h2>
          <div className="w-12 h-1 bg-gold-400 mt-4 mx-auto" />
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Join hundreds of Metro Atlanta entrepreneurs and business owners who&apos;ve shared their story with our community.
          </p>
        </div>

        {/* Headshot grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group relative overflow-hidden aspect-square bg-gray-100"
            >
              <Image
                src={story.image}
                alt={story.ownerName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-500/0 group-hover:bg-navy-500/85 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center opacity-0 group-hover:opacity-100">
                <p className="text-white font-bold text-xs leading-tight">{story.businessName}</p>
                <p className="text-gold-400 text-xs mt-1">{story.ownerName}</p>
                <p className="text-white/70 text-xs mt-2 font-semibold">Read Story →</p>
              </div>
            </Link>
          ))}

          {/* Placeholder slots to fill grid */}
          {Array.from({ length: Math.max(0, 12 - stories.length) }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="aspect-square bg-gray-100 flex items-center justify-center"
            >
              <span className="text-gray-300 text-2xl">+</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/featured-stories"
            className="inline-flex items-center gap-2 text-navy-500 font-bold text-sm border-b-2 border-gold-400 pb-1 hover:text-gold-500 transition-colors"
          >
            View All Featured Businesses →
          </Link>
        </div>
      </div>
    </section>
  )
}
