/**
 * Local Spotlight ATL — Image Generator
 * Uses Gemini 2.0 Flash image generation
 *
 * Run from the project root:
 *   node scripts/generate-images.mjs
 *
 * Requires Node 18+. No npm install needed.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const API_KEY = process.env.GEMINI_API_KEY || 'YOUR_API_KEY_HERE'
const OUT = path.join(__dirname, '..', 'public', 'images')
const MODEL = 'gemini-2.0-flash-preview-image-generation'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

async function generate(prompt, filePath) {
  const fullPath = path.join(OUT, filePath)
  fs.mkdirSync(path.dirname(fullPath), { recursive: true })

  console.log(`⏳ Generating: ${filePath}`)
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['IMAGE'] },
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`API error ${res.status}: ${err}`)
  }

  const data = await res.json()
  const part = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)
  if (!part) throw new Error(`No image in response: ${JSON.stringify(data).slice(0, 300)}`)

  const buffer = Buffer.from(part.inlineData.data, 'base64')
  const ext = part.inlineData.mimeType === 'image/png' ? '.png' : '.jpg'
  const finalPath = fullPath.replace(/\.(jpg|png)$/, ext)
  fs.writeFileSync(finalPath, buffer)
  console.log(`✓ Saved ${path.basename(finalPath)} (${Math.round(buffer.length / 1024)}KB)`)

  await new Promise((r) => setTimeout(r, 3000))
}

async function main() {
  console.log('\n🎨 Local Spotlight ATL — Image Generator\n')

  // ── Hero ─────────────────────────────────────────────────────────────────────
  await generate(
    'Aerial editorial photograph of Atlanta Georgia skyline at golden hour, Midtown skyscrapers reflecting warm gold and amber tones, dramatic cinematic lighting, professional magazine photography, wide establishing shot, photorealistic, no text',
    'hero.jpg'
  )

  // ── Story thumbnails ─────────────────────────────────────────────────────────
  await generate(
    'Bright modern wellness clinic interior in Alpharetta Georgia, IV therapy lounge, warm lighting, minimalist luxury decor, medical professional in background, editorial lifestyle photography, photorealistic, no text',
    'stories/thrive-wellness.jpg'
  )

  await generate(
    'Luxury custom home under construction in Milton Georgia, skilled builder reviewing blueprints, golden hour natural light, upscale residential construction, editorial photography, photorealistic, no text',
    'stories/cornerstone-builders.jpg'
  )

  await generate(
    'Professional real estate agent showing a beautiful Johns Creek Georgia home, manicured suburban neighborhood, spring afternoon light, editorial lifestyle photography, photorealistic, no text',
    'stories/hayes-realty.jpg'
  )

  await generate(
    'Warmly lit soul food restaurant interior in Roswell Georgia, colorful dishes on table, chef visible in open kitchen, community gathering atmosphere, editorial food photography, photorealistic, no text',
    'stories/soulful-kitchen.jpg'
  )

  await generate(
    'Modern fitness studio interior in Alpharetta Georgia, high-end gym equipment, coach training a client, bright natural light, editorial lifestyle photography, photorealistic, no text',
    'stories/atlas-fitness.jpg'
  )

  await generate(
    'Community volunteers in Sandy Springs Georgia packing donation boxes, diverse group of people smiling, warm community center interior, bright hopeful editorial photography, photorealistic, no text',
    'stories/roots-wings.jpg'
  )

  // ── Best Of covers ───────────────────────────────────────────────────────────
  await generate(
    'Close-up editorial photograph of IV drip infusion in a luxury wellness clinic, clean medical aesthetic, warm soft bokeh background, gold and white tones, photorealistic, no text',
    'best-of/iv-therapy.jpg'
  )

  await generate(
    'Luxurious medical spa treatment room in Alpharetta Georgia, elegant white decor, soft lighting, professional esthetician preparing treatment, upscale wellness photography, photorealistic, no text',
    'best-of/med-spas.jpg'
  )

  await generate(
    'Artisan coffee shop interior in Alpharetta Georgia, barista crafting latte art, warm Edison bulbs, exposed brick, morning light through windows, editorial cafe photography, photorealistic, no text',
    'best-of/coffee-shops.jpg'
  )

  await generate(
    'Stunning custom luxury home exterior in Milton Georgia, stone facade, manicured landscaping, blue sky, architectural magazine photography, photorealistic, no text',
    'best-of/home-builders.jpg'
  )

  await generate(
    'Confident professional realtor outside a beautiful Johns Creek Georgia home, summer afternoon light, editorial lifestyle photography, photorealistic, no text',
    'best-of/realtors.jpg'
  )

  await generate(
    'Hyperbaric oxygen therapy chamber in a modern Atlanta medical clinic, clean clinical environment, soft blue lighting, advanced medical technology, editorial healthcare photography, photorealistic, no text',
    'best-of/hyperbaric.jpg'
  )

  console.log('\n✅ All 13 images generated!\n')
  console.log('Saved to: public/images/')
}

main().catch((err) => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
