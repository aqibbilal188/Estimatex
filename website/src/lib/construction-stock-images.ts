/** Curated Unsplash URLs (construction / estimating) — rotate for variety. */

export const STOCK_IMAGES = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565799550614-797c7b122b2a?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541976590-713941681591?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517646287273-a0c1126acb74?w=1400&q=80&auto=format&fit=crop",
] as const;

export function stockImageAt(index: number): string {
  return STOCK_IMAGES[index % STOCK_IMAGES.length]!;
}
