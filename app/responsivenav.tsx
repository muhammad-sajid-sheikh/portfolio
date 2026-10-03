"use client";

import Nav from "./nav"
import MobileNav from "./mobilenav"
import { useState } from "react";


   


function ResponsiveNav(){

    const [showNav, setShowNav] = useState(false);

    const showNavHandler = ()=> setShowNav(true);
    const closeNavHandler = ()=> setShowNav(false)
    return(
        <div>
            <Nav openNav={showNavHandler}/>
            <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
        </div>
    )
}
export default ResponsiveNav