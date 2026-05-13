import type { Metadata } from "next";
import Link from "next/link";
import { getKcmPost, getKcmPosts } from "@/lib/kcm";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getKcmPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getKcmPost(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getKcmPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-blue-700 text-sm font-medium hover:underline mb-6 block">← Back to Market News</Link>
      <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">{post.category}</p>
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-8">{post.date}</p>

      {/* Dr. Jan's local context — added to each curated post */}
      {post.localContext && (
        <div className="bg-blue-50 border-l-4 border-blue-700 rounded-r-xl p-5 mb-8">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Dr. Jan&apos;s Las Vegas Take</p>
          <p className="text-blue-900 text-sm leading-relaxed">{post.localContext}</p>
        </div>
      )}

      <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="mt-12 bg-blue-900 text-white rounded-2xl p-8 text-center">
        <h2 className="font-bold text-xl mb-2">Questions About Your Nevada Market?</h2>
        <p className="text-blue-200 text-sm mb-5">I pull fresh comparables weekly. Call for real numbers, not guesswork.</p>
        <a href="tel:7025001955" className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
          Call 702-500-1955
        </a>
      </div>
    </div>
  );
}
