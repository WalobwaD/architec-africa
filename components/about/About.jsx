import styles from "../../styles/HomePage/About.module.scss"
import ArchPost from "./ArchPost"
import ArchWeb from "./ArchWeb"
const About = ({motion}) => {
    return (
        <section className={styles.abtSec} id="about">
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Who we are</h2>
                    <p className={styles.text}>Archtivate Africa is a global multimedia company that produces some of the world’s leading architectural broadcasting
                        and web design brands. These include Archtivate Post and Archtivate Web. Our goal is to showcase the beauty and
                        innovation of African architecture and design, and to provide our clients with high-quality content that helps them to
                        promote their projects and expertise.
                    </p>
                    <div className={styles.link}>
                        <p>Learn More</p>
                    </div>                    
                    <div className={styles.brands} id="brands">
                        <ArchPost motion={motion}/>
                        <ArchWeb motion={motion}/> 
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About;