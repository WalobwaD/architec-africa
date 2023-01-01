import ArchPost from "./ArchPost"
import ArchWeb from "./ArchWeb"
import BrandStyles from "../../styles/HomePage/Brands/Brands.module.scss"

const Brands = ()=> {
    return (
        <section className={BrandStyles.brandSec}>
            <div className={BrandStyles.flexContainer}>
                <div className={BrandStyles.content}>
                    <h1 className={BrandStyles.title}>Our Brands</h1>
                    <hr className={BrandStyles.hr}></hr>
                    <p className={BrandStyles.text}>Archtivate Africa is home to some of Africa’s most iconic brands, including Archtivate Post and Archtivate Web. We are
                        here to surprise, empower and entertain. We provide exclusive access and we are trusted to lead the way. From the
                        iconic brands we cultivate to the world-leading talents we engage, we are committed to the best of the best
                    </p>
                    <div className={BrandStyles.brands}>
                        <ArchPost />
                        <ArchWeb /> 
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Brands;