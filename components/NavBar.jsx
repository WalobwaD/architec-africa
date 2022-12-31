import Navstyles from "../styles/NavBar.module.scss"

import Logo from "../public/archtivate.png"
import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
    return ( 
        <div className={Navstyles.flexContainer}>
            <div className={Navstyles.navItems} >
                <div><em>Ʌ </em><Link className={Navstyles.linkP} href="/posts">POST</Link></div>
                <Image
                    src={Logo}
                    className={Navstyles.logo}
                    alt ="navbar logo"
                />
                <div><em>Ʌ </em><Link className={Navstyles.linkW} href="/web">WEB</Link></div>
            </div>
            
        </div>
    )
}

export default NavBar