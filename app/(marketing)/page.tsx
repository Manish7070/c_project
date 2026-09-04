import { LandingNavbar } from "@/components/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustFeatures } from "@/components/landing/TrustFeatures";
import { StatsSection } from "@/components/landing/StatsSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BrowseSyllabus } from "@/components/landing/BrowseSyllabus";
import { ResourceShowcase } from "@/components/landing/ResourceShowcase";
import { ContributorsSection } from "@/components/landing/ContributorsSection";
import { ReputationSection } from "@/components/landing/ReputationSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ExamModeSection } from "@/components/landing/ExamModeSection";
import { ModerationSection } from "@/components/landing/ModerationSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { FinalCTA, Newsletter } from "@/components/landing/FinalCTA";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingNavbar />
      <HeroSection />
      <TrustFeatures />
      <StatsSection />
      <HowItWorks />
      <BrowseSyllabus />
      <ResourceShowcase />
      <ContributorsSection />
      <ReputationSection />
      <TestimonialsSection />
      <ExamModeSection />
      <ModerationSection />
      <ComparisonSection />
      <FinalCTA />
      <Newsletter />
      <LandingFooter />
    </main>
  );
}
