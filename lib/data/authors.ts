import type { Author } from '../types'

export const authors: Author[] = [
  {
    slug: 'ken-wright',
    name: 'Ken Wright',
    title: 'Publisher, Local Spotlight ATL',
    bio: "Ken Wright is the founder and publisher of Local Spotlight ATL, an independently produced feature magazine spotlighting the people and businesses behind Metro Atlanta\u2019s most vibrant communities. A connector at heart, Ken started the publication to give local entrepreneurs and small business owners the kind of thoughtful, long-form coverage usually reserved for major brands. He lives and works in the Atlanta area.",
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    linkedin: 'https://linkedin.com/in/kenwright',
    email: 'ken@localspotlightatl.com',
  },
  {
    slug: 'john-irvine',
    name: 'John Irvine',
    title: 'Contributing Writer, Local Spotlight ATL',
    bio: "John Irvine is a contributing writer for Local Spotlight ATL who covers Metro Atlanta\u2019s business community, food scene, and neighborhood stories. A longtime Atlanta resident, John brings a storyteller\u2019s eye and a neighbor\u2019s perspective to every feature \u2014 hunting down the details that make each business and its owner genuinely worth knowing.",
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    linkedin: 'https://linkedin.com/in/johnirvine',
    email: 'john@localspotlightatl.com',
  },
  {
    slug: 'stephanie-wright',
    name: 'Stephanie Wright',
    title: 'Senior Contributing Editor, Local Spotlight ATL',
    bio: "Stephanie Wright is a senior contributing editor at Local Spotlight ATL with a background in lifestyle journalism and brand storytelling. She specializes in profiles of founders, entrepreneurs, and community leaders who are shaping the Atlanta region \u2014 with a particular interest in the stories behind why people build the things they build.",
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    linkedin: 'https://linkedin.com/in/stephaniewright',
    email: 'stephanie@localspotlightatl.com',
  },
]

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
