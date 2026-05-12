import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageShell } from "@/components/services/ServicePageShell";
import { ALL_SERVICE_DETAIL_SLUGS, getServiceDetailBySlug } from "@/lib/service-detail-registry";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_SERVICE_DETAIL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceDetailBySlug(slug);
  if (!page) return { title: "Service" };
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getServiceDetailBySlug(slug);
  if (!page) notFound();

  return (
    <ServicePageShell
      eyebrow={page.category}
      title={page.title}
      description={page.description}
      imageSrc={page.imageSrc}
      imageAlt={page.imageAlt}
      bullets={page.bullets}
      relatedHref={page.relatedHref}
      relatedLabel={page.relatedLabel}
    />
  );
}
