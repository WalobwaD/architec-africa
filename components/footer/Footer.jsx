import FootStyles from "../../styles/FootStyles.module.scss" 
import Details from "./Comm";
import Contacts from "./Contact";
const Footer = ()=> {
    return (
        <section className={FootStyles.footSec}>
            <div className={FootStyles.flexContainer}>
                <div className={FootStyles.content}>
                    <h1 className={FootStyles.title}>Join The Community</h1>
                    <hr className={FootStyles.hr}></hr>
                </div>
            </div>
            <Details/>
            <Contacts/>

        </section>
    )
}

export default Footer;