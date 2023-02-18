import Image from "next/image";
import logo from "../../public/IdeaLogo.jpg"
import styles from "../../styles/HomePage/IdeaHub/Idea.module.scss"
const IdeaHub = ()=> {

    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <Image 
                    src={logo} 
                    alt="logo" 
                    className={styles.logo} 
                    width={1000} 
                    height={10000}/>
            </div>

            <div className={styles.texts}>
                <div className={styles.straight}></div>
                <h3 className={styles.title}>Idea Hub</h3>
                <div className={styles.hum}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default IdeaHub;