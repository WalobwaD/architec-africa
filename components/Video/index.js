import styles from "../../styles/HomePage/Video/Video.module.scss"

const Video = ()=> (
    <div className={styles.vidSec}>          
        <video className={styles.vid}controls>
            Your browser does not support HTML5 videos!
        </video>
    </div>
)

export default Video;