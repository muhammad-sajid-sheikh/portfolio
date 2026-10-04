import {ContactForm} from "./contactForm"
import ContactInfo from "./contactInfo"

function Contact(){
    return(
        <section
            id="contact"
            className="relative pt-24 pb-24 overflow-hidden"
            style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        >
            <div className="absolute inset-0 bg-obsidian-950/85"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10">
                {/* contact form */}
                <div data-aos="fade-left">
                    <ContactForm/>
                </div>
                {/* contact info */}
                <div data-aos="fade-right" data-aos-delay="150" className="xl:mx-auto">
                    <ContactInfo/>
                </div>
            </div>
        </section>
    )
}
export default Contact
