import Image from "next/image";
import IdeaImage from "../../public/IdeaHub.jpg"
import styles from "../../styles/HomePage/IdeaHub/Idea.module.scss"
const IdeaHub = ()=> {

    return (
        <div className={styles.content}>
            <Image 
                src={IdeaImage}
                alt="idea"
                className={styles.image}
            />
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