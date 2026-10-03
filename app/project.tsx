import SectionHeadding from "@/components/helper/SectionHeading"
import { ProjectData } from "@/data/data"
import ProjectCard from "./projectCard"

function Project(){
    return(
        <section id="project" className="pt-16 pb-16" style={{backgroundImage:"url('/images/pagel.png')"}}>
            <SectionHeadding>My Projects</SectionHeadding>
            <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
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
        </section>
    )
}
export default Project
