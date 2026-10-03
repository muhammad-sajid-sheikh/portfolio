"use client";

import { CgClose } from "react-icons/cg"
import { FaHome } from "react-icons/fa"
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { SiPolymerproject } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";

// Props type
type Props = {
    showNav: boolean;
    closeNav: () => void
};

const navLinks = [
    { href: "#home", label: "Home", icon: FaHome },
    { href: "#about", label: "About", icon: TbArrowRoundaboutRight },
    { href: "#services", label: "Services", icon: FaServicestack },
    { href: "#project", label: "Projects", icon: SiPolymerproject },
    { href: "#skill", label: "Skills", icon: GiSkills },
    { href: "#reviews", label: "Reviews", icon: MdOutlineReviews },
    { href: "#contact", label: "Contact", icon: RiContactsBook3Fill },
];

function MobileNav({ closeNav, showNav }: Props) {

    const navOpen = showNav ? "translate-x-[25%]" : "translate-x-[170%]";

    return (
        <div>
            {/* overlay */}
            <div
                onClick={closeNav}
                aria-hidden="true"
                className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen cursor-pointer`}
            ></div>

            {/* nav links */}
            <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center p-20 flex-col h-full w-[80%] sm:w-[60%] bg-black space-y-6 z-[10000] flex`}>

                {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeNav}
                            className="navlink flex items-center gap-3 text-[20px] ml-12 border-b-[1.5px] pb-2 border-white/40 sm:text-[26px] hover:pl-1 transition-all"
                        >
                            <Icon className="text-[#178582] flex-shrink-0" />
                            <span>{link.label}</span>
                        </a>
                    );
                })}

                <button onClick={closeNav} aria-label="Close navigation menu" className="absolute top-[3rem] right-[1.4rem]">
                    <CgClose className="sm:w-8 sm:h-8 w-6 h-6 text-white hover:text-[#178582] transition-colors" />
                </button>
            </div>
        </div>
    )
}

export default MobileNav
