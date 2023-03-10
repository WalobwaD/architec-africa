import styles from "../../styles/HomePage/Series/Series.module.scss"
const Series = ()=> {
    return (
        <section className={styles.seriesSec} id="series">
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Vernacular Architecture</h1>
                    <p className={styles.text}>
                    Discover and experience the beauty of africas most stunning locations in a whole new way 
                    through the lens of our scenic videos. Let our series take you on an immersive journey through 
                    the breathtaking landscapes, serene nature and stunning architecture at the comfort of your own home.
                    </p>
                    <div className={styles.link}>
                        <p>Learn More</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Series;