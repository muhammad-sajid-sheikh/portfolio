import SectionHeadding from "@/components/helper/SectionHeading"
import Slider from "./slider"

function Review(){
    return(
        <section id="reviews" className="pt-24 pb-24 bg-obsidian-950">
            <SectionHeadding>Client Reviews</SectionHeadding>
            <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
                <Slider/>
            </div>
        </section>
    )
}
export default Review
