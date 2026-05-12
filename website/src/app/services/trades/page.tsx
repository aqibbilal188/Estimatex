import type { Metadata } from "next";
import Link from "next/link";
import { SUBCONTRACTOR_TRADES } from "@/lib/nav-config";

export const metadata: Metadata = {
  title: "Trade estimating services",
  description: "Browse EstimatesX trade-specific estimating pages—quantity takeoff, pricing, bid support, and VE by discipline.",
};

export default function TradesIndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-slate-900 py-12 text-white dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">Subcontractor trades</p>
          <h1 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">All trade service pages</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Each link opens a dedicated page with trade context, deliverables, and a related project photo.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <ul className="columns-1 gap-x-10 text-sm sm:columns-2 md:columns-3">
          {SUBCONTRACTOR_TRADES.map((t) => (
            <li key={t.href} className="mb-2 break-inside-avoid">
              <Link href={t.href} className="text-slate-700 hover:text-teal-700 hover:underline dark:text-slate-300 dark:hover:text-teal-400">
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/services/subcontractors"
          className="mt-8 inline-flex text-sm font-semibold text-teal-700 hover:underline dark:text-teal-400"
        >
          ← Trade grid with previews
        </Link>
      </div>
    </div>
  );
}
