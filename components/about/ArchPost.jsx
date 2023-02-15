import Logo from "../../public/APOST.png"
import Example from "../../public/BrandImage.jpg"
import Image from "next/image"
import styles from "../../styles/HomePage/Brands/BrandPost.module.scss"
const ArchPost = ({motion})=> {
    return (
        <div className={styles.post}>
            <Image
                    src={Example}
                    alt="example"
                    className={styles.photo}

            />
            {/* <Image
                src= {Logo}
                alt= "brandPost"
                className={styles.logo}
            /> */}
        </div>
    )
}

export default ArchPost