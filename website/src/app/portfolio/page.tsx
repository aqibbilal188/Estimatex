import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sample EstimatesX portfolio grid—replace projects, imagery, and metrics with approved case studies.",
};

const cases = [
  {
    title: "Silver Oak Plaza",
    sector: "Commercial · Sample",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop",
    text: "Placeholder narrative describing estimating challenges, bid outcome, and disciplines covered.",
  },
  {
    title: "Fairfield at McKinney",
    sector: "Multifamily · Sample",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format&fit=crop",
    text: "Placeholder: phased estimates, VE options tracked, and coordination with design-assist trades.",
  },
  {
    title: "Mitchell School District",
    sector: "Institutional · Sample",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80&auto=format&fit=crop",
    text: "Placeholder: civil-heavy scope, allowances, and aggressive bid calendar commentary.",
  },
  {
    title: "Regional highway interchange",
    sector: "Infrastructure · Sample",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=80&auto=format&fit=crop",
    text: "Placeholder: heavy civil quantities, erosion controls, and staging assumptions narrative.",
  },
  {
    title: "Healthcare TI rollout",
    sector: "Healthcare · Sample",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop",
    text: "Placeholder: infection-control assemblies, above-ceiling MEP density, and AHJ contingencies.",
  },
  {
    title: "Industrial process building",
    sector: "Industrial · Sample",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80&auto=format&fit=crop",
    text: "Placeholder: equipment pads, embedded anchors, and vibration isolation assumptions.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-1 flex-col bg-slate-50 dark:bg-slate-950">
      <section className="border-b border-slate-200 bg-white py-14 dark:border-white/10 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Portfolio</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-slate-900 dark:text-white">
            Delivering results — sample studies
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Swap cards for verified owner-approved stories. Imagery currently uses royalty-free placeholders via
            Unsplash.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl flex-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {cases.map((c) => (
          <article key={c.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="relative aspect-[16/11] w-full">
              <Image src={c.image} alt="" fill className="object-cover" sizes="(max-width:768px)100vw,33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{c.sector}</p>
              <h2 className="font-display mt-1 text-xl font-semibold text-slate-900 dark:text-white">{c.title}</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{c.text}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="border-t border-slate-200 bg-white py-12 text-center dark:border-white/10 dark:bg-slate-900">
        <Link href="/contact" className="inline-flex rounded-full bg-teal-700 px-8 py-3 text-sm font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500">
          Pitch your next pursuit →
        </Link>
      </section>
    </div>
  );
}
