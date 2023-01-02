import Logo from "../../public/APOST.png"
import Image from "next/image"
import styles from "../../styles/HomePage/Brands/BrandPost.module.scss"
const ArchPost = ()=> {
    return (
        <div className={styles.post}>
            <p>Archtivate <em className="text-orange-200">Post</em></p>
            <hr className={styles.hr}></hr>

            <Image
                src= {Logo}
            />
        </div>
    )
}

export default ArchPost