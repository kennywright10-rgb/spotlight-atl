import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { siteConfig } from '@/lib/config'
import { categories } from '@/lib/data/categories'
import { bestOfGuides } from '@/lib/data/bestOf'

export default function Footer() {
  const year = new Date().getFullYear()
  const featuredBestOf = bestOfGuides.slice(0, 5)
  const featuredCategories = categories.slice(0, 6)

  return (
    <footer className="bg-navy-500 text-white">
      {/* Newsletter CTA strip */}
      <div className="bg-gold-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-navy-500">
              Get Atlanta&apos;s most inspiring local stories
            </h3>
            <p className="text-navy-600 text-sm mt-1">Join 5,000+ Metro Atlanta readers. Delivered weekly.</p>
          </div>
          <Link
            href="#newsletter"
            className="bg-navy-500 text-white px-8 py-3 font-bold text-sm tracking-wide hover:bg-navy-600 transition-colors whitespace-nowrap"
          >
            Subscribe Free →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="lg" />
            <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-gray-400 text-sm">{siteConfig.tagline}</p>
            {/* Socials */}
            <div className="mt-6 flex gap-4">
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-colors text-xs font-bold">
                  IG
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-colors text-xs font-bold">
                  FB
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-colors text-xs font-bold">
                  LI
                </a>
              )}
              {siteConfig.social.youtube && (
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400 transition-colors text-xs font-bold">
                  YT
                </a>
              )}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-5">Categories</h4>
            <ul className="space-y-2.5">
              {featuredCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-gray-300 text-sm hover:text-gold-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/categories" className="text-gold-400 text-sm font-semibold hover:underline">
                  All Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Best Of */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-5">Best Of ATL</h4>
            <ul className="space-y-2.5">
              {featuredBestOf.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/best-of-atlanta/${guide.slug}`}
                    className="text-gray-300 text-sm hover:text-gold-400 transition-colors"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/best-of-atlanta" className="text-gold-400 text-sm font-semibold hover:underline">
                  All Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Featured Stories', href: '/featured-stories' },
                { label: 'Nominate a Business', href: '/nominate' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-gray-400 text-xs">{siteConfig.phone}</p>
              <p className="text-gray-400 text-xs mt-1">{siteConfig.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} {siteConfig.siteName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
