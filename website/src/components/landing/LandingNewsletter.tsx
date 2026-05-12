"use client";

import { motion } from "framer-motion";

export default function LandingNewsletter() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-14 dark:border-white/10 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Market insights newsletter</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Sample capture form—connect your ESP (Mailchimp, HubSpot, etc.) when you&apos;re ready.
          </p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 outline-none ring-teal-600/25 placeholder:text-slate-400 focus:ring-2 dark:border-white/10 dark:bg-slate-950 dark:text-white sm:max-w-xs"
            />
            <button
              type="submit"
              className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              Submit now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
