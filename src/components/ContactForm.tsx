"use client";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "nevadarealestatemarket.com" }),
      });
      if (res.ok) { setState("success"); setForm({ name: "", email: "", phone: "", interest: "", message: "" }); }
      else setState("error");
    } catch { setState("error"); }
  };

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-bold text-green-800 text-lg mb-2">Message Received!</h3>
        <p className="text-green-700 text-sm">I&apos;ll have a real answer for you — usually within the hour. Call <a href="tel:7025001955" className="font-semibold">702-500-1955</a> if it&apos;s urgent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input id="name" type="text" required value={form.name}
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input id="phone" type="tel" value={form.phone}
            onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="702-555-0100" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input id="email" type="email" required value={form.email}
          onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="jane@example.com" />
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in</label>
        <select id="interest" value={form.interest}
          onChange={(e) => setForm(f => ({ ...f, interest: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
          <option value="">Select…</option>
          <option value="buying">Buying a home</option>
          <option value="selling">Selling my home</option>
          <option value="cma">Free CMA / home valuation</option>
          <option value="investing">Investment property</option>
          <option value="market-report">Market report</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea id="message" rows={4} value={form.message}
          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell me about your situation — neighborhood, timeline, questions…" />
      </div>
      {state === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please call <a href="tel:7025001955" className="font-semibold">702-500-1955</a> directly.</p>
      )}
      <button type="submit" disabled={state === "loading"}
        className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-60">
        {state === "loading" ? "Sending…" : "Send Message →"}
      </button>
      <p className="text-xs text-gray-400 text-center">No spam. Your info goes directly to Dr. Jan — no third-party CRM spam.</p>
    </form>
  );
}
