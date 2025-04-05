import ApproachSection from "@/components/approach/ApproachSection";
import ExperienceSection from "@/components/experiences/ExperienceSection";
import Hero from "@/components/hero/Hero";
import NavigationGrid from "@/components/navigation-grid/NavigationGrid";
import ProcessSection from "@/components/process/ProcessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <NavigationGrid />
      <ExperienceSection />
      <ApproachSection />
      <ProcessSection />
    </>
  );
}
