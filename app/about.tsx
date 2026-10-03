import SectionHeadding from "@/components/helper/SectionHeading"
import { AboutInfo } from "@/data/data"
import { FaCheck } from "react-icons/fa"
import Image from "next/image"
import customer from "../public/images/customer.png"
import experience from "../public/images/experience .png"
import completed from "../public/images/completed.png"
import rocket from "../public/images/rocket.png"

const skillChecklist = [
    { label: "Frontend Development" },
    { label: "Backend Development" },
    { label: "Full Stack Development" },
];

const stats = [
    { image: customer, width: 80, height: 80, value: AboutInfo.client, label: "Satisfied Customers" },
    { image: experience, width: 120, height: 80, value: AboutInfo.experience, label: "Year Experience" },
    { image: completed, width: 80, height: 80, value: AboutInfo.project, label: "Completed Project" },
    { image: rocket, width: 35, height: 70, value: AboutInfo.website, label: "Website Launched" },
];

function About(){
    return(
        <section id="about" className="pt-24 pb-24 bg-obsidian-950">

          <SectionHeadding>About Me</SectionHeadding>

          <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20">
            {/* text content */}
            <div data-aos="fade-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tightish text-white">{AboutInfo.title}</h3>
                <p className="mt-6 text-base text-white/50 leading-relaxed">{AboutInfo.discription}</p>
                <div className="mt-10 space-y-5">
                    {skillChecklist.map((item) => (
                        <div key={item.label} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full border border-brand-gold/40 flex items-center justify-center shrink-0">
                                <FaCheck className="text-brand-gold text-xs"/>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-medium text-white/80">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* stats content */}
            <div data-aos="zoom-in" data-aos-delay="150" className="grid grid-cols-2 gap-6 lg:mx-auto">
                {stats.map((stat) => (
                    <div key={stat.label} className="panel panel-hover p-6 text-center">
                        <Image src={stat.image} alt={`${stat.label} icon`} width={stat.width} height={stat.height} className="mx-auto opacity-90"/>
                        <p className="mt-4 font-bold text-2xl text-brand-gold">{stat.value}</p>
                        <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>
    )
}
export default About
