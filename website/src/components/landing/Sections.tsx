"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getServiceDetailBySlug } from "@/lib/service-detail-registry";
import GlanceStats from "./GlanceStats";
import ServiceTiltCard from "./ServiceTiltCard";

const services = [
  {
    title: "Quantity Takeoff",
    desc: "Accurate material quantity calculations with trade-wise detailed takeoffs and drawing-based quantity extraction.",
    icon: "▣",
    slug: "quantity-takeoff",
  },
  {
    title: "Cost Estimating",
    desc: "Accurate project cost forecasting with labor and material pricing, trade-wise cost breakdowns, and bid support.",
    icon: "◈",
    slug: "cost-estimating",
  },
  {
    title: "Bid Support & Leveling",
    desc: "Competitive bid comparison, subcontractor quote leveling, scope gap identification, and tender support.",
    icon: "◎",
    slug: "bid-support-leveling",
  },
  {
    title: "Value Engineering Support",
    desc: "Cost-saving recommendations, efficient material selection, and alternative system analysis for better value.",
    icon: "◐",
    slug: "value-engineering-support",
  },
] as const;

const why = [
  "Aligned with common U.S. estimating formats and bid structures",
  "Trade-specific detail suitable for both GCs and subcontractors",
  "Rapid turnaround without sacrificing review rigor",
  "Confidential handling of plans and proprietary pricing",
  "Responsive communication aligned to bid dates",
];

const audiences = [
  {
    title: "General contractors",
    bullets: [
      "Division-level takeoffs and summaries",
      "Coverage across major trades",
      "Bid-ready formatting for owners & subs",
      "Zip-aware pricing where applicable",
    ],
  },
  {
    title: "Trade contractors",
    bullets: [
      "Scope-aligned quantities from your drawings",
      "Labor & material views tailored to your bid form",
      "Fast iterations when addenda drop",
      "Formatted for GC submission requirements",
    ],
  },
  {
    title: "Owners & developers",
    bullets: [
      "Budget validation before commitment",
      "Transparency trade-by-trade",
      "Support for lender & stakeholder reviews",
      "Residential & commercial programs",
    ],
  },
];

const steps = [
  { title: "Scope review", desc: "We clarify deliverables, deadlines, and bid form expectations." },
  { title: "Takeoffs", desc: "Quantities are extracted and cross-checked against drawings." },
  { title: "Pricing & QA", desc: "Rates validated against current market inputs and your constraints." },
  { title: "Delivery", desc: "You receive organized outputs ready for internal review or submission." },
];

const testimonials = [
  {
    quote:
      "The level of detail helped us submit confidently—quantities and scope were easy to defend at bid time.",
    name: "David H.",
    role: "Estimator · Southwest",
  },
  {
    quote: "Turnaround was fast without cutting corners. Our team stayed focused on strategy instead of counting sheets.",
    name: "Jason P.",
    role: "Preconstruction · West Coast",
  },
  {
    quote: "Drawing-referenced takeoffs made reviews painless. Communication stayed crisp right through deadline.",
    name: "Sarah L.",
    role: "Project Manager · Midwest",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
};

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-slate-100 py-20 dark:bg-slate-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Services</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Estimating built around how real bids get assembled
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Our expertise includes all CSI divisions such as concrete, drywall, framing, painting, flooring, electrical,
            plumbing, HVAC, roofing, masonry, finishes, and site work. We focus on accurate, detailed estimates to help
            you submit competitive bids and control project costs.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const detail = getServiceDetailBySlug(s.slug);
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="h-full"
              >
                <Link href={`/services/${s.slug}`} className="block h-full">
                  <ServiceTiltCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition-colors hover:border-teal-500/35 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/20 dark:hover:border-teal-500/40 dark:hover:bg-slate-950">
                    {detail ? (
                      <div className="relative -mx-6 -mt-6 aspect-[16/10] w-[calc(100%+3rem)] max-w-none">
                        <Image
                          src={detail.imageSrc}
                          alt={detail.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : null}
                    <div className="p-6 pt-5">
                      <span className="text-2xl text-teal-700 dark:text-teal-400">{s.icon}</span>
                      <h3 className="font-display mt-4 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.desc}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-teal-700 dark:text-teal-400">
                        View service page →
                      </span>
                    </div>
                  </ServiceTiltCard>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-20 dark:bg-slate-950 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Why teams hire us
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Precision you can stand behind—speed your calendar demands
          </h2>
          <ul className="mt-8 space-y-4">
            {why.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-xs text-teal-700 dark:bg-teal-500/20 dark:text-teal-400">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-visible rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-10 shadow-xl dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-2xl"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/15" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/15" />
          </div>
          <p className="relative text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
            At a glance
          </p>
          <GlanceStats />
        </motion.div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Who we serve</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            One partner across preconstruction roles
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Whether you are assembling a full GC package or bidding a single trade, deliverables stay consistent and
            review-friendly.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{a.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-teal-600 dark:text-teal-400">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 dark:bg-slate-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">How it works</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A straightforward estimating workflow
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Predictable steps, clear handoffs, and proactive updates as drawings evolve.
          </p>
        </motion.div>
        <div className="relative mt-16 grid gap-8 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent dark:via-teal-400/20 lg:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm dark:border-white/10 dark:bg-slate-900/80 lg:text-left"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white dark:bg-teal-600 lg:mx-0">
                {i + 1}
              </span>
              <h3 className="font-display mt-5 font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-slate-100 py-20 dark:bg-slate-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Testimonials
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Trusted by estimating and operations teams
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
            >
              <p className="flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-slate-200 pt-4 dark:border-white/10">
                <cite className="not-italic">
                  <span className="font-semibold text-slate-900 dark:text-white">{t.name}</span>
                  <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-500">{t.role}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white pb-24 pt-20 dark:bg-slate-950 sm:pb-32 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-teal-700/15 bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-12 shadow-[0_0_48px_-20px_rgba(15,118,110,0.18)] dark:border-teal-500/15 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-[0_0_60px_-24px_rgba(45,212,191,0.08)] sm:px-12 sm:py-14 lg:grid lg:grid-cols-[1fr_380px] lg:gap-12 lg:px-14">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Let&apos;s talk about your next estimate
            </h2>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              Share plans, bid date, and deliverable preferences—we&apos;ll respond quickly with a scope and timeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:estimatex758@gmail.com"
                className="rounded-full border border-slate-300 px-5 py-2.5 font-medium text-slate-800 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                estimatex758@gmail.com
              </a>
              <span className="rounded-full bg-slate-200/80 px-5 py-2.5 text-slate-600 dark:bg-white/10 dark:text-slate-300">
                Serving USA-based projects
              </span>
            </div>
          </motion.div>
          <motion.form
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-10 grid gap-4 lg:mt-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="grid gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              Full name
              <input
                type="text"
                required
                placeholder="Jane Contractor"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-600/35 placeholder:text-slate-400 focus:ring-2 dark:border-white/15 dark:bg-slate-950/80 dark:text-white dark:placeholder:text-slate-600"
              />
            </label>
            <label className="grid gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              Email
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-600/35 placeholder:text-slate-400 focus:ring-2 dark:border-white/15 dark:bg-slate-950/80 dark:text-white dark:placeholder:text-slate-600"
              />
            </label>
            <label className="grid gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              Project brief
              <textarea
                rows={4}
                placeholder="Trade, location, bid date, sheet count..."
                className="resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-teal-600/35 placeholder:text-slate-400 focus:ring-2 dark:border-white/15 dark:bg-slate-950/80 dark:text-white dark:placeholder:text-slate-600"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-teal-700 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              Request proposal
            </button>
            <p className="text-[11px] text-slate-500 dark:text-slate-500">
              This demo form does not submit anywhere yet—wire it to your CRM or email API when ready.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
