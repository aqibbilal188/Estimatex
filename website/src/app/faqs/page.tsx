import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about EstimatesX estimating services—sample answers to replace later.",
};

const faqs = [
  {
    q: "What plans or files do you need to start?",
    a: "Sample answer: PDF drawing sets, invitation links, bid forms, addenda logs, and any pricing constraints—we'll confirm intake during scope review.",
  },
  {
    q: "How fast can you turn around an estimate?",
    a: "Sample answer: typical turnaround depends on sheet count and disciplines—state your standard SLAs here.",
  },
  {
    q: "Can you match our Excel / GC template?",
    a: "Sample answer: yes—provide a masked template and we'll map quantities and pricing columns accordingly.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Sample answer: confidentiality terms can mirror your MSAs or standalone NDAs—legal review placeholder.",
  },
];

export default function FaqsPage() {
  return (
    <div className="flex flex-1 flex-col bg-slate-50 dark:bg-slate-950">
      <section className="border-b border-slate-200 bg-white py-14 dark:border-white/10 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Support</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-slate-900 dark:text-white">
            Frequently asked questions
          </h1>
        </div>
      </section>
      <div className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <dl className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
              <dt className="font-semibold text-slate-900 dark:text-white">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
