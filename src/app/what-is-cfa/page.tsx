import HeroSection from "./components/HeroSection";
import EligibilitySection from "./components/EligibilitySection";
import RegistrationCriteriaSection from "./components/RegistrationCriteriaSection";
import LevelsSection from "./components/LevelsSection";
import Vision2030Section from "./components/Vision2030Section";

export const metadata = {
  title: "What is CFA? | UP SKILL",
  description: "Learn about the CFA charter, eligibility requirements, and how it aligns with Saudi Vision 2030.",
};

export default function WhatIsCfaPage() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <EligibilitySection />
      <RegistrationCriteriaSection />
      <LevelsSection />
      <Vision2030Section />
    </main>
  );
}
