import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description: "EstimatesX office locations—sample addresses and coverage map placeholder.",
};

export default function LocationsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-white py-14 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Locate us</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-slate-900 dark:text-white">Offices & coverage</h1>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Sample page—embed Google Maps or Mapbox when you have finalized addresses. Nationwide remote delivery can be
            stated here.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-sm text-slate-500 dark:border-white/15 dark:bg-slate-900 dark:text-slate-400">
            Map embed placeholder
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
              <h2 className="font-semibold text-slate-900 dark:text-white">Headquarters · sample</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                123 Commerce Blvd, Suite 400
                <br />
                Houston, TX 77042 — replace with real mailing address
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
              <h2 className="font-semibold text-slate-900 dark:text-white">Satellite studio · sample</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Remote estimating pods covering Pacific & Eastern time zones—customize as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
