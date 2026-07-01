import Link from 'next/link'
import Image from 'next/image'
import type { BestOfGuide } from '@/lib/types'

interface BestOfCardProps {
  guide: BestOfGuide
}

export default function BestOfCard({ guide }: BestOfCardProps) {
  return (
    <Link
      href={`/best-of-atlanta/${guide.slug}`}
      className="group relative flex flex-col overflow-hidden bg-white border border-gray-100 hover:border-gold-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/60 via-transparent" />
        {/* City pill */}
        <span className="absolute top-3 left-3 bg-navy-500 text-white text-xs font-bold px-2.5 py-1 tracking-wide">
          {guide.city}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">
          {guide.category}
        </span>
        <h3 className="mt-1.5 font-serif font-bold text-navy-500 text-base leading-snug group-hover:text-gold-500 transition-colors">
          {guide.title}
        </h3>
        <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-2">
          {guide.excerpt}
        </p>
        <div className="mt-auto pt-4 text-xs font-bold text-gold-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          View Guide →
        </div>
      </div>
    </Link>
  )
}
