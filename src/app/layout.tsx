import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nevada Real Estate Market | Dr. Jan Duffy, REALTOR®",
    template: "%s | Dr. Jan Duffy Nevada REALTOR®",
  },
  description:
    "Las Vegas & Henderson Nevada real estate market news, neighborhood guides, and expert insights from Dr. Jan Duffy — BHHS Nevada Properties. License #S.0197614.LLC",
  keywords: [
    "Nevada real estate market", "Las Vegas homes for sale", "Henderson real estate",
    "Dr. Jan Duffy", "BHHS Nevada Properties", "Lake Las Vegas homes",
    "MacDonald Ranch real estate", "Green Valley Ranch homes", "Seven Hills real estate",
  ],
  metadataBase: new URL("https://nevadarealestatemarket.com"),
  openGraph: {
    type: "website", locale: "en_US",
    url: "https://nevadarealestatemarket.com",
    siteName: "Nevada Real Estate Market | Dr. Jan Duffy",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
