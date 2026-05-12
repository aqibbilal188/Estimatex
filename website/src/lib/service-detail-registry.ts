import { stockImageAt } from "@/lib/construction-stock-images";

export type ServiceDetailPage = {
  slug: string;
  category: "Core" | "General contractor" | "Manufacturer";
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  relatedHref?: string;
  relatedLabel?: string;
};

const core: ServiceDetailPage[] = [
  {
    slug: "quantity-takeoff",
    category: "Core",
    title: "Quantity takeoff",
    description:
      "Drawing-based quantity extraction with trade-aligned rollups, revision tracking against addenda, and outputs formatted for internal review or GC submission.",
    imageSrc: stockImageAt(0),
    imageAlt: "Construction blueprints and planning documents on a desk",
    bullets: [
      "CSI-aligned quantity summaries where applicable",
      "Drawing references and scope notes for defensible reviews",
      "Iteration support when addenda or RFIs change quantities",
      "Deliverables tuned for subcontractor bid forms or GC packages",
    ],
    relatedHref: "/services/subcontractors",
    relatedLabel: "Subcontractor estimating hub",
  },
  {
    slug: "cost-estimating",
    category: "Core",
    title: "Cost estimating",
    description:
      "Labor, material, and equipment views with market-aware pricing assumptions, structured QA checkpoints, and clear assumptions documentation for bid defense.",
    imageSrc: stockImageAt(6),
    imageAlt: "Financial planning documents and calculator",
    bullets: [
      "Trade-wise cost breakdowns aligned to your bid structure",
      "Zip- or region-aware pricing inputs where applicable",
      "Alternate pricing scenarios for owner-driven options",
      "Bid-ready formatting for preconstruction and operations teams",
    ],
    relatedHref: "/services/general-contractors",
    relatedLabel: "GC estimating programs",
  },
  {
    slug: "bid-support-leveling",
    category: "Core",
    title: "Bid support & leveling",
    description:
      "Normalize subcontractor quotes, identify scope gaps, and align numbers to a single bid narrative so your team can decide faster under deadline pressure.",
    imageSrc: stockImageAt(5),
    imageAlt: "Business team reviewing documents together",
    bullets: [
      "Side-by-side comparison of vendor coverage and exclusions",
      "Scope gap flags tied back to drawings and specifications",
      "Leveling notes suitable for internal executive review",
      "Tender-stage support aligned to your bid calendar",
    ],
    relatedHref: "/contact",
    relatedLabel: "Request bid support",
  },
  {
    slug: "value-engineering-support",
    category: "Core",
    title: "Value engineering support",
    description:
      "Alternative systems, material substitutions, and constructability-aware options—priced so you can present defensible savings without compromising intent.",
    imageSrc: stockImageAt(4),
    imageAlt: "Engineering and coordination on a construction project",
    bullets: [
      "Option sets with cost deltas and schedule implications where relevant",
      "Coordination notes for design-assist or VE workshops",
      "Documentation that supports owner and stakeholder conversations",
      "Trade-specific VE ideas grounded in field realities",
    ],
    relatedHref: "/contact",
    relatedLabel: "Discuss VE scope",
  },
  {
    slug: "bid-support-value-engineering",
    category: "Core",
    title: "Bid support & value engineering",
    description:
      "A bundled program for teams that need competitive bid comparison, scope alignment, and cost-saving recommendations in one coordinated estimating workflow.",
    imageSrc: stockImageAt(7),
    imageAlt: "Industrial manufacturing and materials context",
    bullets: [
      "Single thread of communication through bid week",
      "Manufacturer and supplier programs where catalog data matters",
      "Packaging suitable for OEM, distribution, and bid-desk partners",
      "Rapid iterations when vendor pricing or scope shifts",
    ],
    relatedHref: "/services/manufacturers",
    relatedLabel: "Manufacturers & suppliers",
  },
];

const gc: ServiceDetailPage[] = [
  {
    slug: "public-bids-estimates",
    category: "General contractor",
    title: "Public bids estimates",
    description:
      "Structured estimating support for public procurement cycles—clear division summaries, compliant formatting, and disciplined QA aligned to agency bid requirements.",
    imageSrc: stockImageAt(2),
    imageAlt: "Modern commercial building facade",
    bullets: [
      "Division-level summaries for agency-style submissions",
      "Addenda tracking and revision discipline through deadline",
      "Coordination notes for bonding, insurance, and compliance tables",
      "Peer-review friendly packaging for internal GC QA",
    ],
    relatedHref: "/services/general-contractors",
    relatedLabel: "All GC services",
  },
  {
    slug: "residential-bidding-estimates",
    category: "General contractor",
    title: "Residential bidding estimates",
    description:
      "Production builders and custom residential GCs get repeatable takeoff templates, option pricing views, and schedules that match how residential bids move.",
    imageSrc: stockImageAt(1),
    imageAlt: "Construction site teamwork",
    bullets: [
      "Lot-specific or prototype-driven quantity templates",
      "Option and alternate pricing aligned to sales programs",
      "Fast turnaround for bid lists and rolling deadlines",
      "Outputs formatted for superintendent and purchasing handoff",
    ],
    relatedHref: "/services/general-contractors",
    relatedLabel: "All GC services",
  },
  {
    slug: "commercial-bidding-estimates",
    category: "General contractor",
    title: "Commercial bidding estimates",
    description:
      "Office, retail, healthcare, and institutional packages with trade coverage mapped to your bid form—built for competitive commercial pursuit calendars.",
    imageSrc: stockImageAt(2),
    imageAlt: "Commercial high-rise building exterior",
    bullets: [
      "Trade coverage mapped to your internal bid map",
      "MEP and envelope coordination notes where scope demands it",
      "Value plan alignment for negotiated pursuits",
      "Executive summaries for go/no-go decisions",
    ],
    relatedHref: "/services/general-contractors",
    relatedLabel: "All GC services",
  },
];

const mfg: ServiceDetailPage[] = [
  {
    slug: "manufacturer-estimating-programs",
    category: "Manufacturer",
    title: "Manufacturer estimating programs",
    description:
      "OEM and building-products teams get estimating playbooks, catalog-driven takeoff assumptions, and partner-ready outputs that match how distributors quote.",
    imageSrc: stockImageAt(7),
    imageAlt: "Manufacturing floor and industrial materials",
    bullets: [
      "Programmed assumptions aligned to product families",
      "Partner-ready packages for distribution networks",
      "Training-friendly documentation for regional reps",
      "Cadence built for product launches and price books",
    ],
    relatedHref: "/services/manufacturers",
    relatedLabel: "Manufacturers hub",
  },
  {
    slug: "material-supplier-takeoffs",
    category: "Manufacturer",
    title: "Material supplier takeoffs",
    description:
      "Distributors and suppliers receive drawing-led quantities, cut lists where applicable, and freight-aware packaging assumptions for competitive supplier bids.",
    imageSrc: stockImageAt(3),
    imageAlt: "Structural steel and building frame",
    bullets: [
      "Drawing-led quantities with clear basis of design",
      "Waste factors and pack sizes documented for review",
      "Revision control when addenda change counts",
      "Outputs aligned to supplier quote templates",
    ],
    relatedHref: "/services/manufacturers",
    relatedLabel: "Manufacturers hub",
  },
];

const bySlug = new Map<string, ServiceDetailPage>();
for (const p of [...core, ...gc, ...mfg]) {
  bySlug.set(p.slug, p);
}

export const ALL_SERVICE_DETAIL_SLUGS = [...bySlug.keys()];

export function getServiceDetailBySlug(slug: string): ServiceDetailPage | undefined {
  return bySlug.get(slug);
}
