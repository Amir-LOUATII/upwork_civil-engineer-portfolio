import Arrow from "./Arrow";
import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Process
        </h2>

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
