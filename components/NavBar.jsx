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
      }


    return ( 
        <div className={ active ? `${styles.flexContainer} ${styles.active}` : `${styles.flexContainer}`}>
            <div className={styles.navItems} >
                <div>
                    <em className={styles.italic}>Ʌ </em>
                    <Link className={styles.linkP} href="/posts">POST</Link>
                </div>
                <Image
                    src={Logo}
                    className={styles.logo}
                    alt ="navbar logo"
                />
                <div>
                    <em className={styles.italic}>Ʌ </em>
                    <Link className={styles.linkW} href="/web">WEB</Link>
                </div>

            </div>
            <div className={styles.navItems1}>
                <Image
                        src={Logo}
                        className={styles.logo}
                        alt ="navbar logo"
                    />
                <div className={styles.navIds}>
                    <Link className={styles.link} href="/">Home</Link>
                    <Link className={styles.link} href="#about">About</Link>
                    <Link className={styles.link} href="#pictures">Pictures</Link>
                    <Link className={styles.link} href="#brands">Brands</Link>
                    <Link className={styles.link} href="#contacts">Community</Link>
                    <Link className={styles.link} href="#contacts">Contacts</Link>
                    <Link className={styles.link} href="/posts">Ʌ POST</Link>
                    <Link className={styles.link} href="/posts">Ʌ WEB</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar