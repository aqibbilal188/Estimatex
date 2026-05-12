import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/wordpress";

export const revalidate = 120;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(50);
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt.slice(0, 160),
    openGraph: post.imageUrl ? { images: [{ url: post.imageUrl }] } : undefined,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="flex flex-1 flex-col bg-white dark:bg-slate-950">
      <div className="border-b border-slate-200 bg-slate-900 py-12 text-white dark:border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-slate-400">
            <Link href="/blog" className="text-teal-400 hover:underline">
              ← Insights
            </Link>
          </p>
          <p className="mt-4 text-xs uppercase tracking-wide text-teal-400/90">
            {post.dateDisplay}
            {post.categoryLabel ? ` · ${post.categoryLabel}` : ""}
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{post.title}</h1>
          {post.excerpt ? <p className="mt-4 text-sm text-slate-300">{post.excerpt}</p> : null}
        </div>
      </div>

      {post.imageUrl ? (
        <div className="mx-auto w-full max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element -- WP host varies */}
          <img
            src={post.imageUrl}
            alt=""
            className="max-h-[420px] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      ) : null}

      <div
        className="blog-wp-content mx-auto max-w-3xl flex-1 px-4 py-12 text-slate-800 dark:text-slate-200 sm:px-6 lg:px-8 [&_a]:text-teal-700 [&_a]:underline dark:[&_a]:text-teal-400 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_img]:my-6 [&_img]:max-w-full [&_img]:rounded-xl [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-sm font-semibold text-teal-700 hover:underline dark:text-teal-400">
          ← Back to all insights
        </Link>
      </div>
    </article>
  );
}
