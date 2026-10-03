"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        const toggleVisiblity = ()=>{
            setIsVisible(window.scrollY > 300)
        }

        // run once on mount so the button shows correctly after a reload mid-page
        toggleVisiblity()

        window.addEventListener("scroll", toggleVisiblity, { passive: true })

        return ()=>{
            window.removeEventListener("scroll", toggleVisiblity)
        }
    },[])

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <div className="fixed bottom-4 right-4 z-[20]">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="animate-fade-in bg-gradient-to-r from-[#178582] to-[#043533] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-black/40 transition-all duration-200 hover:brightness-110 hover:-translate-y-1 active:scale-95"
                >
                    <FaArrowUp/>
                </button>
            )}
        </div>
    )
}
export default ScrollToTop
