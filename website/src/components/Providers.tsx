"use client";

import { ThemeProvider } from "next-themes";
import ScrollToTop from "./ScrollToTop";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ScrollToTop />
      {children}
    </ThemeProvider>
  );
}
