"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "Henderson", href: "/henderson", sub: [
    { label: "Lake Las Vegas", href: "/henderson/lake-las-vegas" },
    { label: "MacDonald Ranch", href: "/henderson/macdonald-ranch" },
    { label: "Green Valley Ranch", href: "/henderson/green-valley-ranch" },
    { label: "Seven Hills", href: "/henderson/seven-hills" },
    { label: "Anthem", href: "/henderson/anthem" },
    { label: "Inspirada", href: "/henderson/inspirada" },
  ]},
  { label: "Market News", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold text-blue-900 leading-tight">Nevada Real Estate Market</span>
          <span className="text-xs text-gray-500">Dr. Jan Duffy | BHHS Nevada Properties</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {nav.map((item) =>
            item.sub ? (
              <div key={item.href} className="relative group">
                <button
                  className="hover:text-blue-700 transition-colors flex items-center gap-1"
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  {item.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-1 transition-all ${dropOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  {item.sub.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="hover:text-blue-700 transition-colors">
                {item.label}
              </Link>
            )
          )}
          <a
            href="tel:7025001955"
            className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors"
          >
            702-500-1955
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {nav.map((item) => (
            <div key={item.href}>
              <Link href={item.href} className="block py-2 text-gray-700 font-medium border-b border-gray-50" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.sub?.map((s) => (
                <Link key={s.href} href={s.href} className="block pl-4 py-2 text-sm text-gray-600" onClick={() => setOpen(false)}>
                  {s.label}
                </Link>
              ))}
            </div>
          ))}
          <a href="tel:7025001955" className="mt-3 block text-center bg-blue-800 text-white py-2 rounded-lg font-semibold">
            Call 702-500-1955
          </a>
        </div>
      )}
    </header>
  );
}
