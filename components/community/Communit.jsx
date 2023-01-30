import styles from "../../styles/HomePage/Community/Community.module.scss"
const Community = ()=> {
    return (
        <section className={styles.commSec} id="community">
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Our Community</h1>
                    <hr className={styles.hr}></hr>
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
export default Community;