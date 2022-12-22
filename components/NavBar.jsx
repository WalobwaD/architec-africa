import Navstyles from "../styles/NavBar.module.scss"

import Logo from "../public/archtivate-removebg-preview.png"
import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
    return ( 
        <div className={Navstyles.main}>
            <div >
                <Link href="/web">Archtivate Web</Link>
                <Image
                    src={Logo}
                    className={Navstyles.logo}
                />
                <Link href="/posts">Archtivate Blog</Link>
            </div>
            
        </div>
    )
}

export default NavBar