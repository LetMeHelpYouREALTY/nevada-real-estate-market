import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy | Nevada Real Estate",
  description: "Contact Dr. Jan Duffy for Henderson and Las Vegas real estate questions, CMAs, market reports, and buying or selling guidance. Call 702-500-1955.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">Contact Dr. Jan Duffy</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Real answer, real data, real fast. I respond to every inquiry — usually within the hour.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-blue-900 mb-3">Direct Contact</h2>
            <div className="space-y-3 text-sm">
              <p><a href="tel:7025001955" className="text-blue-700 font-semibold text-lg">📞 702-500-1955</a></p>
              <p><a href="sms:7022221964" className="text-blue-700">💬 Text 702-222-1964</a></p>
              <p><a href="mailto:janet.duffy@bhhsnv.com" className="text-blue-700">✉️ janet.duffy@bhhsnv.com</a></p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="font-bold text-blue-900 mb-3">Office</h2>
            <address className="text-sm text-gray-600 not-italic leading-relaxed">
              Berkshire Hathaway HomeServices Nevada Properties<br />
              3185 St Rose Pkwy, Suite 101<br />
              Henderson, NV 89052<br /><br />
              <strong>Hours:</strong> Mon–Sun 6:00 AM – 9:00 PM
            </address>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="font-bold text-blue-900 mb-2">What I Can Help With</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Free Comparative Market Analysis (CMA)</li>
              <li>✓ Henderson neighborhood pricing</li>
              <li>✓ Buyer consultation &amp; pre-approval guidance</li>
              <li>✓ Investment property analysis</li>
              <li>✓ Divorce &amp; probate real estate</li>
              <li>✓ New construction negotiation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
