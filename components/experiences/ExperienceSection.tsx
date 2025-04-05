import project2 from "@/assets/civil.png";
import project1 from "@/assets/tunnel.png";
import ProjectCard from "./ProjectCard";

export default function ExperienceSection() {
  return (
    <section className="w-full  px-4 py-12 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-8">Experience.</h1>

            {/* Project Cards */}
            {/* Project Card 1 */}
            <ProjectCard
              imageSrc={project1}
              title="Civil engineering app for project management"
              text="Engineering Tools • 2023"
            />
          </div>
          <div>
            {" "}
            <ProjectCard
              imageSrc={project2}
              title="Civil engineering projects showcase"
              text="Engineering Solutions • 2022"
            />
            <button className="block ms-auto text-nowrap bg-[#C5BDB7] hover:bg-[#D9D9D9] text-black font-bold py-2 px-4 rounded mt-4">
              Explore projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
