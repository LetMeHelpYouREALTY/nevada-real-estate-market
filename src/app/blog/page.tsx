import type { Metadata } from "next";
import Link from "next/link";
import { getKcmPosts } from "@/lib/kcm";

export const metadata: Metadata = {
  title: "Nevada Real Estate Market News | Dr. Jan Duffy",
  description: "Curated real estate market news and insights for Nevada buyers and sellers, with local Las Vegas and Henderson context added by Dr. Jan Duffy.",
};

export const revalidate = 3600; // revalidate every hour

export default async function BlogPage() {
  const posts = await getKcmPosts();
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">Nevada Market News</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          National real estate trends with Las Vegas and Henderson context — curated weekly by Dr. Jan Duffy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length === 0 && (
          <div className="col-span-3 text-center text-gray-500 py-16">
            <p>Market insights coming soon.</p>
            <Link href="/contact" className="mt-4 inline-block text-blue-700 font-medium">
              Get personalized market report →
            </Link>
          </div>
        )}
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
            <div className="p-5">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">{post.category}</p>
              <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-700">{post.title}</h2>
              <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-3">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
