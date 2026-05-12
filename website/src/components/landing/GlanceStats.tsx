"use client";

import { useEffect, useRef, useState } from "react";

const STAGGER_MS = 150;
const COUNT_DURATION_MS = 2000;

function useCountUp(run: boolean, target: number, durationMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) {
      setValue(0);
      return;
    }

    let start: number | null = null;
    let raf = 0;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, durationMs]);

  return value;
}

function NumericStatCard({
  index,
  sectionVisible,
  target,
  suffix,
  desc,
}: {
  index: number;
  sectionVisible: boolean;
  target: number;
  suffix: string;
  desc: string;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!sectionVisible) return;
    const id = window.setTimeout(() => setRevealed(true), index * STAGGER_MS);
    return () => window.clearTimeout(id);
  }, [sectionVisible, index]);

  const count = useCountUp(revealed, target, COUNT_DURATION_MS);

  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5"
      style={{
        transform: revealed ? "perspective(1000px) rotateX(0deg)" : "perspective(1000px) rotateX(90deg)",
        opacity: revealed ? 1 : 0,
        transformStyle: "preserve-3d",
        transition: "transform 0.65s ease-out, opacity 0.65s ease-out",
      }}
    >
      <p className="text-3xl font-semibold tabular-nums text-slate-900 dark:text-white">
        {count}
        <span className="font-semibold">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
    </div>
  );
}

function TextStatCard({
  index,
  sectionVisible,
  title,
  desc,
}: {
  index: number;
  sectionVisible: boolean;
  title: string;
  desc: string;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!sectionVisible) return;
    const id = window.setTimeout(() => setRevealed(true), index * STAGGER_MS);
    return () => window.clearTimeout(id);
  }, [sectionVisible, index]);

  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:col-span-2"
      style={{
        transform: revealed ? "perspective(1000px) rotateX(0deg)" : "perspective(1000px) rotateX(90deg)",
        opacity: revealed ? 1 : 0,
        transformStyle: "preserve-3d",
        transition: "transform 0.65s ease-out, opacity 0.65s ease-out",
      }}
    >
      <p className="text-3xl font-semibold text-slate-900 dark:text-white">{title}</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
    </div>
  );
}

export default function GlanceStats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || triggeredRef.current) return;
        triggeredRef.current = true;
        setSectionVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative mt-8 grid gap-6 sm:grid-cols-2 [perspective:1000px]">
      <NumericStatCard
        index={0}
        sectionVisible={sectionVisible}
        target={15}
        suffix="+"
        desc="Years combined estimating experience"
      />
      <NumericStatCard
        index={1}
        sectionVisible={sectionVisible}
        target={500}
        suffix="+"
        desc="Projects supported nationwide"
      />
      <TextStatCard
        index={2}
        sectionVisible={sectionVisible}
        title="Bid-ready"
        desc="Outputs structured for internal QA, executive summaries, and field questions—without rework."
      />
    </div>
  );
}
