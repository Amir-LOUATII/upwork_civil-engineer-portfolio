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
    <section className="section" aria-labelledby="approach-heading">
      <header className="container mx-auto px-4">
        <h2
          id="approach-heading"
          className="text-3xl font-semibold text-black py-3"
        >
          Our Approach
        </h2>
      </header>

      <ImageBackgroundSection
        imageSrc={approach}
        imageAlt="Team collaborating on a project"
        overlayColor="bg-black"
        overlayOpacity="opacity-40"
      >
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {values.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                data-aos="fade-up"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white text-base md:text-lg leading-relaxed">
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
