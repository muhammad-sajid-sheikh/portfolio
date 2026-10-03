"use client";
import Image from "next/image"
import logo2 from "../public/images/logo2.png"
import { HiBars3BottomRight } from "react-icons/hi2"
import { useEffect, useState } from "react";

type Props = {
    openNav:()=>void
}

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#project", label: "Projects" },
    { href: "#skill", label: "Skills" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
];

function Nav({openNav}:Props){

    const [navBg, setNavBg] = useState(false);

    useEffect(()=> {
        const handler = ()=>{
            setNavBg(window.scrollY >= 90);
        }
        window.addEventListener("scroll",handler);
        return ()=>{
            window.removeEventListener("scroll",handler);
        }
    },[])

    return(
        <div className={`fixed top-0 left-0 h-[6vh] z-[10] w-full transition-all duration-300 ${ navBg ? "bg-obsidian-950/90 backdrop-blur-md border-b border-white/10": "bg-obsidian-950"}`}>
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                {/* logo */}
               <a href="#home" aria-label="Go to home">
                 <Image src={logo2} alt="Sajid Sheikh logo" className="w-[180px] h-[140px] ml-[-1.5rem] sm:ml-0" priority/>
               </a>
               {/* nav links */}
               <div className="flex items-center space-x-10">
                <div className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <div key={link.href} className="navlink">
                        <a href={link.href}>{link.label}</a>
                    </div>
                ))}
                </div>
                {/* button */}
                <div className="flex items-center space-x-4">
                    <a href="#contact" className="md:px-5 md:py-1.5 px-3 py-1 text-obsidian-950 font-semibold sm:text-base text-sm bg-brand-gold
                    hover:bg-white transition-all duration-200 rounded-md">
                        Hire Me
                    </a>
                    {/* burger */}
                    <button onClick={openNav} aria-label="Open navigation menu" className="lg:hidden">
                        <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white"/>
                    </button>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Nav
