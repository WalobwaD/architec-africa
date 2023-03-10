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
                    <Link href="/">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#brands">Brands</Link>
                    <Link href="#idea">Ideahub</Link>
                    <Link href="#community">Community</Link>
                    <Link href="#contacts">Contact</Link>
                    <div className={styles.buggerMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActiveNav;