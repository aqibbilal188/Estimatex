import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About EstimatesX—professional construction estimation and quantity takeoff services for all trades across USA-based projects.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-white py-14 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">About</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-slate-900 dark:text-white">
            Built for bid-ready clarity
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            We are a dedicated construction estimating team delivering professional estimation and quantity takeoff
            services for all trades across USA-based projects. With 6 years of estimating experience, we support
            contractors, subcontractors, and builders with accurate, detailed, and reliable estimates for residential,
            commercial, and industrial projects.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl flex-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">What we believe</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>• Accurate estimates should help clients submit competitive bids and control project costs.</li>
            <li>• Fast turnaround and quality review should work together, not against each other.</li>
            <li>• Clear communication and dependable support build long-term professional relationships.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Tools & trade expertise</h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Our expertise covers all CSI divisions including concrete, drywall, framing, painting, flooring, electrical,
            plumbing, HVAC, roofing, masonry, finishes, and site work. We use PlanSwift, Bluebeam, and Excel to deliver
            precise takeoffs and cost-effective estimating solutions.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12 text-center dark:border-white/10 dark:bg-slate-950">
        <Link href="/contact" className="text-sm font-semibold text-teal-700 hover:underline dark:text-teal-400">
          Contact our estimating team →
        </Link>
      </section>
    </div>
  );
}
