import SectionHeadding from "@/components/helper/SectionHeading"
import { ProjectData } from "@/data/data"
import ProjectCard from "./projectCard"

function Project(){
    return(
        <section
            id="project"
            className="relative pt-24 pb-24 overflow-hidden"
            style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        >
            <div className="absolute inset-0 bg-obsidian-950/85"></div>
            <div className="relative">
            <SectionHeadding>My Projects</SectionHeadding>
            <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
                {ProjectData.map((project, i) => (
                    <div
                        key={project.id}
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                        className="h-full"
                    >
                        <ProjectCard project={project}/>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}
export default Project
