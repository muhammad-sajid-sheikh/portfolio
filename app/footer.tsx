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
        <footer className="pt-12 pb-8 bg-obsidian-950 border-t border-white/10">
            <div>
                <Image src="/images/logo3.png" alt="Muhammad Sajid logo" width={160} height={160} className="mx-auto opacity-90"/>
            </div>

            <div className="flex space-x-8 justify-center mt-4">
                {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <Image src={social.icon} alt={social.label} width={26} height={44} className="opacity-70 hover:opacity-100 transition-opacity duration-300"/>
                    </a>
                ))}
            </div>

            <nav aria-label="Footer navigation" className="flex items-center flex-wrap justify-center gap-y-2 text-white/60 text-sm font-medium mt-8">
                {footerLinks.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`px-5 hover:text-brand-gold transition-colors ${i !== footerLinks.length - 1 ? "border-r border-white/10" : ""}`}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <p className="text-center text-white/30 text-xs mt-6">
                © {new Date().getFullYear()} Muhammad Sajid. All rights reserved.
            </p>
        </footer>
    )
}
export default Footers
