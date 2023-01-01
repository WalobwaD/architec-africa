import Logo from "../../public/archtivate.png"
import Image from "next/image"
import styles from "../../styles/HomePage/Brands/BrandPost.module.scss"
const ArchPost = ()=> {
    return (
        <div className={styles.post}>
            <p>Archtivate Post</p>
            <hr className={styles.hr}></hr>

            <Image
                src= {Logo}
            />
        </div>
    )
}

export default ArchPost