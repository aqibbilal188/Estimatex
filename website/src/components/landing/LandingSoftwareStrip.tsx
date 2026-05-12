"use client";

import { motion } from "framer-motion";

const tools = ["Planswift", "Bluebeam", "ACC Build", "CostX", "Excel / Power BI", "Proprietary assemblies"];

export default function LandingSoftwareStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14 dark:border-white/10 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Software we use for takeoffs
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
            Sample toolchain — update with your certified stack
          </h2>
        </motion.div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex min-h-[72px] items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-center text-xs font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-950 dark:text-slate-300"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
