"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    id: "gc",
    label: "General contractors",
    headline: "Deliver competitive bids, on time and on budget",
    bullets: [
      "Detailed quantity & material takeoffs by CSI division",
      "Trade coverage for concrete, MEP, framing, and drywall",
      "Bid-ready estimates for public, commercial, and residential",
      "Market-aware pricing aligned to your regions",
      "Fast 24–48 hour turnaround for tight deadlines",
    ],
  },
  {
    id: "trade",
    label: "Trade contractors",
    headline: "Bid your trade with precision and confidence",
    bullets: [
      "Trade-focused quantity takeoffs (MEP, concrete, framing, and more)",
      "Labor and material breakdowns tailored to your scope",
      "Drawing-referenced quantities for easy internal QA",
      "Estimates formatted for GC submission requirements",
    ],
  },
  {
    id: "owners",
    label: "Owners & developers",
    headline: "Make informed investment decisions with accurate cost data",
    bullets: [
      "Preliminary and detailed construction cost estimates",
      "Budget validation before design finalization",
      "Trade-by-trade cost breakdowns for transparency",
      "Support for lender reviews and feasibility analysis",
    ],
  },
  {
    id: "consultants",
    label: "Consultants",
    headline: "Strengthen cost certainty and client confidence",
    bullets: [
      "Conceptual, schematic, and detailed cost estimates",
      "Independent quantity verification and scope validation",
      "Cost comparisons and budget benchmarking",
      "Deliverables formatted for reports and presentations",
    ],
  },
  {
    id: "facility",
    label: "Property & facility managers",
    headline: "Plan maintenance, upgrades, and CAPEX accurately",
    bullets: [
      "Estimates for renovations, repairs, and upgrades",
      "Budget planning for phased or occupied buildings",
      "Takeoffs that support procurement and scheduling",
      "Documentation suited for approvals and forecasting",
    ],
  },
];

export default function RolesTabsSection() {
  const [active, setActive] = useState(roles[0].id);
  const current = roles.find((r) => r.id === active) ?? roles[0];

  return (
    <section className="scroll-mt-24 bg-slate-100 py-20 dark:bg-slate-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Role solutions
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            One platform mindset for the entire building lifecycle
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Sample positioning aligned to major stakeholder groups—replace with your preferred messaging and proof
            points when ready.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-4 dark:border-white/10">
          {roles.map((r) => {
            const on = r.id === active;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setActive(r.id)}
                className={
                  on
                    ? "rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-slate-900 sm:text-sm"
                    : "rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-teal-500/35 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-teal-500/35 sm:text-sm"
                }
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-950"
            >
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{current.headline}</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                {current.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
                >
                  Request scope review
                </a>
                <a
                  href="/services"
                  className="inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-white/15 dark:text-white"
                >
                  Browse services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <aside className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-white/10 dark:from-slate-950 dark:to-slate-900">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Sample KPI strip</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Swap these placeholders for verified turnaround stats, typical sheet counts, or sectors served.
            </p>
            <dl className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950">
                <dt className="text-xs uppercase tracking-wider text-slate-500">Typical turnaround</dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">24–48 hrs</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950">
                <dt className="text-xs uppercase tracking-wider text-slate-500">Deliverable formats</dt>
                <dd className="mt-1 text-sm text-slate-700 dark:text-slate-300">Excel · PDF summaries · CSI-style tabs</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
