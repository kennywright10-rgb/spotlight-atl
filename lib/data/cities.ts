import type { City } from '../types'

export const cities: City[] = [
  { slug: 'alpharetta', name: 'Alpharetta', county: 'Fulton', description: 'The Tech City of the South — home to Fortune 500 tech campuses, thriving entrepreneur communities, and one of Georgia\'s most vibrant dining scenes.' },
  { slug: 'milton', name: 'Milton', county: 'Fulton', description: 'Georgia\'s premier equestrian city blends small-town charm with luxury living, attracting high-end builders, boutique businesses, and community-minded entrepreneurs.' },
  { slug: 'roswell', name: 'Roswell', county: 'Fulton', description: 'A historic city with a thriving downtown, exceptional restaurants, and a growing arts and business scene that draws residents from across Metro Atlanta.' },
  { slug: 'johns-creek', name: 'Johns Creek', county: 'Fulton', description: 'Consistently ranked one of the best places to live in America, Johns Creek is home to exceptional schools, medical professionals, and thriving family businesses.' },
  { slug: 'cumming', name: 'Cumming', county: 'Forsyth', description: 'One of Georgia\'s fastest-growing cities, Cumming offers expanding business opportunities, strong community ties, and easy access to the metro area.' },
  { slug: 'suwanee', name: 'Suwanee', county: 'Gwinnett', description: 'An award-winning city with an active downtown, Suwanee Town Center, and a thriving community of entrepreneurs and small business owners.' },
  { slug: 'duluth', name: 'Duluth', county: 'Gwinnett', description: 'A diverse, growing city with a strong international business community and one of the most eclectic dining scenes in Metro Atlanta.' },
  { slug: 'peachtree-corners', name: 'Peachtree Corners', county: 'Gwinnett', description: 'Georgia\'s first smart city — home to technology companies, innovative entrepreneurs, and the Technology Park business district.' },
  { slug: 'sandy-springs', name: 'Sandy Springs', county: 'Fulton', description: 'A thriving city on the northern edge of Atlanta, Sandy Springs hosts Fortune 500 headquarters, luxury medical practices, and a walkable City Springs district.' },
  { slug: 'woodstock', name: 'Woodstock', county: 'Cherokee', description: 'A rapidly growing community with a charming downtown, entrepreneurial spirit, and strong local business culture that brings residents back again and again.' },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}

export const cityPaths = cities.map((c) => ({ city: c.slug }))
