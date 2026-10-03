import { BaseInfo } from "@/data/data"
import { FaDownload } from "react-icons/fa"
import Image from "next/image"
import sajid2 from "../public/images/sajid2.png"

function Hero(){
    return(
        <section id="home" className="relative w-full h-screen overflow-hidden pt-[4vh] md:pt-[12vh]" style={{backgroundImage:"url('/images/paged.png')", backgroundSize:"cover", backgroundPosition:"center"}}>

            {/* dark overlay for text contrast over background image */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    {/* text content */}
                    <div>
                        {/* eyebrow / intro line */}
                        <p className="opacity-0 animate-fade-up text-2xl md:text-3xl lg:text-4xl mb-5 text-[#BFA181] font-semibold">
                            I am {BaseInfo.name}
                        </p>

                        {/* main heading - position */}
                        <h1 className="opacity-0 animate-fade-up [animation-delay:150ms] text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
                            {BaseInfo.position}
                        </h1>

                        {/* student status - secondary heading */}
                        <h2 className="opacity-0 animate-fade-up [animation-delay:250ms] text-bg text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-snug text-white">
                            {BaseInfo.student}
                        </h2>

                        {/* description */}
                        <p className="opacity-0 animate-fade-up [animation-delay:350ms] mt-6 text-sm md:text-base text-[#BFA181] text-opacity-60 max-w-lg">
                            {BaseInfo.Discription}
                        </p>

                        {/* button */}
                        <button className="opacity-0 animate-fade-up [animation-delay:450ms] md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-gradient-to-r from-[#178582] to-[#043533] hover:brightness-110 hover:scale-[1.03] active:scale-95 flex items-center space-x-2 shadow-lg shadow-black/30">
                            <span>Download CV</span>
                            <FaDownload/>
                        </button>
                    </div>

                    {/* image content */}
                    <div className="opacity-0 animate-fade-in [animation-delay:300ms] relative mx-auto">
                        {/* decorative glow behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#178582]/30 to-[#DA7B93]/20 rounded-[3.5rem] blur-2xl -z-10"></div>
                        <div className="rounded-[3rem] border-[3.5px] border-[#BFA181] border-opacity-50 overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                            <Image src={sajid2} alt={BaseInfo.name} width={400} height={450} priority/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Hero