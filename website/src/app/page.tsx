import Hero from "@/components/landing/Hero";
import LandingStatsStrip from "@/components/landing/LandingStatsStrip";
import LandingWelcome from "@/components/landing/LandingWelcome";
import LandingPortfolio from "@/components/landing/LandingPortfolio";
import LandingSoftwareStrip from "@/components/landing/LandingSoftwareStrip";
import LandingGovTrust from "@/components/landing/LandingGovTrust";
import LandingTrustedBy from "@/components/landing/LandingTrustedBy";
import LandingQuoteBand from "@/components/landing/LandingQuoteBand";
import LandingNewsletter from "@/components/landing/LandingNewsletter";
import RolesTabsSection from "@/components/landing/RolesTabsSection";
import {
  ContactSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  WhySection,
} from "@/components/landing/Sections";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <LandingStatsStrip />
      <LandingWelcome />
      <ServicesSection />
      <WhySection />
      <RolesTabsSection />
      <ProcessSection />
      <LandingPortfolio />
      <LandingSoftwareStrip />
      <LandingGovTrust />
      <LandingTrustedBy />
      <TestimonialsSection />
      <LandingQuoteBand />
      <ContactSection />
      <LandingNewsletter />
    </div>
  );
}
