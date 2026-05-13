import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Nevada Real Estate Market</h3>
          <p className="text-sm leading-relaxed">
            Expert real estate guidance for Las Vegas and Henderson, Nevada. Dr. Jan Duffy brings 35+ years of local market knowledge to every transaction.
          </p>
          <p className="text-xs text-gray-500 mt-3">NV License #S.0197614.LLC</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Henderson Communities</h3>
          <ul className="space-y-1 text-sm">
            {[
              ["Lake Las Vegas", "/henderson/lake-las-vegas"],
              ["MacDonald Ranch", "/henderson/macdonald-ranch"],
              ["Green Valley Ranch", "/henderson/green-valley-ranch"],
              ["Seven Hills", "/henderson/seven-hills"],
              ["Anthem", "/henderson/anthem"],
              ["Inspirada", "/henderson/inspirada"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Dr. Jan Duffy</h3>
          <div className="space-y-2 text-sm">
            <p>
              <a href="tel:7025001955" className="hover:text-white transition-colors font-semibold text-blue-300">
                📞 702-500-1955
              </a>
            </p>
            <p>
              <a href="mailto:janet.duffy@bhhsnv.com" className="hover:text-white transition-colors">
                ✉️ janet.duffy@bhhsnv.com
              </a>
            </p>
            <p className="text-gray-400">
              3185 St Rose Pkwy, Suite 101<br />
              Henderson, NV 89052
            </p>
            <p className="text-gray-400">
              Berkshire Hathaway HomeServices<br />
              Nevada Properties
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900 py-4 px-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
        <p>© {year} Dr. Jan Duffy | BHHS Nevada Properties. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
