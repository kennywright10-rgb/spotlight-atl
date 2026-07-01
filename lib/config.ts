import type { SiteConfig, NavItem } from './types'

// ─── Site config — swap this per city edition ────────────────────────────────
export const siteConfig: SiteConfig = {
  cityName: 'Atlanta',
  citySlug: 'atlanta',
  siteName: 'Local Spotlight ATL',
  tagline: 'Stories. Businesses. Community.',
  description:
    'Local Spotlight ATL shares the stories of entrepreneurs, creators, and business owners making an impact in Metro Atlanta.',
  url: 'https://localspotlightatl.com',
  phone: '(404) 555-0199',
  email: 'hello@localspotlightatl.com',
  social: {
    instagram: 'https://instagram.com/localspotlightatl',
    facebook: 'https://facebook.com/localspotlightatl',
    linkedin: 'https://linkedin.com/company/localspotlightatl',
    youtube: 'https://youtube.com/@localspotlightatl',
  },
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Featured Stories', href: '/featured-stories' },
  { label: 'Best of Atlanta', href: '/best-of-atlanta' },
  { label: 'Categories', href: '/categories' },
  { label: 'Nominate Someone', href: '/nominate' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// ─── Future city editions — configured here ──────────────────────────────────
export const cityEditions = [
  { name: 'Local Spotlight ATL', slug: 'atlanta', url: 'https://localspotlightatl.com' },
  { name: 'Local Spotlight Charlotte', slug: 'charlotte', url: 'https://localspotlightcharlotte.com' },
  { name: 'Local Spotlight Nashville', slug: 'nashville', url: 'https://localspotlightnashville.com' },
  { name: 'Local Spotlight Tampa', slug: 'tampa', url: 'https://localspotlighttampa.com' },
  { name: 'Local Spotlight Dallas', slug: 'dallas', url: 'https://localspotlightdallas.com' },
]
