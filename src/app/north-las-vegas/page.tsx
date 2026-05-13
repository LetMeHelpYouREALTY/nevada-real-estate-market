import type { Metadata } from 'next'
import Link from 'next/link'
import { northLasVegasCommunities } from '@/lib/north-las-vegas-communities'

export const metadata: Metadata = {
  title: 'North Las Vegas NV Real Estate | Communities & Homes For Sale',
  description: 'North Las Vegas Nevada real estate expert Dr. Jan Duffy. Browse Aliante, Del Webb North Ranch, Tule Springs, Eldorado & Villages of Tule Springs listings.',
  alternates: { canonical: 'https://nevadarealestatemarket.com/north-las-vegas' },
}

export default function NorthLasVegasPage() {
  return (
    <main>
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            North Las Vegas, NV Real Estate
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            The valley&apos;s fastest-growing city — master-planned communities, new construction, and 55+ living at unbeatable value.
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
            North Las Vegas Communities
          </h2>
          <p className="text-center text-gray-600 mb-10">
            New construction, active adult, and established neighborhoods —
            North Las Vegas delivers more home for your dollar than anywhere else in the valley.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {northLasVegasCommunities.map((c) => (
              <Link
                key={c.slug}
                href={`/north-las-vegas/${c.slug}`}
                className="group border rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition"
              >
                <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 mb-1">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{c.tagline}</p>
                <p className="text-blue-800 font-semibold mb-3">{c.priceRange}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {c.highlights.slice(0, 4).map((h) => (
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
          <h2 className="text-2xl font-bold mb-3">North Las Vegas Is Moving Fast</h2>
          <p className="text-blue-200 mb-6">
            New inventory is limited and the best lots go quickly. Let me show you
            what&apos;s available right now — and what&apos;s coming to market next.
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
