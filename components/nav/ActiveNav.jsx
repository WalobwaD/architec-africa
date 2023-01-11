import styles from "../../styles/HomePage/Nav/ActiveNav.module.scss"
import Logo1 from "../../public/Logo1.png"
import Logo from "../../public/archtivate.png"

import Link from "next/link"
import Image from "next/image"


const ActiveNav = ()=> {
    return (
        <div className={`${styles.flexContainer} ${styles.active}`}>
            <div className={styles.navItems1}>
                <Image
                        src={Logo1}
                        className={styles.logo1}
                        alt ="navbar logo"
                    />
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
                    <Link className={styles.linkPOST} href="/posts">Ʌ POST</Link>
                    <Link className={styles.linkWEB} href="/posts">Ʌ WEB</Link>
                </div>
            </div>
        </div>

    )
}

export default ActiveNav;