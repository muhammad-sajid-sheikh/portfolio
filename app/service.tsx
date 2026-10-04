import SectionHeadding from "@/components/helper/SectionHeading"
import { servicesData } from "@/data/data"
import Servicecard from "./serviceCard"

function Service(){
    return(
        <section
            id="services"
            className="relative pt-24 pb-24 overflow-hidden"
            style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        >
            <div className="absolute inset-0 bg-obsidian-950/85"></div>
            <div className="relative">
            <SectionHeadding>Services</SectionHeadding>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[88%] mx-auto items-stretch mt-20">
                {servicesData.map((service, i) => (
                    <div
                        key={service.id}
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                        className="h-full"
                    >
                        <Servicecard service={service}/>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}
export default Service
