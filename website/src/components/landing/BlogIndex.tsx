"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPostCard } from "@/lib/wordpress";

function PostImage({ src, alt, className }: { src: string | null; alt: string; className: string }) {
  if (!src) {
    return <div className={`bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 ${className}`} />;
  }
  // eslint-disable-next-line @next/next/no-img-element -- WP host varies per deployment
  return <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" />;
}

type BlogIndexProps = {
  posts: BlogPostCard[];
  wpConfigured: boolean;
};

export default function BlogIndex({ posts, wpConfigured }: BlogIndexProps) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return posts;
    return posts.filter((p) =>
      `${p.title} ${p.excerpt} ${p.categoryLabel ?? ""}`.toLowerCase().includes(s),
    );
  }, [posts, q]);

  const featured = filtered[0];
  const rest = featured ? filtered.slice(1) : [];

  return (
    <div className="flex flex-1 flex-col bg-slate-100 dark:bg-slate-950">
      <section className="bg-slate-900 pb-16 pt-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-400/90">Insights</p>
          <h1 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
            Construction estimating <span className="text-teal-400">insights</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            Articles synced from WordPress—expert analysis & cost guides for contractors and builders.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-inner backdrop-blur sm:flex-row sm:items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-4 py-3 dark:bg-slate-950">
              <span className="text-slate-400" aria-hidden>
                🔍
              </span>
              <input
                id="blog-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles, cost guides, material trends..."
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-teal-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-400"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl flex-1 gap-10 px-4 py-14 lg:grid-cols-[1fr_320px] lg:px-8">
        <div>
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-white/20 dark:bg-slate-900">
              <p className="font-semibold text-slate-900 dark:text-white">
                {wpConfigured ? "No posts yet." : "WordPress is not connected."}
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {wpConfigured
                  ? "Publish posts in WordPress—they will appear here after the cache refreshes (about 2 minutes)."
                  : "Add WORDPRESS_URL to your .env.local file with your WordPress site URL (e.g. https://yourblog.com). No trailing slash. Ensure the REST API is reachable."}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-teal-500" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  Featured insight
                </p>
              </div>

              {featured && (
                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-slate-900">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <PostImage
                      src={featured.imageUrl}
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {featured.dateDisplay}
                      {featured.categoryLabel ? (
                        <>
                          {" "}
                          · <span className="text-teal-700 dark:text-teal-400">{featured.categoryLabel}</span>
                        </>
                      ) : null}
                    </p>
                    <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{featured.excerpt}</p>
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="mt-6 inline-block text-sm font-semibold text-teal-700 dark:text-teal-400"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              )}

              <div className="mt-12 space-y-8">
                {rest.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.slug}`}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-teal-500/30 dark:border-white/10 dark:bg-slate-900 dark:hover:border-teal-500/25"
                  >
                    <div className="relative hidden h-28 w-40 shrink-0 overflow-hidden rounded-xl sm:block">
                      <PostImage src={p.imageUrl} alt="" className="h-full w-full" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {p.dateDisplay}
                        {p.categoryLabel ? ` · ${p.categoryLabel}` : ""}
                      </p>
                      <h3 className="font-display mt-1 text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">{p.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-900 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-100">
            <div className="flex items-start gap-3">
              <span className="text-xl" aria-hidden>
                ⚠️
              </span>
              <div>
                <p className="font-semibold">Scam alert</p>
                <p className="mt-2 leading-relaxed opacity-90">
                  Beware of unlicensed solicitations impersonating estimating firms. Verify domain names, callback
                  numbers, and contracts before sharing bid documents.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Need estimating support?</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Share plans and deadlines—we&apos;ll reply with a scope outline.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-full bg-teal-700 px-5 py-2 text-xs font-semibold text-white dark:bg-teal-600"
            >
              Contact team →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
