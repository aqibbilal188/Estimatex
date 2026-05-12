"use client";

import { useCallback, useLayoutEffect, useRef } from "react";

function defaultBoxShadow() {
  if (typeof document === "undefined") {
    return "0 1px 3px rgba(15, 23, 42, 0.08), 0 8px 24px rgba(15, 23, 42, 0.06)";
  }
  return document.documentElement.classList.contains("dark")
    ? "0 14px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(255, 255, 255, 0.06)"
    : "0 1px 3px rgba(15, 23, 42, 0.08), 0 8px 24px rgba(15, 23, 42, 0.06)";
}

type ServiceTiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ServiceTiltCard({ children, className = "" }: ServiceTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.boxShadow = defaultBoxShadow();
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  }, []);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.35s ease-out, box-shadow 0.35s ease-out";
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    el.style.boxShadow = defaultBoxShadow();
  }, []);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    el.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out";

    const rect = el.getBoundingClientRect();
    const halfW = rect.width / 2 || 1;
    const halfH = rect.height / 2 || 1;
    const cx = rect.left + halfW;
    const cy = rect.top + halfH;

    const nx = (e.clientX - cx) / halfW;
    const ny = (e.clientY - cy) / halfH;

    const maxDeg = 9;
    const rotateY = nx * maxDeg;
    const rotateX = -ny * maxDeg;

    const shadowShift = 16;
    const shadowX = -nx * shadowShift;
    const shadowY = -ny * shadowShift + 4;
    const depth = Math.min(Math.abs(nx) + Math.abs(ny), 1.4);
    const blur = 22 + depth * 16;

    const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
    const elevated = `rgba(${isDark ? "0, 0, 0" : "15, 23, 42"}, ${isDark ? 0.38 + depth * 0.22 : 0.1 + depth * 0.12})`;
    const rim = isDark ? "0 0 0 1px rgba(255,255,255,0.05)" : "0 1px 0 rgba(255,255,255,0.55)";

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px ${elevated}, ${rim}`;
  }, []);

  const handleEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.2s ease-out, box-shadow 0.2s ease-out";
    el.style.boxShadow = defaultBoxShadow();
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={reset}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </div>
  );
}
