import type { Metadata } from "next";
import { TestimonialsSection } from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "Clients",
  description: "Client testimonials—accuracy, turnaround, and clarity from estimating and operations teams.",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <TestimonialsSection />
    </div>
  );
}
