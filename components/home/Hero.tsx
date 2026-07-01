import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1600&q=85"
          alt="Atlanta skyline"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/95 via-navy-500/80 to-navy-500/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">
              Metro Atlanta&apos;s Local Business Publication
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Discover the People Behind
            <span className="block text-gold-400 mt-1">Metro Atlanta&apos;s</span>
            Best Businesses
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-xl">
            Local Spotlight ATL shares the stories of entrepreneurs, creators, and business owners
            making an impact in our community.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/nominate"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-navy-500 font-bold text-sm tracking-wide hover:bg-gold-300 transition-colors duration-200"
            >
              Be Featured →
            </Link>
            <Link
              href="/nominate"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-sm tracking-wide hover:bg-white hover:text-navy-500 transition-colors duration-200"
            >
              Nominate a Business
            </Link>
          </div>

          {/* Trust chips */}
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              '240+ Stories Published',
              '12K Monthly Readers',
              '40+ Neighborhoods',
              '100% Free to Get Featured',
            ].map((chip) => (
              <span
                key={chip}
                className="text-xs text-gray-300 flex items-center gap-1.5"
              >
                <span className="text-gold-400">✓</span> {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
