"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of experience", value: "6+", note: "Professional estimating industry experience" },
  { label: "Project coverage", value: "All CSI divisions", note: "Concrete, drywall, MEP, finishes, and site work" },
  { label: "Service focus", value: "USA-based projects", note: "Accurate takeoffs, fast turnaround, dependable support" },
];

export default function LandingStatsStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="text-center sm:text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{s.label}</p>
            <p className="font-display mt-2 text-4xl font-semibold text-slate-900 dark:text-white">{s.value}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">{s.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
