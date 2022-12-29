import Navstyles from "../styles/NavBar.module.scss"

import Logo from "../public/archtivate.png"
import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
    return ( 
        <div className={Navstyles.flexContainer}>
            <div className={Navstyles.navItems} >
                <Image
                    src={Logo}
                    className={Navstyles.logo}
                />
            </div>
            
        </div>
    )
}

export default NavBar