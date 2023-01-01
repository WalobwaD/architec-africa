import AboutStyles from "../../styles/HomePage/About.module.scss"
import Web from "./Post";
import Post from "./Web";
const About = () => {
    return (
        <section className={AboutStyles.abtSec}>
            <div className={AboutStyles.flexContainer}>
                <div className={AboutStyles.content}>
                    <h2 className={AboutStyles.title}>Who we are</h2>
                    <hr className={AboutStyles.hr}></hr>
                    <p className={AboutStyles.text}>Archtivate Africa is a global multimedia company that produces some of the world’s leading architectural broadcasting
                        and web design brands. These include Archtivate Post and Archtivate Web. Our goal is to showcase the beauty and
                        innovation of African architecture and design, and to provide our clients with high-quality content that helps them to
                        promote their projects and expertise.
                    </p>
                </div>
                <div className={AboutStyles.brands}>
                    <Post/>
                    <Web/>
                </div>
            </div>

        </section>
    )
}

export default About;