import styles from "../../styles/HomePage/Series/Series.module.scss"
const Series = ()=> {
    return (
        <section className={styles.seriesSec} id="series">
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Vernacular Architecture</h1>
                    <p className={styles.text}>
                        The community is a dedicated space where members can access exclusive resources and 
                        information, such as industry news, case studies, and best practices. 
                        Members can also participate in discussions and forums, 
                        where they can share their experiences and insights with other professionals. 
                        Additionally, the community provides opportunities for members to network and 
                        build relationships with other architects, designers, and industry experts.
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