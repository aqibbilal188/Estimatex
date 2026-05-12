"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingQuoteBand() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">Request a quote</p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold">
            Planning to bid on an upcoming project? Tell us what you need—we&apos;ll respond within 24 hours (sample
            SLA).
          </h2>
        </motion.div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-400"
        >
          Start your estimate
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
