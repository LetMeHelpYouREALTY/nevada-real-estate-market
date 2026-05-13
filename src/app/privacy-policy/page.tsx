import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nevada Real Estate Market',
  description: 'Privacy policy for nevadarealestatemarket.com — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://nevadarealestatemarket.com/privacy-policy' },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'May 12, 2026'
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-950 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-10 text-sm">Last updated: {lastUpdated}</p>

      <div className="prose">
        <p>
          Nevada Real Estate Market (nevadarealestatemarket.com) is operated by
          Dr. Jan Duffy, a licensed Nevada REALTOR® (S.0197614.LLC) with
          Berkshire Hathaway HomeServices Nevada Properties. This Privacy Policy
          describes how we collect, use, and protect information you provide
          through this website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you submit a contact form on this site we collect your name,
          email address, phone number, and any message you choose to provide.
          We also collect standard server log data (IP address, browser type,
          referring URL) through our hosting provider (Vercel).
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your real estate inquiry</li>
          <li>To send you relevant market updates you have requested</li>
          <li>To improve the functionality of this website</li>
        </ul>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We do not use your information for any automated marketing
          without your explicit opt-in.
        </p>

        <h2>Data Storage</h2>
        <p>
          Contact form submissions are stored securely in our CRM system
          (Follow Up Boss) and database (Supabase). Both services maintain
          industry-standard encryption at rest and in transit.
        </p>

        <h2>Cookies</h2>
        <p>
          This website uses minimal cookies required for basic functionality.
          We do not use advertising cookies or cross-site tracking. You may
          disable cookies in your browser settings without affecting your
          ability to use this site.
        </p>

        <h2>Third-Party Services</h2>
        <p>This site uses the following third-party services:</p>
        <ul>
          <li><strong>Vercel</strong> — hosting and performance analytics</li>
          <li><strong>Supabase</strong> — secure contact form storage</li>
          <li><strong>Google Fonts</strong> — typography (Inter)</li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your
          personal data at any time by contacting us at the information below.
          Nevada residents have additional rights under Nevada&apos;s privacy laws.
        </p>

        <h2>Contact Us</h2>
        <p>
          Dr. Jan Duffy<br />
          Berkshire Hathaway HomeServices Nevada Properties<br />
          3185 St. Rose Pkwy, Suite 101, Henderson, NV 89052<br />
          Phone: 702-500-1955<br />
          Email: janet.duffy@bhhsnv.com
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy periodically. The &quot;Last updated&quot; date at
          the top of this page reflects the most recent revision.
        </p>
      </div>
    </main>
  )
}
