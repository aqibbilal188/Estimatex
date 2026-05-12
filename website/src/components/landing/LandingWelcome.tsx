"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingWelcome() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Welcome to EstimatesX
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Professional estimating partners for contractors, developers, and suppliers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            We are a dedicated construction estimating team providing professional estimation and quantity takeoff
            services for all trades across USA-based projects. With 6 years of experience, we have supported
            contractors, subcontractors, and builders on residential, commercial, and industrial work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              Explore services
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 dark:border-white/15 dark:text-white"
            >
              View portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
