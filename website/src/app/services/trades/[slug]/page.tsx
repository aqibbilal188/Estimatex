import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageShell } from "@/components/services/ServicePageShell";
import { ALL_TRADE_SLUGS, getTradeServiceBySlug } from "@/lib/trade-service-registry";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_TRADE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getTradeServiceBySlug(slug);
  if (!page) return { title: "Trade service" };
  return {
    title: `${page.label} estimating`,
    description: page.description,
  };
}

export default async function TradeServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getTradeServiceBySlug(slug);
  if (!page) notFound();

  return (
    <ServicePageShell
      eyebrow="Subcontractor trade"
      title={`${page.label} estimating`}
      description={page.description}
      imageSrc={page.imageSrc}
      imageAlt={page.imageAlt}
      bullets={page.bullets}
      relatedHref="/services/subcontractors"
      relatedLabel="All subcontractor trades"
    />
  );
}
