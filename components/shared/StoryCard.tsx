import Link from 'next/link'
import Image from 'next/image'
import type { Story } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import { CategoryBadge } from '@/components/ui/Badge'

interface StoryCardProps {
  story: Story
  variant?: 'default' | 'horizontal' | 'compact'
}

export default function StoryCard({ story, variant = 'default' }: StoryCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link
        href={`/stories/${story.slug}`}
        className="group flex gap-5 bg-white border border-gray-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 p-4"
      >
        <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="112px"
          />
        </div>
        <div className="min-w-0">
          <CategoryBadge label={story.category} />
          <h3 className="mt-2 font-serif font-bold text-navy-500 text-sm leading-snug group-hover:text-gold-500 transition-colors line-clamp-2">
            {story.title}
          </h3>
          <p className="mt-1 text-xs text-gray-400">{formatDate(story.publishDate)}</p>
        </div>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link
        href={`/stories/${story.slug}`}
        className="group block"
      >
        <CategoryBadge label={story.category} />
        <h3 className="mt-2 font-serif font-bold text-navy-500 text-sm leading-snug group-hover:text-gold-500 transition-colors line-clamp-2">
          {story.title}
        </h3>
        <p className="mt-1 text-xs text-gray-400">{formatDate(story.publishDate)}</p>
      </Link>
    )
  }

  // Default card
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group flex flex-col bg-white border border-gray-100 hover:border-gold-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <CategoryBadge label={story.category} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif font-bold text-navy-500 text-lg leading-snug group-hover:text-gold-500 transition-colors line-clamp-2">
          {story.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
          {story.excerpt}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <span className="text-xs text-gray-400">{formatDate(story.publishDate)}</span>
          <span className="text-xs font-bold text-gold-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read Story →
          </span>
        </div>
      </div>
    </Link>
  )
}
