"use client";

import Link from "next/link";
import { GENERAL_CONTRACTOR_LINKS, MANUFACTURER_LINKS, SUBCONTRACTOR_TRADES } from "@/lib/nav-config";

export default function ServicesMegaMenu() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-full z-[110] -mt-2 hidden w-[min(92vw,820px)] -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-150 group-hover/services:pointer-events-auto group-hover/services:opacity-100 md:block md:group-focus-within/services:pointer-events-auto md:group-focus-within/services:opacity-100"
      role="navigation"
      aria-label="Services menu"
    >
      <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl shadow-slate-900/15 ring-1 ring-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 dark:shadow-black/50">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Subcontractors
          </p>
          <ul className="mt-3 grid max-h-[280px] gap-1.5 overflow-y-auto pr-1 text-sm">
            {SUBCONTRACTOR_TRADES.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services/subcontractors"
            className="mt-3 inline-block text-xs font-semibold text-brand-navy hover:underline dark:text-sky-300"
          >
            View all subcontractor scopes →
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            General contractors
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {GENERAL_CONTRACTOR_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services/general-contractors"
            className="mt-4 inline-block text-xs font-semibold text-brand-navy hover:underline dark:text-sky-300"
          >
            GC estimating overview →
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Manufacturers
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {MANUFACTURER_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services/manufacturers"
            className="mt-4 inline-block text-xs font-semibold text-brand-navy hover:underline dark:text-sky-300"
          >
            Supplier & OEM support →
          </Link>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
            Need a bundled program for GC + trades?{" "}
            <Link href="/contact" className="font-semibold text-brand-navy hover:underline dark:text-sky-300">
              Talk to estimating
            </Link>
            .
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
