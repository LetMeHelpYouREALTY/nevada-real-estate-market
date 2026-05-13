import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Henderson & Las Vegas Real Estate Expert',
  description: 'Meet Dr. Jan Duffy — 35+ years selling Las Vegas and Henderson real estate, $127M+ in career sales, 500+ families helped. BHHS Nevada Properties.',
  alternates: { canonical: 'https://nevadarealestatemarket.com/about' },
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Dr. Jan Duffy
          </h1>
          <p className="text-xl text-blue-200">
            Henderson &amp; Las Vegas Real Estate Expert · BHHS Nevada Properties
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4 max-w-4xl mx-auto prose">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2>35+ Years of Las Vegas Real Estate Expertise</h2>
            <p>
              Dr. Jan Duffy has guided 500+ Nevada families through real estate
              transactions totaling more than $127 million in career sales. As a
              licensed Nevada REALTOR® (S.0197614.LLC) with Berkshire Hathaway
              HomeServices Nevada Properties, she brings doctoral-level market
              analysis combined with boots-on-the-ground Henderson knowledge.
            </p>
            <p>
              Her specializations include Henderson luxury communities — Lake Las
              Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, Anthem, and
              Inspirada — as well as Summerlin West, 55+ active adult communities
              (Sun City, Del Webb), and new construction throughout the Las Vegas
              Valley.
            </p>
            <h2>Why Henderson?</h2>
            <p>
              Henderson consistently ranks as one of the safest and most
              livable cities in the United States. Dr. Jan has watched it grow
              from a quiet suburb into a destination city with world-class
              amenities, resort-style master-planned communities, and a booming
              job market. She knows the micro-market conditions inside every
              zip code — which neighborhoods hold value, which are appreciating
              fastest, and where the best new construction deals are hiding.
            </p>
            <h2>Education &amp; Credentials</h2>
            <p>
              Dr. Duffy holds a doctorate that informs her data-driven approach
              to pricing strategy and market analysis. Her academic background
              combined with 35+ years of transaction experience means clients
              get research-grade insights delivered in plain English.
            </p>
            <h2>Berkshire Hathaway HomeServices Nevada Properties</h2>
            <p>
              As part of the BHHS network — one of the most recognized brands in
              residential real estate — Dr. Jan has access to a global referral
              network, best-in-class marketing tools, and the trust that comes
              with the Berkshire Hathaway name.
            </p>
          </div>

          {/* Stats sidebar */}
          <aside>
            <div className="bg-blue-950 text-white rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">By the Numbers</h3>
              <ul className="space-y-4 not-prose">
                {[
                  { n: '35+', label: 'Years in Las Vegas Real Estate' },
                  { n: '500+', label: 'Families Helped' },
                  { n: '$127M+', label: 'Career Sales Volume' },
                  { n: '15', label: 'Local Market Specializations' },
                ].map((item) => (
                  <li key={item.n} className="border-b border-blue-800 pb-3">
                    <div className="text-3xl font-bold text-yellow-400">{item.n}</div>
                    <div className="text-sm text-blue-200">{item.label}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 not-prose">
                <a
                  href="tel:7022221964"
                  className="block w-full bg-yellow-400 text-blue-950 font-bold text-center py-3 rounded-lg hover:bg-yellow-300 transition"
                >
                  Call 702-222-1964
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gray-50 border-t py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-950 mb-3">
            Ready to Buy or Sell in Henderson?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free market analysis based on this week&apos;s actual closed sales —
            not automated estimates.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-950 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Get Your Free Market Analysis
          </a>
        </div>
      </section>
    </main>
  )
}
