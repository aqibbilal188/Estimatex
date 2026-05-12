import type { Metadata } from "next";
import BlogIndex from "@/components/landing/BlogIndex";
import { getPosts, isWordPressConfigured } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Construction estimating insights and cost guides—published from WordPress for EstimatesX.",
};

export const revalidate = 120;

export default async function BlogPage() {
  const wpConfigured = isWordPressConfigured();
  const posts = await getPosts(24);

  return <BlogIndex posts={posts} wpConfigured={wpConfigured} />;
}
