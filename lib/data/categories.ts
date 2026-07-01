import type { Category } from '../types'

export const categories: Category[] = [
  { slug: 'wellness', name: 'Wellness', icon: '🧘', description: 'IV therapy, med spas, holistic health, and recovery centers.' },
  { slug: 'beauty', name: 'Beauty', icon: '💅', description: 'Salons, aesthetics, skincare, and beauty entrepreneurs.' },
  { slug: 'restaurants', name: 'Restaurants', icon: '🍽️', description: 'Chefs, restaurateurs, and food entrepreneurs across Metro Atlanta.' },
  { slug: 'fitness', name: 'Fitness', icon: '💪', description: 'Personal trainers, gyms, studios, and fitness coaches.' },
  { slug: 'home-services', name: 'Home Services', icon: '🏠', description: 'Builders, contractors, HVAC, roofing, and home professionals.' },
  { slug: 'real-estate', name: 'Real Estate', icon: '🏡', description: 'Realtors, investors, and property professionals.' },
  { slug: 'retail', name: 'Retail', icon: '🛍️', description: 'Local shops, boutiques, and retail entrepreneurs.' },
  { slug: 'medical', name: 'Medical', icon: '⚕️', description: 'Doctors, dentists, specialists, and healthcare providers.' },
  { slug: 'family-services', name: 'Family Services', icon: '👨‍👩‍👧', description: 'Childcare, tutoring, pediatrics, and family-focused businesses.' },
  { slug: 'professional-services', name: 'Professional Services', icon: '💼', description: 'Attorneys, accountants, consultants, and business services.' },
  { slug: 'nonprofits', name: 'Nonprofits', icon: '❤️', description: 'Community organizations, foundations, and mission-driven businesses.' },
  { slug: 'coffee-shops', name: 'Coffee Shops', icon: '☕', description: 'Independent cafés, roasters, and coffee entrepreneurs.' },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
