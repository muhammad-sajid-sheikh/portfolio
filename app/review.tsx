import SectionHeadding from "@/components/helper/SectionHeading"
import Slider from "./slider"

function Review(){
    return(
        <section id="reviews" className="pt-16 pb-16" style={{backgroundImage:"url('/images/pagel.png')"}}>
            <SectionHeadding>Client Reviews</SectionHeadding>
            <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
                <Slider/>
            </div>
        </section>
    )
}
export default Review