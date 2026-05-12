"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&auto=format&fit=crop",
    alt: "Construction blueprints and planning",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format&fit=crop",
    alt: "Construction site teamwork",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop",
    alt: "Modern commercial building facade",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop",
    alt: "Structural steel and building frame",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80&auto=format&fit=crop",
    alt: "Engineering and site coordination",
  },
];

const SLIDE_INTERVAL_MS = 5500;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const pauseRef = useRef(false);

  const goTo = useCallback((i: number) => {
    setActive(i % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      if (!pauseRef.current) setActive((a) => (a + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      className="relative ml-[calc(50%-50vw)] flex min-h-[max(36rem,calc(100svh-4rem))] w-screen max-w-[100vw] shrink-0 flex-col justify-end overflow-hidden pb-10 pt-24 sm:justify-center sm:pb-16 sm:pt-28"
      onMouseEnter={() => {
        pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
    >
      {/* Full-width rotating background pictures */}
      <div className="absolute inset-0 z-0 bg-slate-900" aria-hidden>
        {HERO_SLIDES.map((slide, i) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={slide.src} alt="" fill className="object-cover object-center" sizes="100vw" priority={i === 0} />
          </motion.div>
        ))}
      </div>

      {/* Scrim for readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/55 to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/35 to-transparent sm:from-black/70 sm:via-black/25"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md"
          >
            Construction estimating · Takeoffs · Bid support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Fast, accurate estimates that help you{" "}
            <span className="text-teal-300">win more bids</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-slate-200"
          >
            Detailed quantity takeoffs, CSI-aligned cost breakdowns, and trade-specific estimates—delivered with the
            clarity GCs and subs expect on tight deadlines.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/30 transition hover:bg-teal-400"
            >
              Get a free quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View services
            </Link>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-10"
          >
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">Turnaround</dt>
              <dd className="mt-1 text-lg font-bold text-white">24–48 hrs</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">Coverage</dt>
              <dd className="mt-1 text-lg font-bold text-white">Nationwide</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">Trades</dt>
              <dd className="mt-1 text-lg font-bold text-white">GC & subs</dd>
            </div>
          </motion.dl>
        </div>
      </div>

      <div
        className="relative z-10 mx-auto mt-10 flex w-full max-w-6xl justify-center px-4 sm:mt-12 sm:px-6 lg:justify-start lg:px-8"
        role="tablist"
        aria-label="Hero images"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 backdrop-blur-md">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1} of ${HERO_SLIDES.length}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 ${
                i === active ? "w-8 bg-teal-400" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
