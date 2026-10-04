import SectionHeadding from "@/components/helper/SectionHeading"
import Slider from "./slider"

function Review(){
    return(
        <section
            id="reviews"
            className="relative pt-24 pb-24 overflow-hidden"
            style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        >
            <div className="absolute inset-0 bg-obsidian-950/85"></div>
            <div className="relative">
            <SectionHeadding>Client Reviews</SectionHeadding>
            <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
                <Slider/>
            </div>
            </div>
        </section>
    )
}
export default Review
