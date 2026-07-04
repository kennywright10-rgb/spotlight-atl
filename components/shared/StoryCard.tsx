import Link from 'next/link'
import Image from 'next/image'
import type { Story } from '@/lib/types'
import { formatDate } from '@/lib/utils'

interface StoryCardProps {
  story: Story
  variant?: 'default' | 'horizontal' | 'compact' | 'feature'
}

export default function StoryCard({ story, variant = 'default' }: StoryCardProps) {

  // Feature variant
  if (variant === 'feature') {
    return (
      <Link href={`/stories/${story.slug}`} className="group block relative overflow-hidden">
        <div className="relative h-[480px] md:h-[560px] overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-500/95 via-navy-500/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <p className="editorial-label-light mb-3">{story.category} · {story.location}</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-gold-300 transition-colors duration-300 max-w-xl">
            {story.title}
          </h2>
          <p className="mt-3 text-white/60 text-sm leading-relaxed line-clamp-2 max-w-lg">
            {story.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {story.authorSlug ? (
              <Link href={`/authors/${story.authorSlug}`} onClick={(e) => e.stopPropagation()}
                className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-gold-300 transition-colors">
                By {story.author}
              </Link>
            ) : (
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">By {story.author}</span>
            )}
            <span className="text-white/20">·</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">{formatDate(story.publishDate)}</span>
          </div>
        </div>
      </Link>
    )
  }

  // Horizontal variant
  if (variant === 'horizontal') {
    return (
      <Link href={`/stories/${story.slug}`} className="group flex gap-5 py-5 border-b border-gray-100 last:border-0">
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="96px"
          />
        </div>
        <div className="min-w-0 flex flex-col justify-center">
          <p className="editorial-label mb-1.5">{story.category}</p>
          <h3 className="font-serif font-bold text-navy-500 text-sm leading-snug group-hover:text-gold-500 transition-colors line-clamp-2">
            {story.title}
          </h3>
          <p className="mt-1.5 text-[10px] tracking-wide text-gray-400 uppercase">{formatDate(story.publishDate)}</p>
        </div>
      </Link>
    )
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <Link href={`/stories/${story.slug}`} className="group block py-4 border-b border-gray-100 last:border-0">
        <p className="editorial-label mb-1.5">{story.category}</p>
        <h3 className="font-serif font-bold text-navy-500 text-sm leading-snug group-hover:text-gold-500 transition-colors line-clamp-2">
          {story.title}
        </h3>
        <p className="mt-1.5 text-[10px] tracking-wide text-gray-400 uppercase">{formatDate(story.publishDate)}</p>
      </Link>
    )
  }

  // Default card
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group flex flex-col bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 pt-5 pb-6 px-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="editorial-label">{story.category}</span>
          <span className="text-gray-200">·</span>
          <span className="text-[10px] tracking-wide uppercase text-gray-400">{story.location}</span>
        </div>
        <h3 className="font-serif font-bold text-navy-500 text-lg leading-snug group-hover:text-gold-500 transition-colors duration-300 line-clamp-2">
          {story.title}
        </h3>
        <p className="mt-2.5 text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">
          {story.excerpt}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          {story.authorSlug ? (
            <Link href={`/authors/${story.authorSlug}`} onClick={(e) => e.stopPropagation()}
              className="text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-gold-500 transition-colors">
              {story.author}
            </Link>
          ) : (
            <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400">{story.author}</span>
          )}
          <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400">{formatDate(story.publishDate)}</span>
        </div>
      </div>
    </Link>
  )
}
