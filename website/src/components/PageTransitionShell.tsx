"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const duration = 0.4;

export default function PageTransitionShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className="flex min-h-0 flex-1 flex-col"
      style={{ perspective: "1200px" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          className="flex min-h-0 flex-1 flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
