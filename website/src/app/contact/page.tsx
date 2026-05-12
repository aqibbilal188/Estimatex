import type { Metadata } from "next";
import { ContactSection } from "@/components/landing/Sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a construction estimate—share plans, deadlines, and deliverables with EstimatesX.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ContactSection />
    </div>
  );
}
