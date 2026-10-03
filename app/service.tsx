import SectionHeadding from "@/components/helper/SectionHeading"
import { servicesData } from "@/data/data"
import Servicecard from "./serviceCard"

function Service(){
    return(
        <section id="services" className="pt-16 pb-16" style={{backgroundImage:"url('/images/paged.png')"}}>
            <SectionHeadding>Services</SectionHeadding>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[88%] mx-auto items-stretch mt-20">
                {servicesData.map((service, i) => (
                    <div
                        key={service.id}
                        data-aos="fade-left"
                        data-aos-delay={i * 150}
                        className="h-full"
                    >
                        <Servicecard service={service}/>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Service
