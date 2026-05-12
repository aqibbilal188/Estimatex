/**
 * Esitimatex brand mark — refined E+X monogram with a single subtle structural accent.
 */
export function EsitimatexMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="20" cy="20" r="20" className="fill-teal-950 dark:fill-teal-900" />

      {/* Single datum line — scale / estimating (kept minimal) */}
      <line
        x1="11"
        y1="31.25"
        x2="29"
        y2="31.25"
        className="stroke-white/25"
        strokeWidth="0.65"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Soft gable — construction context without clutter */}
      <path
        d="M 12.75 10.75 L20 7.85 L27.25 10.75"
        className="stroke-white/30"
        strokeWidth="0.9"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* E + X — matched weights, optically centered */}
      <g transform="translate(0.35, 0.35)">
        <rect className="fill-white" x="9.25" y="12" width="2.5" height="17" rx="0.45" />
        <rect className="fill-white" x="11.75" y="12" width="9.25" height="2.5" rx="0.45" />
        <rect className="fill-white" x="11.75" y="18.125" width="6.75" height="2.5" rx="0.45" />
        <rect className="fill-white" x="11.75" y="24.25" width="9.25" height="2.5" rx="0.45" />
        <path
          className="stroke-white fill-none"
          strokeWidth="2.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          d="M 23.65 12.15 L 30.35 28.85 M 30.35 12.15 L 23.65 28.85"
        />
      </g>
    </svg>
  );
}
