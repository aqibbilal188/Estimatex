"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    title: "Silver Oak Plaza",
    location: "Tennessee · Sample public bid package",
    excerpt: "Placeholder case study: civil, structural envelope, and interior scopes summarized for GC review.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Fairfield at McKinney",
    location: "Texas · Sample multifamily estimate",
    excerpt: "Placeholder: trade-by-trade takeoffs with drawing references for plumbing and finishes.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Mitchell School District",
    location: "South Dakota · Sample institutional civil scope",
    excerpt: "Placeholder: earthwork and utilities quantities packaged for contractor bid submission.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80&auto=format&fit=crop",
  },
];

export default function LandingPortfolio() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 dark:bg-slate-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Our projects
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Sample portfolio highlights
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Replace imagery, titles, and narratives with your verified projects and approved client logos.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-white/15 dark:text-white"
          >
            See all projects →
          </Link>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-lg dark:hover:shadow-black/40"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div
                  className={
                    reduceMotion
                      ? "absolute inset-0"
                      : "absolute inset-0 origin-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
                  }
                >
                  <Image src={p.image} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/5 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70 dark:from-slate-950/50 dark:via-slate-950/10"
                  aria-hidden
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {p.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
