import Example from "../../public/WebImage.jpg"
import Image from "next/image"
import styles from "../../styles/HomePage/Brands/BrandWeb.module.scss"
const ArchWeb = ({motion})=> {
    return (
        <div className={styles.web}>
            <Image
                    src={Example}
                    alt="example"
                    className={styles.photo}
            />
            
        </div>
    )
}

export default ArchWeb;