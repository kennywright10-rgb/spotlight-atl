import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1800&q=90"
          alt="Atlanta skyline"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient — let photo breathe at top, darken toward bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-500/20 via-navy-500/40 to-navy-500/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/50 via-transparent to-transparent" />
      </div>

      {/* Editorial masthead stripe at top */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50">
          Metro Atlanta Edition
        </span>
        <span className="hidden md:block text-[10px] font-bold tracking-[0.3em] uppercase text-white/50">
          Stories · Businesses · Community
        </span>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50">
          Est. 2024
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="editorial-label-light mb-6 tracking-[0.35em]">
          Metro Atlanta&apos;s Lifestyle &amp; Business Magazine
        </p>

        <h1 className="font-serif font-bold text-white leading-[1.05] max-w-4xl">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">The People</span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-gold-400 mt-1">Behind the</span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">Best of Atlanta</span>
        </h1>

        <p className="mt-8 text-white/70 text-base md:text-lg max-w-xl leading-relaxed font-light tracking-wide">
          In-depth profiles of the entrepreneurs, creators, and community builders shaping Metro Atlanta.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/featured-stories"
            className="px-10 py-4 bg-white text-navy-500 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300"
          >
            Read the Stories
          </Link>
          <Link
            href="/nominate"
            className="px-10 py-4 border border-white/60 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-colors duration-300"
          >
            Get Featured Free
          </Link>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex flex-col items-center pb-8 gap-2">
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
