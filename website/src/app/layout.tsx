import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Providers from "@/components/Providers";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8fafc" }, { media: "(prefers-color-scheme: dark)", color: "#020617" }],
};

export const metadata: Metadata = {
  title: {
    default: "EstimatesX | Construction Estimating & Takeoffs",
    template: "%s | EstimatesX",
  },
  description:
    "Professional construction estimating services—accurate quantity takeoffs, trade-specific estimates, and bid support for general contractors and subcontractors nationwide.",
  keywords: [
    "construction estimating",
    "quantity takeoff",
    "bid support",
    "commercial estimating",
    "residential estimating",
    "subcontractor estimates",
    "EstimatesX",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Providers>
          <Header />
          <main className="relative flex min-h-0 flex-1 flex-col overflow-x-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
