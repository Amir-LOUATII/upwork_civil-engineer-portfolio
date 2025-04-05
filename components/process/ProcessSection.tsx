import SectionTitle from "../common/SectionTitle";
import Arrow from "./Arrow";
import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  return (
    <section className="section">
      <SectionTitle text="Process" />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 md:hidden">
          <ProcessStep label="Analysis" />
          <Arrow className="rotate-90" />
          <ProcessStep label="Design Exploration" />
          <Arrow className="rotate-90" />
          <ProcessStep label="Construction & Testing" />
          <Arrow className="rotate-90" />
          <ProcessStep label="Launch" />
        </div>

        <div className="hidden md:flex flex-row items-center justify-center gap-2">
          <ProcessStep label="Analysis" />
          <Arrow />
          <ProcessStep label="Design Exploration" />
          <Arrow />
          <ProcessStep label="Construction & Testing" />
          <Arrow />
          <ProcessStep label="Launch" />
        </div>
      </div>
    </section>
  );
}
