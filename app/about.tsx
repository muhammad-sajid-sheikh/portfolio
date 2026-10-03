import SectionHeadding from "@/components/helper/SectionHeading"
import { AboutInfo } from "@/data/data"
import { FaCheck } from "react-icons/fa"
import Image from "next/image"
import customer from "../public/images/customer.png"
import experience from "../public/images/experience .png"
import completed from "../public/images/completed.png"
import rocket from "../public/images/rocket.png"

const skillChecklist = [
    { label: "Frontend Development", color: "bg-blue-800" },
    { label: "Backend Development", color: "bg-orange-800" },
    { label: "Full Stack Development", color: "bg-green-800" },
];

const stats = [
    { image: customer, width: 80, height: 80, value: AboutInfo.client, label: "Satisfied Customers" },
    { image: experience, width: 120, height: 80, value: AboutInfo.experience, label: "Year Experience" },
    { image: completed, width: 80, height: 80, value: AboutInfo.project, label: "Completed Project" },
    { image: rocket, width: 35, height: 70, value: AboutInfo.website, label: "Website Launched" },
];

function About(){
    return(
        <section id="about" className="pt-16 pb-16" style={{backgroundImage:"url('/images/pagel.png')"}}>

          <SectionHeadding>About Me</SectionHeadding>

          <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
            {/* text content */}
            <div data-aos="fade-left">
                <h2 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-200">{AboutInfo.title}</h2>
                <p className="mt-6 text-base text-[#BFA181]">{AboutInfo.discription}</p>
                <div className="mt-8">
                    {skillChecklist.map((item) => (
                        <div key={item.label} className="flex items-center space-x-3 mb-6">
                            <div className={`w-7 h-7 rounded-md ${item.color} flex items-center justify-center shrink-0 shadow-md`}>
                                <FaCheck className="text-white text-sm"/>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-[#BFA181]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* stats content */}
            <div data-aos="zoom-in" data-aos-delay="150" className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
                {stats.map((stat) => (
                    <div key={stat.label} className="transition-transform duration-300 hover:-translate-y-1">
                        <Image src={stat.image} alt={`${stat.label} icon`} width={stat.width} height={stat.height} className="mx-auto"/>
                        <p className="mt-3 font-bold text-xl text-[#BFA181] text-center">{stat.value}</p>
                        <p className="text-base sm:text-lg text-[#BFA181] text-center">{stat.label}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>
    )
}
export default About
