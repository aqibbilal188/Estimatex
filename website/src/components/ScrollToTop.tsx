"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll window to top on every client-side route change (mega menu, mobile nav, etc.). */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
