import Link from 'next/link'
import { categories } from '@/lib/data/categories'

export default function CategoriesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2">Browse by Industry</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-500">Categories</h2>
          <div className="w-12 h-1 bg-gold-400 mt-4 mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group flex flex-col items-center text-center p-5 bg-white border border-gray-100 hover:border-gold-300 hover:bg-navy-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {cat.icon}
              </span>
              <span className="text-xs font-bold text-navy-500 group-hover:text-white transition-colors tracking-wide leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
