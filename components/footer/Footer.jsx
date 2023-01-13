import FootStyles from "../../styles/HomePage/Footer/FootStyles.module.scss" 
import Details from "./Comm";
import Contacts from "./Contact";
const Footer = ({motion})=> {
    return (
        <section className={FootStyles.footSec} id="contacts">
            <div className={FootStyles.flexContainer}>
                <div className={FootStyles.content}>
                    <h1 className={FootStyles.title}>Join The Community</h1>
                    <hr className={FootStyles.hr}></hr>
                </div>
            </div>
            <Details motion={motion}/>
            <Contacts/>

        </section>
    )
}

export default Footer;