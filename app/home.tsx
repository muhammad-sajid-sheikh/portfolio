import About from "./about"
import Hero from "./hero"
import Service from "./service"
import Project from "./project"
import Skills from "./skills"
import Review from "./review"
import Contact from "./contact"
import Footers from "./footer"
import AOSInit from "@/components/helper/AOSInit"

function Home(){
    return(
        <>
            <AOSInit/>
            <main>
                <Hero/>
                <About/>
                <Service/>
                <Project/>
                <Skills/>
                <Review/>
                <Contact/>
            </main>
            <Footers/>
        </>
    )
}
export default Home
