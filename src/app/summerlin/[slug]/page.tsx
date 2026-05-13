import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { summerlinCommunities, getSummerlinCommunity } from '@/lib/summerlin-communities'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return summerlinCommunities.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const community = getSummerlinCommunity(slug)
  if (!community) return {}
  return {
    title: `${community.name} Homes For Sale | Summerlin NV Real Estate`,
    description: `${community.name} Summerlin NV — ${community.tagline}. Homes ${community.priceRange}. Dr. Jan Duffy, BHHS Nevada Properties · 702-222-1964.`,
    alternates: { canonical: `https://nevadarealestatemarket.com/summerlin/${slug}` },
  }
}

export default async function SummerlinCommunityPage({ params }: Props) {
  const { slug } = await params
  const community = getSummerlinCommunity(slug)
  if (!community) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    url: `https://nevadarealestatemarket.com/summerlin/${slug}`,
    telephone: '702-222-1964',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10777 W. Twain Ave, Suite 333',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89135',
      addressCountry: 'US',
    },
    areaServed: community.name,
    description: community.description,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="bg-blue-950 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-yellow-400 text-sm font-semibold mb-2">
              Summerlin, NV Communities
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {community.name}
            </h1>
            <p className="text-xl text-blue-200 mb-2">{community.tagline}</p>
            <p className="text-2xl font-bold text-yellow-400">{community.priceRange}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 prose">
              <h2>About {community.name}</h2>
              <p>{community.description}</p>

              <h2>Community Highlights</h2>
              <ul>
                {community.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <h2>Best For</h2>
              <ul>
                {community.bestFor.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="bg-blue-950 text-white rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-yellow-400 mb-4">
                  Thinking About {community.name}?
                </h3>
                <p className="text-blue-200 text-sm mb-6">
                  I track every sale in this community. Let me pull fresh comps
                  and tell you exactly what&apos;s available right now.
                </p>
                <a
                  href="tel:7022221964"
                  className="block w-full bg-yellow-400 text-blue-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition mb-3"
                >
                  Call 702-222-1964
                </a>
                <a
                  href="/contact"
                  className="block w-full border border-yellow-400 text-yellow-400 font-semibold text-center py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  Request Market Report
                </a>
                <p className="text-blue-300 text-xs mt-4 text-center">
                  Dr. Jan Duffy · BHHS Nevada Properties<br />
                  NV License #S.0197614.LLC
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t py-8 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <a href="/summerlin" className="text-blue-700 hover:underline font-medium">
              ← All Summerlin Communities
            </a>
            <a href="/contact" className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition text-sm font-semibold">
              Get Free Market Analysis
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
