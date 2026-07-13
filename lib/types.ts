// ─── Core content types ───────────────────────────────────────────────────────

export interface Story {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  authorSlug?: string
  publishDate: string
  image: string
  featured: boolean
  businessName: string
  ownerName: string
  location: string
  industry: string
  website?: string
  founded?: string
  tags: string[]
  imagePosition?: string
  interview?: InterviewQuestion[]
}

export interface Author {
  slug: string
  name: string
  title: string
  bio: string
  photo: string
  linkedin?: string
  twitter?: string
  email?: string
}

export interface InterviewQuestion {
  question: string
  answer: string
  imageAfter?: { src: string; caption: string }
}

export interface BestOfGuide {
  slug: string
  title: string
  category: string
  city: string
  excerpt: string
  image: string
  businesses: BestOfBusiness[]
  publishDate: string
  updatedDate?: string
}

export interface BestOfBusiness {
  rank: number
  name: string
  description: string
  address: string
  phone: string
  website: string
  services: string[]
  whyWeLikeThem: string
  image: string
}

export interface Category {
  slug: string
  name: string
  icon: string
  description: string
  count?: number
}

export interface City {
  slug: string
  name: string
  county: string
  description: string
  population?: string
  image?: string
}

export interface SiteConfig {
  cityName: string
  citySlug: string
  siteName: string
  tagline: string
  description: string
  url: string
  phone: string
  email: string
  social: {
    instagram?: string
    facebook?: string
    linkedin?: string
    youtube?: string
  }
}

export interface NavItem {
  label: string
  href: string
}

export interface AwardBadge {
  tier: 'winner' | 'gold' | 'silver'
  year: number
  label: string
}
