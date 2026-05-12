import Image from "next/image";
import Link from "next/link";

type ServicePageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  relatedHref?: string;
  relatedLabel?: string;
  children?: React.ReactNode;
};

export function ServicePageShell({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  bullets,
  relatedHref,
  relatedLabel,
  children,
}: ServicePageShellProps) {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-b border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
              <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
              {relatedHref && relatedLabel ? (
                <Link
                  href={relatedHref}
                  className="mt-6 inline-flex text-sm font-semibold text-brand-navy hover:underline dark:text-sky-300"
                >
                  {relatedLabel} →
                </Link>
              ) : null}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/10 dark:border-white/10 dark:shadow-black/40">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 dark:bg-slate-900 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">What you can expect</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300"
              >
                <span className="mt-0.5 text-brand-navy dark:text-sky-400" aria-hidden>
                  ●
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {children}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-blue/90"
            >
              Request this service →
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Back to services hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
