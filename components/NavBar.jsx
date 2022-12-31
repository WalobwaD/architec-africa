import Navstyles from "../styles/NavBar.module.scss"

import Logo from "../public/archtivate.png"
import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
    return ( 
        <div className={Navstyles.flexContainer}>
            <div className={Navstyles.navItems} >
                <Link href="/posts">POST</Link>
                <Image
                    src={Logo}
                    className={Navstyles.logo}
                    alt ="navbar logo"
                />
                <Link href="/web">WEB</Link>
            </div>
            
        </div>
    )
}

export default NavBar