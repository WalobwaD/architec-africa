import Navstyles from "../styles/NavBar.module.scss"

import Logo from "../public/archtivate-removebg-preview.png"
import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
    return ( 
        <div className={Navstyles.main}>
            <div className={Navstyles.navItems} >
                <Link className={Navstyles.Link} href="/web">Developed</Link>
                <Image
                    src={Logo}
                    className={Navstyles.logo}
                />
                <Link className={Navstyles.Link} href="/posts">Broadcast</Link>
            </div>
            
        </div>
    )
}

export default NavBar