import styles from "../styles/HomePage/NavBar.module.scss"
import { useState } from "react"
import Logo from "../public/archtivate.png"
import Link from "next/link"
import Image from "next/image"
const NavBar = ({motion}) => {
    const [active, setActive] = useState(false)

    const changeBackGround = ()=> {
        if (window.scrollY >= 80) {
            setActive(true)
        }else {
            setActive(false)
        }
  
    }
    if (typeof window !== 'undefined') {
        // this code will only be executed in the browser
        window.addEventListener('scroll', changeBackGround)

        console.log(window)
      }


    return ( 
        <div className={ active ? `${styles.flexContainer} ${styles.active}` : `${styles.flexContainer}`}>
            <motion.div 
            initial ={{x:'-100vw'}}
            animate = {{x:'0'}}
            transition = {{type:"spring", duration:1, bounce:0.3}}
            className={styles.navItems} >
                <div><em className={styles.italic}>Ʌ </em><Link className={styles.linkP} href="/posts">POST</Link></div>
                <Image
                    src={Logo}
                    className={styles.logo}
                    alt ="navbar logo"
                />
                <div><em className={styles.italic}>Ʌ </em><Link className={styles.linkW} href="/web">WEB</Link></div>

            </motion.div>
            
        </div>
    )
}

export default NavBar