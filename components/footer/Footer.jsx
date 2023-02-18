import styles from "../../styles/HomePage/Footer/FootStyles.module.scss" 
import Logo from "../../public/archtivate.png"
import Image from "next/image"

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Instagram from "@mui/icons-material/Instagram"

const Footer = ({motion})=> {
    return (
        <section className={styles.footSec} id="contacts">
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <div className={styles.contacts1}>
                        <p>Work at archtivate africa</p>
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                        <p>Cookie policy</p>
                        <p>RSS</p>
                    </div>

                    <div className={styles.icons}>
                        <Image 
                            className={styles.logo}
                            src={Logo}
                            alt="Logo images"
                        />
                        <div className={styles.social}>
                            <FacebookIcon />
                            <YouTubeIcon />
                            <TwitterIcon />
                            <PinterestIcon />
                            <Instagram/>
                            
                        </div>

                    </div>
                    <div className={styles.contacts2}>
                        <h3>Connect with Archtivate Africa</h3>
                        <p>About archtivate africa</p>
                        <p>Connect with the editors</p>
                        <p>NewsLetter sign up</p>
                        <p>Contact advertising</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;