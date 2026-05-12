"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import ServicesMegaMenu from "./ServicesMegaMenu";
import {
  GENERAL_CONTRACTOR_LINKS,
  HEADER_NAV,
  MANUFACTURER_LINKS,
  SUBCONTRACTOR_TRADES,
} from "@/lib/nav-config";
import { EstimatesXLockup } from "@/components/brand/EstimatesXLogo";

function navActive(pathname: string, href: string) {
  if (href === "/services") return pathname.startsWith("/services");
  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full bg-transparent">
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-2 sm:px-6 lg:px-8">
        {/* Floating glass island navbar */}
        <div className="relative flex items-center justify-between gap-2 rounded-full border border-white/25 bg-white/[0.08] px-3 py-2 shadow-[0_8px_32px_-14px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-white/15 dark:border-white/[0.12] dark:bg-black/20 dark:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)] dark:ring-white/10 sm:gap-3 sm:px-5 sm:py-2.5">
        <Link href="/" className="group flex shrink-0 items-center gap-2 drop-shadow-sm">
          <EstimatesXLockup size="md" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {HEADER_NAV.map((item) => {
            if (item.type === "services") {
              const active = navActive(pathname, item.href);
              return (
                <div key={item.label} className="group/services relative px-2">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-white/35 text-slate-900 shadow-sm backdrop-blur-sm dark:bg-white/15 dark:text-white"
                        : "text-slate-800 hover:bg-white/25 hover:text-slate-950 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                    <svg className="h-4 w-4 opacity-60" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <ServicesMegaMenu />
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/35 text-slate-900 shadow-sm backdrop-blur-sm dark:bg-white/15 dark:text-white"
                    : "text-slate-800 hover:bg-white/25 hover:text-slate-950 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-brand-blue px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-brand-blue/90 md:inline-flex lg:px-5 lg:text-sm dark:hover:bg-brand-blue/95"
          >
            View detailed estimate
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex rounded-full border border-white/30 bg-white/15 p-2 text-slate-900 backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 overflow-hidden rounded-3xl border border-white/25 bg-white/20 shadow-xl shadow-black/15 backdrop-blur-2xl dark:border-white/[0.12] dark:bg-black/35 dark:shadow-black/40 lg:hidden"
            >
              <nav className="max-h-[75vh] overflow-y-auto px-4 py-4">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((s) => !s)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium text-slate-800 dark:text-slate-100"
              >
                Services
                <span className="text-slate-400">{mobileServicesOpen ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-3"
                  >
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                      Subcontractors
                    </p>
                    <ul className="mt-2 space-y-1 border-l border-slate-200 pl-3 dark:border-white/10">
                      {SUBCONTRACTOR_TRADES.slice(0, 12).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block py-1 text-sm text-slate-600 dark:text-slate-400"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/services/subcontractors" className="py-1 text-sm font-semibold text-teal-700 dark:text-teal-400" onClick={() => setOpen(false)}>
                          All subcontractor scopes →
                        </Link>
                      </li>
                    </ul>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                      General contractors
                    </p>
                    <ul className="mt-2 space-y-1 border-l border-slate-200 pl-3 dark:border-white/10">
                      {GENERAL_CONTRACTOR_LINKS.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="block py-1 text-sm text-slate-600 dark:text-slate-400" onClick={() => setOpen(false)}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                      Manufacturers
                    </p>
                    <ul className="mt-2 space-y-1 border-l border-slate-200 pl-3 dark:border-white/10">
                      {MANUFACTURER_LINKS.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="block py-1 text-sm text-slate-600 dark:text-slate-400" onClick={() => setOpen(false)}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services" className="mt-3 inline-block text-sm font-semibold text-brand-navy dark:text-sky-300" onClick={() => setOpen(false)}>
                      Services hub →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {HEADER_NAV.filter((i) => i.type === "link").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-3 font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-blue py-3 text-sm font-semibold text-white dark:bg-brand-blue"
                onClick={() => setOpen(false)}
              >
                View detailed estimate →
              </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
