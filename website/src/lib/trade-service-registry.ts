import { stockImageAt } from "@/lib/construction-stock-images";

export type TradeServicePage = {
  slug: string;
  label: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
};

const TRADE_DEFS: { slug: string; label: string; imageIndex: number; imageAlt: string }[] = [
  { slug: "earthwork", label: "Earthwork", imageIndex: 8, imageAlt: "Excavation and earthmoving on a construction site" },
  { slug: "concrete", label: "Concrete", imageIndex: 3, imageAlt: "Concrete structure and formwork" },
  { slug: "framing", label: "Framing", imageIndex: 3, imageAlt: "Wood framing on a residential build" },
  { slug: "drywall", label: "Drywall", imageIndex: 1, imageAlt: "Interior construction and drywall installation" },
  { slug: "flooring", label: "Flooring", imageIndex: 1, imageAlt: "Flooring installation in a commercial interior" },
  { slug: "demolition", label: "Demolition", imageIndex: 9, imageAlt: "Demolition and site preparation" },
  { slug: "masonry", label: "Masonry", imageIndex: 3, imageAlt: "Masonry and brick construction" },
  { slug: "structural-steel", label: "Structural steel", imageIndex: 3, imageAlt: "Structural steel frame at a jobsite" },
  { slug: "roofing", label: "Roofing", imageIndex: 2, imageAlt: "Roofing work on a commercial building" },
  { slug: "painting", label: "Painting", imageIndex: 1, imageAlt: "Interior finishing and painting" },
  { slug: "landscaping", label: "Landscaping", imageIndex: 8, imageAlt: "Site landscaping and civil finishes" },
  { slug: "mep", label: "MEP", imageIndex: 4, imageAlt: "Mechanical electrical plumbing coordination" },
  { slug: "interior-finishes", label: "Interior finishes", imageIndex: 1, imageAlt: "Interior finishes and fit-out" },
  { slug: "insulation", label: "Insulation", imageIndex: 4, imageAlt: "Building insulation and envelope" },
  { slug: "furnishing", label: "Furnishing", imageIndex: 1, imageAlt: "Furniture and furnishing installation" },
];

function tradeDescription(label: string): string {
  return `For ${label.toLowerCase()}, we deliver drawing-based quantity takeoffs, cost estimating, bid support, and value-oriented options aligned to your bid form and schedule.`;
}

export const TRADE_SERVICE_PAGES: TradeServicePage[] = TRADE_DEFS.map((t) => ({
  slug: t.slug,
  label: t.label,
  description: tradeDescription(t.label),
  imageSrc: stockImageAt(t.imageIndex),
  imageAlt: t.imageAlt,
  bullets: [
    "Quantity takeoff tied to drawing references and scope notes",
    "Labor and material pricing structured for your trade format",
    "Bid comparison and leveling support when multiple vendors are in play",
    "Value engineering ideas grounded in constructability and lead time",
  ],
}));

const bySlug = new Map(TRADE_SERVICE_PAGES.map((p) => [p.slug, p]));

export const ALL_TRADE_SLUGS = TRADE_SERVICE_PAGES.map((p) => p.slug);

export function getTradeServiceBySlug(slug: string): TradeServicePage | undefined {
  return bySlug.get(slug);
}
