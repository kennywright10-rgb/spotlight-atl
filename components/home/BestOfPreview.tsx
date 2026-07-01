import { bestOfGuides } from '@/lib/data/bestOf'
import BestOfCard from '@/components/shared/BestOfCard'
import Button from '@/components/ui/Button'

export default function BestOfPreview() {
  const preview = bestOfGuides.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2">
              Curated Guides
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-500">
              Best of Atlanta
            </h2>
            <div className="w-12 h-1 bg-gold-400 mt-4" />
            <p className="mt-4 text-gray-500 max-w-lg">
              Researched recommendations featuring exceptional local businesses across Metro Atlanta.
            </p>
          </div>
          <Button href="/best-of-atlanta" variant="outline" size="sm">
            View All Guides →
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((guide) => (
            <BestOfCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  )
}
