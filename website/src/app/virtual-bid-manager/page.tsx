import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Bid Manager",
  description:
    "Sample Virtual Bid Manager offering—embedded estimating capacity, playbook, and SLA placeholders for EstimatesX.",
};

export default function VirtualBidManagerPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-slate-900 py-16 text-white dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-400/90">Capability</p>
          <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">Virtual Bid Manager</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            Sample positioning modeled after dedicated bid-desk partners—replace with your staffing model, tooling, and
            engagement rules (hours, rush fees, document intake).
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-400"
          >
            Schedule onboarding →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              title: "Embedded coverage",
              body: "Placeholder: weekday coverage windows, escalation paths, and how addenda are triaged.",
            },
            {
              title: "Governance",
              body: "Placeholder: document control, confidentiality, revision logs, and GC-facing formatting standards.",
            },
            {
              title: "Outputs",
              body: "Placeholder: estimate templates, variance narratives, and subcontractor comparison worksheets.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950">
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{c.title}</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
