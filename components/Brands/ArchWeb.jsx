import Logo from "../../public/AWEB.png"
import Image from "next/image"
import styles from "../../styles/HomePage/Brands/BrandWeb.module.scss"
const ArchWeb = ()=> {
    return (
        <div className={styles.web}>
             <Image
                src= {Logo}
            />
        </div>
    )
}

export default ArchWeb