import Logo from "../../public/archtivate.png"
import Image from "next/image"
import styles from "../../styles/HomePage/Brands/BrandWeb.module.scss"
const ArchWeb = ()=> {
    return (
        <div className={styles.web}>
            <p>Archtivate Web</p>
            <hr className={styles.hr}></hr>
             <Image
                src= {Logo}
            />
        </div>
    )
}

export default ArchWeb