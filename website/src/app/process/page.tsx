import type { Metadata } from "next";
import { ProcessSection } from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How EstimatesX works—scope review, takeoffs, pricing & QA, and final delivery aligned to your bid schedule.",
};

export default function ProcessPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ProcessSection />
    </div>
  );
}
