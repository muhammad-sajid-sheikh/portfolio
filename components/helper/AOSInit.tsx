"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function AOSInit(){
    useEffect(()=>{
        AOS.init({
            duration: 700,
            easing: "ease",
            once: true,
            anchorPlacement: "top-bottom",
            // respect users who prefer reduced motion
            disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        })
    },[])

    return null
}
export default AOSInit
