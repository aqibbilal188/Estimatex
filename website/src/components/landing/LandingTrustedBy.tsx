"use client";

import { motion } from "framer-motion";

const logos = ["GC Partner A", "Regional Builder", "Institutional CM", "Industrial ENR Top 400", "Education Owner"];

export default function LandingTrustedBy() {
  return (
    <section className="bg-white py-14 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
        >
          Trusted by teams like — placeholder marks
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-dashed border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:border-white/15 dark:text-slate-500"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
