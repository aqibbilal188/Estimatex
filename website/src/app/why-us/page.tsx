import type { Metadata } from "next";
import { WhySection } from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "Why us",
  description:
    "Why teams hire EstimatesX—US estimating norms, trade-specific detail, fast turnaround, and confidential handling.",
};

export default function WhyUsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <WhySection />
    </div>
  );
}
