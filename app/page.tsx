import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import Hero from '@/components/home/Hero'
import FeaturedStories from '@/components/home/FeaturedStories'
import BestOfPreview from '@/components/home/BestOfPreview'
import CategoriesGrid from '@/components/home/CategoriesGrid'
import RecentlyFeatured from '@/components/home/RecentlyFeatured'
import WhyLocalSpotlight from '@/components/home/WhyLocalSpotlight'
import Newsletter from '@/components/home/Newsletter'

export const metadata: Metadata = {
  title: `${siteConfig.siteName} | ${siteConfig.tagline}`,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedStories />
      <BestOfPreview />
      <CategoriesGrid />
      <RecentlyFeatured />
      <WhyLocalSpotlight />
      <Newsletter />
    </>
  )
}
