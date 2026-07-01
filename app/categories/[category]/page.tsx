import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, categories } from '@/lib/data/categories'
import { getStoriesByCategory } from '@/lib/data/stories'
import StoryCard from '@/components/shared/StoryCard'
import Link from 'next/link'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) return {}
  return {
    title: `${cat.name} Businesses in Metro Atlanta`,
    description: cat.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()

  const stories = getStoriesByCategory(cat.name)

  return (
    <div className="min-h-screen">
      <section className="bg-navy-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/categories" className="text-gold-400 text-xs font-bold tracking-wider uppercase hover:underline">
            ← All Categories
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-5xl">{cat.icon}</span>
            <div>
              <h1 className="font-serif text-4xl font-bold text-white">{cat.name}</h1>
              <p className="text-gray-300 mt-1">{cat.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {stories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h2 className="font-serif text-2xl font-bold text-navy-500 mb-3">
              Stories Coming Soon
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              We&apos;re actively seeking {cat.name} businesses to feature. Know someone great?
            </p>
            <Link href="/nominate" className="inline-block px-8 py-3 bg-navy-500 text-white font-bold text-sm hover:bg-navy-600 transition-colors">
              Nominate a {cat.name} Business →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
