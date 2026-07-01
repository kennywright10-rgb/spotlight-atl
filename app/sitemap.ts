import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { stories } from '@/lib/data/stories'
import { bestOfGuides } from '@/lib/data/bestOf'
import { categories } from '@/lib/data/categories'
import { cities } from '@/lib/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/featured-stories`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/best-of-atlanta`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/categories`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/nominate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const storyPages: MetadataRoute.Sitemap = stories.map((s) => ({
    url: `${base}/stories/${s.slug}`,
    lastModified: new Date(s.publishDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const bestOfPages: MetadataRoute.Sitemap = bestOfGuides.map((g) => ({
    url: `${base}/best-of-atlanta/${g.slug}`,
    lastModified: new Date(g.updatedDate ?? g.publishDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...storyPages, ...bestOfPages, ...categoryPages, ...cityPages]
}
