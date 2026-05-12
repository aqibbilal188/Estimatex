import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MANUFACTURER_LINKS } from "@/lib/nav-config";
import { getServiceDetailBySlug } from "@/lib/service-detail-registry";

export const metadata: Metadata = {
  title: "Manufacturer & supplier estimating",
  description:
    "Quantity takeoff, cost estimating, bid support & leveling, and value engineering support for manufacturers and suppliers.",
};

function slugFromServiceHref(href: string) {
  return href.replace("/services/", "");
}

export default function ManufacturersPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Services</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-slate-900 dark:text-white">Manufacturers</h1>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            We support manufacturers and suppliers with quantity takeoff, cost estimating, bid support & leveling, and
            value engineering for USA-based projects.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex text-sm font-semibold text-teal-700 hover:underline dark:text-teal-400"
          >
            OEM estimating inquiry →
          </Link>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:px-8">
        {MANUFACTURER_LINKS.map((item) => {
          const slug = slugFromServiceHref(item.href);
          const detail = getServiceDetailBySlug(slug);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-teal-500/40 hover:shadow-md dark:border-white/10 dark:bg-slate-950 dark:hover:border-teal-500/35"
            >
              <div className="relative aspect-[16/10] shrink-0">
                {detail ? (
                  <Image
                    src={detail.imageSrc}
                    alt={detail.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{item.label}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {detail?.description ?? "Dedicated estimating support for manufacturers and suppliers."}
                </p>
                <span className="mt-4 text-sm font-semibold text-teal-700 dark:text-teal-400">View service page →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
