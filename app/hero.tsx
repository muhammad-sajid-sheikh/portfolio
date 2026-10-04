import { BaseInfo } from "@/data/data"
import { FaDownload } from "react-icons/fa"
import Image from "next/image"
import sajid3 from "../public/images/sajid3.png"

function Hero(){
    return(
        <section
            id="home"
            className="relative w-full h-screen overflow-hidden pt-[4vh] md:pt-[12vh] bg-obsidian-950"
            style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        >
            {/* dark overlay so text always stays readable over the generated background */}
            <div className="absolute inset-0 bg-obsidian-950/80"></div>

            {/* a single, very faint glow - not a loud blob, just quiet depth */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-brand-gold/[0.04] blur-[120px] pointer-events-none"></div>

            <div className="relative flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

                    {/* image content - flat panel, thin border, no blur/glass - now on the left on desktop */}
                    <div className="opacity-0 animate-fade-in [animation-delay:250ms] relative mx-auto w-fit order-1">
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-gold/30 to-transparent -z-10 blur-sm"></div>
                        <div className="panel overflow-hidden rounded-2xl w-[220px] sm:w-[260px] lg:w-[280px]">
                            <Image src={sajid3} alt={BaseInfo.name} width={280} height={315} priority className="w-full h-auto"/>
                        </div>
                    </div>

                    {/* text content - now on the right on desktop */}
                    <div className="order-2">
                        {/* eyebrow line - quiet, no badge/pill, just a hairline rule */}
                        <p className="opacity-0 animate-fade-up flex items-center gap-3 text-sm md:text-base tracking-wide2 uppercase text-brand-gold font-medium mb-6">
                            <span className="w-8 h-px bg-brand-gold/60"></span>
                            {BaseInfo.name}
                        </p>

                        {/* main heading - position */}
                        <h1 className="opacity-0 animate-fade-up [animation-delay:120ms] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tightish leading-[1.05] text-white">
                            {BaseInfo.position}
                        </h1>

                        {/* professional tagline - secondary heading */}
                        <h2 className="opacity-0 animate-fade-up [animation-delay:220ms] mt-3 text-lg sm:text-xl md:text-2xl font-medium text-brand-gold/80">
                            {BaseInfo.tagline}
                        </h2>

                        {/* description */}
                        <p className="opacity-0 animate-fade-up [animation-delay:320ms] mt-6 text-sm md:text-base text-white/50 max-w-lg leading-relaxed">
                            {BaseInfo.Discription}
                        </p>

                        {/* button */}
                        <button className="opacity-0 animate-fade-up [animation-delay:420ms] group md:px-8 md:py-3 px-6 py-2.5 text-obsidian-950 font-semibold text-sm md:text-base transition-all duration-300 rounded-md mt-10 bg-brand-gold hover:bg-white flex items-center space-x-3">
                            <span>Download CV</span>
                            <FaDownload className="transition-transform duration-300 group-hover:translate-y-0.5" size={14}/>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Hero
