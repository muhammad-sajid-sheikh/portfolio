import Image from "next/image"

const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#project", label: "Projects" },
    { href: "#skill", label: "Skills" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://www.facebook.com/MuhammadSajidSheikh121094/", icon: "/images/Facebook.png", label: "Facebook" },
    { href: "https://www.linkedin.com/in/muhammad-sajid-sheikh-4530602b5", icon: "/images/linkedin.png", label: "LinkedIn" },
    { href: "https://www.instagram.com/invites/contact/?igsh=ldxk2pn8n2mh&utm_content=shc50sg", icon: "/images/insta.png", label: "Instagram" },
];

function Footers(){
    return(
        <footer className="pt-8 pb-6" style={{backgroundImage:"url('/images/pagel.png')"}}>
            <div>
                <Image src="/images/logo3.png" alt="Muhammad Sajid logo" width={180} height={180} className="mx-auto"/>
            </div>

            <div className="flex space-x-9 justify-center mt-2">
                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                    >
                        <Image src={social.icon} alt={social.label} width={30} height={50} className="hover:scale-125 transition-transform duration-300"/>
                    </a>
                ))}
            </div>

            <nav aria-label="Footer navigation" className="flex items-center flex-wrap justify-center gap-y-2 text-white font-bold mt-6">
                {footerLinks.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`px-5 hover:text-[#178582] transition-colors ${i !== footerLinks.length - 1 ? "border-r-2 border-white/20" : ""}`}
                    >
                        {link.label}.
                    </a>
                ))}
            </nav>

            <p className="text-center text-[#BFA181]/70 text-sm mt-6">
                © {new Date().getFullYear()} Muhammad Sajid. All rights reserved.
            </p>
        </footer>
    )
}
export default Footers
