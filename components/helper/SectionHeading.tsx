import { ReactNode } from "react"

type Props = {
    children : ReactNode
}

function SectionHeadding({children}:Props){
    return(
        <div className="flex flex-col items-center text-center">
            <span className="w-10 h-px bg-brand-gold/60 mb-4"></span>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tightish uppercase">
                {children}
            </h2>
        </div>
    )
}
export default SectionHeadding
