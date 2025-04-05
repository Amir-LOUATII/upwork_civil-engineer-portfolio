import React from "react";
import ImageBackgroundSection from "../common/ImageBackgroundSection";
import approach from "@/assets/approach.png";
const values = [
  {
    title: "Collaborative Approach",
    description: `We believe in collaboration. Our process starts with a comprehensive and collaborative approach,
    diving deep into your project requirements. By understanding your vision and challenges,
    we set the stage for a tailored and efficient engineering solution.`,
  },
  {
    title: "Innovative Solutions",
    description: `We adopt an innovative approach that ensures adaptability and efficiency throughout the project lifecycle.
    This iterative method enables us to respond promptly to changing needs, integrate feedback seamlessly,
    and deliver high-quality solutions effectively.`,
  },
  {
    title: "Transparent Communication",
    description: `Transparency is key in our client relationships. From project initiation to delivery,
    we maintain open communication channels. Regular updates, progress reports, and collaborative decision-making
    keep you engaged and informed at every step.`,
  },
];
export default function ApproachSection() {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <header className="container mx-auto ">
        <h3 className="text-black text-3xl py-3 font-semibold">Approach</h3>
      </header>
      <ImageBackgroundSection
        imageSrc={approach}
        imageAlt="approach image"
        overlayColor="bg-black"
        overlayOpacity="opacity-40"
      >
        <div className="container mx-auto py-3 gap-4 h-full flex justify-center items-center ">
          <div>
            {" "}
            {values.map((item, index) => (
              <div
                key={index}
                className="flex  gap-4 md:gap-8 items-center mb-8 p-4 justify-start flex-wrap "
              >
                <h3 className="text-2xl font-bold  mb-2 md:mb-4 text-white max-w-1/6">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ImageBackgroundSection>
    </section>
  );
}
