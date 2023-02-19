
import styles from "../../styles/HomePage/Brands/Brands.module.scss"

const Brands = ({motion})=> {
    return (
        <section className={styles.brandSec} id="brands">
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Our Brands</h1>
                    <p className={styles.text}>Archtivate Africa is home to some of Africa’s most iconic brands, including Archtivate Post and Archtivate Web. We are
                        here to surprise, empower and entertain. We provide exclusive access and we are trusted to lead the way. From the
                        iconic brands we cultivate to the world-leading talents we engage, we are committed to the best of the best
                    </p>
                    <div className={styles.link}>
                        <p>Learn More</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Brands;