import styles from "../../styles/HomePage/Nav/NavBar.module.scss"
import Logo from "../../public/archtivate.png"
import Link from "next/link"
import Image from "next/image"




const InitialNav = ({toggle})=> {
    return (
        <nav className={styles.flexContainer}>
            <div className={styles.navItems} >
                <Image
                        src={Logo}
                        className={styles.logo}
                        alt ="navbar logo"
                        priority
                    />
                <div className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#brands">Brands</Link>
                    <Link href="#idea">IdeaHub</Link>
                    <Link href="#community">Community</Link>
                    <Link href="#contacts">Contact</Link>
                    <div onClick={toggle} className={styles.buggerMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
 

            </div>
        </nav>
    )
}

export default InitialNav;