import Logo from "../../public/AWEB.png"
import Image from "next/image"
import styles from "../../styles/HomePage/Brands/BrandWeb.module.scss"
const ArchWeb = ()=> {
    return (
        <div className={styles.web}>
            <p>Archtivate <em className="text-cyan-300">Web</em></p>
            <hr className={styles.hr}></hr>
             <Image
                src= {Logo}
            />
        </div>
    )
}

export default ArchWeb