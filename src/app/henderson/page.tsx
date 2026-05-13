import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Henderson NV Real Estate | Communities & Homes For Sale',
  description: 'Henderson Nevada real estate expert Dr. Jan Duffy. Browse Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, Anthem & Inspirada listings.',
  alternates: { canonical: 'https://nevadarealestatemarket.com/henderson' },
}

const communities = [
  {
    slug: 'lake-las-vegas',
    name: 'Lake Las Vegas',
    tagline: 'Resort living on a 320-acre private lake',
    priceRange: '$600K – $5M+',
    highlights: ['Lakefront estates', 'Golf courses', 'Marina & water sports', 'Resort amenities'],
  },
  {
    slug: 'mcdonald-ranch',
    name: 'MacDonald Ranch',
    tagline: 'Master-planned luxury in east Henderson',
    priceRange: '$550K – $1.8M',
    highlights: ['Guard-gated options', 'Top-rated schools', 'Desert Willow Golf', 'Mountain views'],
  },
  {
    slug: 'green-valley-ranch',
    name: 'Green Valley Ranch',
    tagline: 'Established community with everything nearby',
    priceRange: '$400K – $1.2M',
    highlights: ['GVR District shopping', 'Award-winning schools', 'Parks & trails', 'Casino resort'],
  },
  {
    slug: 'seven-hills',
    name: 'Seven Hills',
    tagline: 'Elevated living with panoramic valley views',
    priceRange: '$500K – $2.5M',
    highlights: ['Golf course homes', 'Custom estates', 'Gated entries', 'Strip & mountain views'],
  },
  {
    slug: 'anthem',
    name: 'Anthem',
    tagline: 'Del Webb\'s premier active-adult community',
    priceRange: '$450K – $1.5M',
    highlights: ['Anthem Country Club', '55+ options', 'Hiking trails', 'Community center'],
  },
  {
    slug: 'inspirada',
    name: 'Inspirada',
    tagline: 'West Henderson\'s newest master plan',
    priceRange: '$450K – $900K',
    highlights: ['New construction', 'Pools & parks', 'Top builders', 'Walkable design'],
  },
]

export default function HendersonPage() {
  return (
    <main>
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Henderson, NV Real Estate
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Six master-planned communities. One local expert who knows every sale.
          </p>
          <a
            href="tel:7022221964"
            className="inline-block bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Call Dr. Jan · 702-222-1964
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-950 mb-2 text-center">
            Henderson Communities
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Each neighborhood has its own personality — and its own price points.
            Here&apos;s what to expect in every one.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((c) => (
              <Link
                key={c.slug}
                href={`/henderson/${c.slug}`}
                className="group border rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition"
              >
                <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 mb-1">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{c.tagline}</p>
                <p className="text-blue-800 font-semibold mb-3">{c.priceRange}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="text-yellow-500">✦</span> {h}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which Community Fits?</h2>
          <p className="text-blue-200 mb-6">
            35+ years in Henderson means I know which street has the view and
            which builder finishes hold up. Let&apos;s find your match.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-blue-950 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Get a Free Community Comparison
          </a>
        </div>
      </section>
    </main>
  )
}
