import Navstyles from "../styles/HomePage/NavBar.module.scss"

import Logo from "../public/archtivate.png"
import Link from "next/link"
import Image from "next/image"
const NavBar = ({motion}) => {

    return ( 
        <div className={Navstyles.flexContainer}>
            <motion.div 
            initial ={{x:'-100vw'}}
            animate = {{x:'0'}}
            transition = {{type:"spring", duration:1, bounce:0.3}}
            className={Navstyles.navItems} >
                <div><em className={Navstyles.italic}>Ʌ </em><Link className={Navstyles.linkP} href="/posts">POST</Link></div>
                <Image
                    src={Logo}
                    className={Navstyles.logo}
                    alt ="navbar logo"
                />
                <div><em className={Navstyles.italic}>Ʌ </em><Link className={Navstyles.linkW} href="/web">WEB</Link></div>
            </motion.div>
            
        </div>
    )
}

export default NavBar