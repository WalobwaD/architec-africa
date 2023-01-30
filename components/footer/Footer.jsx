import styles from "../../styles/HomePage/Footer/FootStyles.module.scss" 
import Logo from "../../public/archtivate.png"
import Image from "next/image"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
const Footer = ({motion})=> {
    return (
        <section className={styles.footSec} id="contacts">
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <div className={styles.contacts1}>
                        contacts
                    </div>
                    <Image 
                        className={styles.logo}
                        src={Logo}
                        alt="Logo images"
                    />
                    <div className={styles.icons}>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className={styles.contacts2}>
                        contacts
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;