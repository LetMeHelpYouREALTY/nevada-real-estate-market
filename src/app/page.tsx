import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nevada Real Estate Market | Las Vegas & Henderson Homes | Dr. Jan Duffy",
  description: "Nevada real estate market news, Las Vegas and Henderson neighborhood guides, and expert insights from Dr. Jan Duffy — BHHS Nevada Properties. 35+ years, 500+ families served.",
};

const communities = [
  { name: "Lake Las Vegas", desc: "Resort-style lakefront living with luxury custom homes and stunning water views.", href: "/henderson/lake-las-vegas" },
  { name: "MacDonald Ranch", desc: "Guard-gated luxury in Henderson with panoramic views and top-tier amenities.", href: "/henderson/macdonald-ranch" },
  { name: "Green Valley Ranch", desc: "Established Henderson community with diverse price points and easy freeway access.", href: "/henderson/green-valley-ranch" },
  { name: "Seven Hills", desc: "Elevated Henderson living with golf course properties and mountain views.", href: "/henderson/seven-hills" },
  { name: "Anthem", desc: "Master-planned Henderson community known for quality construction and community amenities.", href: "/henderson/anthem" },
  { name: "Inspirada", desc: "Modern Henderson community with contemporary homes and resort-style pool complex.", href: "/henderson/inspirada" },
];

const stats = [
  { value: "35+", label: "Years in Las Vegas" },
  { value: "500+", label: "Families Served" },
  { value: "$127M+", label: "Career Sales" },
  { value: "#1", label: "BHHS Nevada" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">Nevada Real Estate Expert</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Las Vegas &amp; Henderson<br />Real Estate Market
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Local market knowledge built over 35 years. Real numbers from this week&apos;s sales — not national averages.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:7025001955"
              className="bg-white text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call 702-500-1955
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Get Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-blue-900">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Henderson Communities */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 text-center">Henderson Communities</h2>
        <p className="text-gray-500 text-center mb-10">Serving Lake Las Vegas, MacDonald Ranch, Green Valley Ranch, Seven Hills, Anthem &amp; Inspirada</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <h3 className="font-bold text-blue-900 text-lg mb-2 group-hover:text-blue-700">{c.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              <span className="mt-3 inline-block text-blue-700 text-sm font-medium">View homes →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Market Insight CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">What&apos;s the Nevada Market Doing Right Now?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            I pull fresh comparables weekly from GLVAR Matrix — the only source of truth for Las Vegas MLS data. No Zestimates. No national averages. Just real sales from your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/blog" className="bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
              Read Market News
            </Link>
            <Link href="/contact" className="border border-blue-800 text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Request Free CMA
            </Link>
          </div>
        </div>
      </section>

      {/* Dr. Jan bio strip */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-2">Your Local Expert</p>
            <h2 className="text-2xl font-bold mb-3">Dr. Jan Duffy, REALTOR®</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              35+ years in Las Vegas. PhD-level market analysis. Brooklyn-direct approach. I know every street in Henderson and I&apos;ll tell you exactly what your home is worth — or what you should pay — based on this week&apos;s real sales.
            </p>
            <p className="text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties<br />
              NV License #S.0197614.LLC · 3185 St Rose Pkwy Suite 101, Henderson NV 89052
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-max">
            <a href="tel:7025001955" className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors">
              📞 702-500-1955
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              Send Message
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy | Nevada Real Estate Market",
            "description": "Las Vegas and Henderson Nevada real estate expert with 35+ years experience.",
            "url": "https://nevadarealestatemarket.com",
            "telephone": "+17025001955",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3185 St Rose Pkwy, Suite 101",
              "addressLocality": "Henderson",
              "addressRegion": "NV",
              "postalCode": "89052",
              "addressCountry": "US",
            },
            "geo": { "@type": "GeoCoordinates", "latitude": 36.0163, "longitude": -115.0874 },
            "openingHours": "Mo-Su 06:00-21:00",
            "areaServed": ["Henderson, NV", "Las Vegas, NV", "Clark County, NV"],
            "employee": {
              "@type": "Person",
              "name": "Dr. Jan Duffy",
              "jobTitle": "REALTOR®",
              "telephone": "+17025001955",
            },
          }),
        }}
      />
    </>
  );
}
