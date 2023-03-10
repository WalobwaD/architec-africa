import Link from "next/link"
import styles from "../styles/PostsPage/index.module.scss"
const posts = () => {
    return (
        <div className={styles.container}>
            <div>ARCHTIVATE POSTS</div>
            <h2>COMING SOON</h2>
            <Link href="/">Back</Link>

        </div>
    )
}

export default posts