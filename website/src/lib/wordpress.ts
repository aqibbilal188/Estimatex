/**
 * WordPress REST API — set WORDPRESS_URL in .env.local (site origin only, e.g. https://blog.example.com)
 * Docs: https://developer.wordpress.org/rest-api/reference/posts/
 */

export type BlogPostCard = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  dateDisplay: string;
  dateIso: string;
  imageUrl: string | null;
  categoryLabel: string | null;
};

export type BlogPostDetail = BlogPostCard & {
  contentHtml: string;
};

type WpTerm = { taxonomy?: string; name?: string };
type WpPostRaw = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  sticky?: boolean;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: WpTerm[][];
  };
};

function apiBase(): string | null {
  const raw = process.env.WORDPRESS_URL?.trim();
  if (!raw) return null;
  const origin = raw.replace(/\/$/, "");
  return `${origin}/wp-json/wp/v2`;
}

export function isWordPressConfigured(): boolean {
  return Boolean(apiBase());
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function primaryCategory(p: WpPostRaw): string | null {
  const groups = p._embedded?.["wp:term"];
  if (!groups) return null;
  for (const group of groups) {
    for (const term of group) {
      if (term.taxonomy === "category" && term.name) return term.name;
    }
  }
  return null;
}

function toCard(p: WpPostRaw): BlogPostCard {
  const imageUrl = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
  return {
    id: p.id,
    slug: p.slug,
    title: stripHtml(p.title.rendered),
    excerpt: stripHtml(p.excerpt.rendered),
    dateDisplay: formatDate(p.date),
    dateIso: p.date,
    imageUrl,
    categoryLabel: primaryCategory(p),
  };
}

function toDetail(p: WpPostRaw): BlogPostDetail {
  return {
    ...toCard(p),
    contentHtml: p.content.rendered,
  };
}

export async function getPosts(limit = 12): Promise<BlogPostCard[]> {
  const base = apiBase();
  if (!base) return [];

  try {
    const url = new URL(`${base}/posts`);
    url.searchParams.set("per_page", String(limit));
    url.searchParams.set("_embed", "1");
    url.searchParams.set("orderby", "date");
    url.searchParams.set("order", "desc");

    const res = await fetch(url.toString(), {
      next: { revalidate: 120 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.error("[wordpress] getPosts failed:", res.status, await res.text().catch(() => ""));
      return [];
    }

    const data = (await res.json()) as WpPostRaw[];
    if (!Array.isArray(data)) return [];
    return data.map(toCard);
  } catch (e) {
    console.error("[wordpress] getPosts error:", e);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  const base = apiBase();
  if (!base || !slug) return null;

  try {
    const url = new URL(`${base}/posts`);
    url.searchParams.set("slug", slug);
    url.searchParams.set("_embed", "1");

    const res = await fetch(url.toString(), {
      next: { revalidate: 120 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.error("[wordpress] getPostBySlug failed:", res.status);
      return null;
    }

    const data = (await res.json()) as WpPostRaw[];
    if (!Array.isArray(data) || data.length === 0) return null;
    return toDetail(data[0]);
  } catch (e) {
    console.error("[wordpress] getPostBySlug error:", e);
    return null;
  }
}

export async function getAllPostSlugs(limit = 100): Promise<{ slug: string }[]> {
  const posts = await getPosts(limit);
  return posts.map((p) => ({ slug: p.slug }));
}
