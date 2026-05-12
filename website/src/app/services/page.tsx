import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "EstimatesX construction estimating services—subcontractors, general contractors, manufacturers, and virtual bid desk support.",
};

export default function ServicesHubPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-slate-900 py-14 text-white dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-400/90">Services hub</p>
          <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">Construction estimating programs</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Our expertise includes all CSI divisions such as concrete, drywall, framing, painting, flooring, electrical,
            plumbing, HVAC, roofing, masonry, finishes, and site work. We deliver accurate, detailed, and reliable
            estimates to help clients submit competitive bids and manage project costs efficiently.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <Link
            href="/services/quantity-takeoff"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-500/40 dark:border-white/10 dark:bg-slate-950"
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Quantity Takeoff</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Accurate material quantity calculations, trade-wise detailed takeoffs, fast turnaround estimates, and
              drawing-based quantity extraction.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-700 dark:text-teal-400">View details →</span>
          </Link>
          <Link
            href="/services/cost-estimating"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-500/40 dark:border-white/10 dark:bg-slate-950"
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Cost Estimating</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Accurate project cost forecasting with labor and material pricing, budget-friendly estimate preparation, and
              detailed trade-wise cost breakdown.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-700 dark:text-teal-400">View details →</span>
          </Link>
          <Link
            href="/services/bid-support-value-engineering"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-500/40 dark:border-white/10 dark:bg-slate-950"
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Bid Support & Value Engineering</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Competitive bid comparison, scope gap identification, budget alignment, and cost-saving value engineering
              recommendations.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-teal-700 dark:text-teal-400">View details →</span>
          </Link>
        </div>
      </section>

      <ServicesSection />

      <section className="border-t border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-teal-700 px-8 py-3 text-sm font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            Request a detailed estimate →
          </Link>
        </div>
      </section>
    </div>
  );
}
