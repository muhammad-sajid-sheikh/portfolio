import {ContactForm} from "./contactForm"
import ContactInfo from "./contactInfo"

function Contact(){
    return(
        <section id="contact" className="pt-16 pb-16" style={{backgroundImage:"url('/images/paged.png')"}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
                {/* contact form */}
                <div className="opacity-0 animate-fade-up">
                    <ContactForm/>
                </div>
                {/* contact info */}
                <div className="opacity-0 animate-fade-up [animation-delay:150ms] xl:mx-auto">
                    <ContactInfo/>
                </div>
            </div>
        </section>
    )
}
export default Contact