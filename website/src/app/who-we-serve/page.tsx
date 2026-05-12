import type { Metadata } from "next";
import RolesTabsSection from "@/components/landing/RolesTabsSection";

export const metadata: Metadata = {
  title: "Who we serve",
  description:
    "EstimatesX role-based solutions for GCs, trade contractors, owners, consultants, and facility managers—sample messaging.",
};

export default function WhoWeServePage() {
  return (
    <div className="flex flex-1 flex-col">
      <RolesTabsSection />
    </div>
  );
}
