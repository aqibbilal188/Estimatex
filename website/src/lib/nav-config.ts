/** Navigation & IA modeled after digitalestimating.com structure — swap copy later. */

export const SUBCONTRACTOR_TRADES = [
  { label: "Earthwork", href: "/services/trades/earthwork" },
  { label: "Concrete", href: "/services/trades/concrete" },
  { label: "Framing", href: "/services/trades/framing" },
  { label: "Drywall", href: "/services/trades/drywall" },
  { label: "Flooring", href: "/services/trades/flooring" },
  { label: "Demolition", href: "/services/trades/demolition" },
  { label: "Masonry", href: "/services/trades/masonry" },
  { label: "Structural steel", href: "/services/trades/structural-steel" },
  { label: "Roofing", href: "/services/trades/roofing" },
  { label: "Painting", href: "/services/trades/painting" },
  { label: "Landscaping", href: "/services/trades/landscaping" },
  { label: "MEP", href: "/services/trades/mep" },
  { label: "Interior finishes", href: "/services/trades/interior-finishes" },
  { label: "Insulation", href: "/services/trades/insulation" },
  { label: "Furnishing", href: "/services/trades/furnishing" },
] as const;

export const GENERAL_CONTRACTOR_LINKS = [
  { label: "Public bids estimates", href: "/services/public-bids-estimates" },
  { label: "Residential bidding estimates", href: "/services/residential-bidding-estimates" },
  { label: "Commercial bidding estimates", href: "/services/commercial-bidding-estimates" },
] as const;

export const MANUFACTURER_LINKS = [
  { label: "Manufacturer estimating programs", href: "/services/manufacturer-estimating-programs" },
  { label: "Material supplier takeoffs", href: "/services/material-supplier-takeoffs" },
] as const;

export type HeaderNavItem =
  | { type: "link"; label: string; href: string }
  | { type: "services"; label: string; href: string };

export const HEADER_NAV: HeaderNavItem[] = [
  { type: "services", label: "Services", href: "/services" },
  { type: "link", label: "Virtual Bid Manager", href: "/virtual-bid-manager" },
  { type: "link", label: "Portfolio", href: "/portfolio" },
  { type: "link", label: "About", href: "/about" },
  { type: "link", label: "Blog", href: "/blog" },
  { type: "link", label: "Contact us", href: "/contact" },
];

export const FOOTER_PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Virtual Bid Manager", href: "/virtual-bid-manager" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Who we serve", href: "/who-we-serve" },
  { label: "Why us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Clients", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICES = [
  { label: "Quantity takeoff", href: "/services/quantity-takeoff" },
  { label: "Cost estimating", href: "/services/cost-estimating" },
  { label: "Public bids estimates", href: "/services/public-bids-estimates" },
  { label: "Commercial bidding estimates", href: "/services/commercial-bidding-estimates" },
  { label: "Residential bidding estimates", href: "/services/residential-bidding-estimates" },
  { label: "Material supplier takeoffs", href: "/services/material-supplier-takeoffs" },
  { label: "Manufacturers", href: "/services/manufacturers" },
  { label: "Virtual Bid Manager", href: "/virtual-bid-manager" },
] as const;
