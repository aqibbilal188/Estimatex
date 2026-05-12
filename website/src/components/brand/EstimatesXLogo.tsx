"use client";

import { useId } from "react";

/** Brand palette matched to provided logo art */
export const BRAND_NAVY = "#003366";
export const BRAND_BLUE = "#1B75BC";
export const BRAND_TAGLINE = "#6D6E71";

/**
 * Icon — house + chimney + window + growth arrow (transparent BG).
 * Gradients + top specular read as polished / dimensional.
 */
export function EstimatesXGlyph({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gArrow = `ex-arr-${uid}`;
  const gNavy = `ex-nvy-${uid}`;
  const gSpec = `ex-spc-${uid}`;

  return (
    <svg viewBox="0 0 88 88" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={gArrow} x1="12" y1="76" x2="84" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--ex-arr-a)" />
          <stop offset="0.42" stopColor="var(--ex-arr-b)" />
          <stop offset="1" stopColor="var(--ex-arr-c)" />
        </linearGradient>
        <linearGradient id={gNavy} x1="22" y1="76" x2="76" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--ex-nvy-a)" />
          <stop offset="0.48" stopColor="var(--ex-nvy-b)" />
          <stop offset="1" stopColor="var(--ex-nvy-c)" />
        </linearGradient>
        <linearGradient id={gSpec} x1="44" y1="0" x2="44" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--ex-spc-top)" />
          <stop offset="0.45" stopColor="var(--ex-spc-mid)" />
          <stop offset="1" stopColor="var(--ex-spc-bot)" />
        </linearGradient>
      </defs>

      {/* Arrow */}
      <path
        d="M 10 74 L 22 56 L 34 62 L 46 42 L 58 48 L 72 22 L 82 14"
        stroke={`url(#${gArrow})`}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M 82 14 L 72 11 L 75 24 Z" fill={`url(#${gArrow})`} />

      {/* Chimney */}
      <rect x="20" y="18" width="14" height="24" rx="2" stroke={`url(#${gNavy})`} strokeWidth={3.5} />

      {/* House */}
      <path
        d="M 34 42 L 56 20 L 78 42 V 74 H 34 V 42 Z"
        stroke={`url(#${gNavy})`}
        strokeWidth={3.75}
        strokeLinejoin="round"
      />

      {/* Window */}
      <rect x="45" y="48" width="22" height="18" rx="2" stroke={`url(#${gNavy})`} strokeWidth={3} />
      <line x1="56" y1="48" x2="56" y2="66" stroke={`url(#${gNavy})`} strokeWidth={2.25} strokeLinecap="square" />
      <line x1="45" y1="57" x2="67" y2="57" stroke={`url(#${gNavy})`} strokeWidth={2.25} strokeLinecap="square" />

      {/* Gloss pass */}
      <rect width="88" height="88" fill={`url(#${gSpec})`} style={{ mixBlendMode: "soft-light" }} />
    </svg>
  );
}

/** Wrapper: subtle outer glow + animated shine sweep */
function EstimatesXShinyMark({ iconClassName }: { iconClassName: string }) {
  return (
    <span className="relative isolate inline-block overflow-hidden rounded-xl drop-shadow-[0_2px_10px_rgba(27,117,188,0.35)] ring-1 ring-white/40 dark:drop-shadow-[0_2px_18px_rgba(125,211,252,0.5)] dark:ring-white/35">
      <EstimatesXGlyph className={`relative z-0 ${iconClassName}`} />
      <span className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]" aria-hidden>
        <span className="absolute -top-[45%] bottom-[-45%] left-0 w-[55%] animate-[estimatesx-shine_4.2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-95 motion-reduce:animate-none dark:via-white/50" />
      </span>
    </span>
  );
}

type LockupSize = "sm" | "md" | "lg";

const sizeMap: Record<LockupSize, { icon: string; word: string; gap: string }> = {
  sm: { icon: "h-9 w-9", word: "text-sm", gap: "gap-2" },
  md: { icon: "h-11 w-11", word: "text-[0.95rem]", gap: "gap-2.5" },
  lg: { icon: "h-14 w-14", word: "text-xl", gap: "gap-3" },
};

function Wordmark({ sizeClass }: { sizeClass: string }) {
  return (
    <span className={`inline-flex items-baseline gap-0 ${sizeClass}`}>
      <span className="bg-gradient-to-br from-[#105a9e] via-[#003366] to-[#002244] bg-clip-text font-sans font-bold uppercase tracking-[0.14em] text-transparent dark:from-white dark:via-sky-100 dark:to-sky-200">
        Estimates
      </span>
      <span className="bg-gradient-to-br from-neutral-800 via-neutral-950 to-black bg-clip-text font-extrabold uppercase tracking-[0.14em] text-transparent dark:from-slate-50 dark:via-white dark:to-sky-100">
        X
      </span>
    </span>
  );
}

/** Navbar — horizontal */
export function EstimatesXLockup({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: LockupSize;
}) {
  const s = sizeMap[size];
  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <EstimatesXShinyMark iconClassName={`${s.icon} shrink-0`} />
      <Wordmark sizeClass={s.word} />
    </span>
  );
}

/** Footer — stacked */
export function EstimatesXBrandBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <EstimatesXShinyMark iconClassName="h-[4.25rem] w-[4.25rem] shrink-0" />
      <div>
        <p className="inline-flex flex-wrap items-baseline gap-0 font-sans text-lg font-bold uppercase tracking-[0.14em]">
          <span className="bg-gradient-to-br from-[#105a9e] via-[#003366] to-[#002244] bg-clip-text text-transparent dark:from-white dark:via-sky-100 dark:to-sky-200">
            Estimates
          </span>
          <span className="bg-gradient-to-br from-neutral-800 via-neutral-950 to-black bg-clip-text font-extrabold text-transparent dark:from-slate-50 dark:via-white dark:to-sky-100">
            X
          </span>
        </p>
        <div className="mt-2.5 h-px max-w-[16rem] bg-gradient-to-r from-transparent via-[#6D6E71]/50 to-transparent dark:via-slate-300/45" />
        <p className="mt-2 max-w-xs text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-[color:var(--ex-tagline-muted)]">
          Construction &amp; home estimation services
        </p>
      </div>
    </div>
  );
}
