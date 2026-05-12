import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SUBCONTRACTOR_TRADES } from "@/lib/nav-config";
import { getTradeServiceBySlug } from "@/lib/trade-service-registry";

export const metadata: Metadata = {
  title: "Subcontractor estimating",
  description:
    "Quantity takeoff, cost estimating, bid support & leveling, and value engineering support for subcontractors across USA-based projects.",
};

function tradeSlugFromHref(href: string) {
  return href.split("/").pop() ?? "";
}

export default function SubcontractorsServicesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Services</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-slate-900 dark:text-white">Subcontractors</h1>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            Each trade has its own service page with scope-specific context. Core deliverables include quantity takeoff,
            cost estimating, bid support & leveling, and value engineering support.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex text-sm font-semibold text-teal-700 hover:underline dark:text-teal-400"
          >
            Request a trade estimate →
          </Link>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBCONTRACTOR_TRADES.map((trade) => {
            const slug = tradeSlugFromHref(trade.href);
            const detail = getTradeServiceBySlug(slug);
            return (
              <Link
                key={trade.href}
                href={trade.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-teal-500/40 hover:shadow-md dark:border-white/10 dark:bg-slate-950 dark:hover:border-teal-500/35"
              >
                <div className="relative aspect-[16/10] shrink-0">
                  {detail ? (
                    <Image
                      src={detail.imageSrc}
                      alt={detail.imageAlt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{trade.label}</h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {detail?.description ?? "Trade-specific estimating support."}
                  </p>
                  <span className="mt-3 text-sm font-semibold text-teal-700 dark:text-teal-400">Open trade page →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
