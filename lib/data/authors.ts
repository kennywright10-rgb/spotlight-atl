import type { Author } from '../types'

export const authors: Author[] = [
  {
    slug: 'ken-wright',
    name: 'Ken Wright',
    title: 'Publisher, Local Spotlight ATL',
    bio: "Ken Wright is the founder and publisher of Local Spotlight ATL, a Metro Atlanta lifestyle and business magazine dedicated to telling the stories of the entrepreneurs, builders, and community leaders who make this city one of the most dynamic in the country. Ken has spent years working directly with local businesses on their digital presence and visibility, which gave him a front-row view of just how many extraordinary stories were going untold. Local Spotlight ATL is his answer to that. When he is not interviewing business owners or writing, he is somewhere in North Atlanta — probably at a local coffee shop, talking to the owner.",
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    linkedin: 'https://linkedin.com/in/kenwright',
    email: 'ken@localspotlightatl.com',
  },
]

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
