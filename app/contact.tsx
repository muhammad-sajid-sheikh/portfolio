import {ContactForm} from "./contactForm"
import ContactInfo from "./contactInfo"

function Contact(){
    return(
        <section id="contact" className="pt-24 pb-24 bg-obsidian-950">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10">
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
