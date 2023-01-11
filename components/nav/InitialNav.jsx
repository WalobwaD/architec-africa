import styles from "../../styles/HomePage/Nav/NavBar.module.scss"
import Logo from "../../public/archtivate.png"
import Link from "next/link"
import Image from "next/image"




const InitialNav = ()=> {
    return (
        <div className={styles.flexContainer}>
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
        </div>
    )
}

export default InitialNav;