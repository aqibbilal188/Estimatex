"use client";

import { motion } from "framer-motion";

export default function LandingGovTrust() {
  return (
    <section className="bg-slate-900 py-16 text-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">Trusted workflows</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">Built for rigorous procurement environments</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Sample disclosure: teams supporting federal, state, and municipal programs often require compliant estimate
            formats, disciplined revisions, and confidentiality. Replace with your actual registrations, certifications,
            and agency experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
