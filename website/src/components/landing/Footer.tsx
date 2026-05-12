import Link from "next/link";
import { EstimatesXBrandBlock } from "@/components/brand/EstimatesXLogo";
import { FOOTER_PAGES, FOOTER_SERVICES } from "@/lib/nav-config";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <EstimatesXBrandBlock />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Dedicated construction estimating team providing professional estimation and quantity takeoff services for
              all trades across USA-based residential, commercial, and industrial projects.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Pages
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-slate-700 hover:text-[#003366] dark:text-slate-300 dark:hover:text-sky-300"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_SERVICES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-slate-700 hover:text-[#003366] dark:text-slate-300 dark:hover:text-sky-300"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <a href="tel:+10000000000" className="hover:text-[#003366] dark:hover:text-sky-300">
                  Phone number available on request
                </a>
              </li>
              <li>
                <a href="mailto:estimatex758@gmail.com" className="hover:text-[#003366] dark:hover:text-sky-300">
                  estimatex758@gmail.com
                </a>
              </li>
              <li className="text-slate-500 dark:text-slate-400">
                Serving clients across USA-based projects
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} EstimatesX. All rights reserved.</span>
          <Link href="/contact" className="hover:text-[#003366] dark:hover:text-sky-300">
            Privacy & cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
