import SectionHeadding from "@/components/helper/SectionHeading"
import { SkillData } from "@/data/data"
import Skillcard from "./skillcard"

const categoryOrder = ["Web Development", "Design & Creative Tools", "Certifications"];

function Skills(){
    return(
        <section id="skill" className="pt-16 pb-16" style={{backgroundImage:"url('/images/paged.png')"}}>
            <SectionHeadding>My Skills</SectionHeadding>

            <div className="w-[80%] mx-auto mt-20 space-y-16">
                {categoryOrder.map((category) => {
                    const skillsInCategory = SkillData.filter(s => s.category === category);
                    if (skillsInCategory.length === 0) return null;

                    return (
                        <div key={category}>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 border-l-4 border-[#178582] pl-4">
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-stretch">
                                {skillsInCategory.map((skill, i) => (
                                    <div
                                        key={skill.id}
                                        data-aos="flip-left"
                                        data-aos-delay={i * 100}
                                    >
                                        <Skillcard skill={skill}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
export default Skills
