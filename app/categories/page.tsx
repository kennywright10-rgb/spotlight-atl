import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/lib/data/categories'

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse Metro Atlanta business stories by industry category.',
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Browse by Industry</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Categories</h1>
          <p className="mt-4 text-gray-300 max-w-xl">Find stories and businesses by industry across Metro Atlanta.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group flex flex-col p-6 bg-white border border-gray-100 hover:border-gold-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                {cat.icon}
              </span>
              <h2 className="font-serif font-bold text-navy-500 text-xl mb-2 group-hover:text-gold-500 transition-colors">
                {cat.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{cat.description}</p>
              <span className="mt-4 text-xs font-bold text-gold-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Browse Stories →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
