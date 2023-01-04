import styles from "../styles/HomePage/Pictures.module.scss"
import Image from "next/image";
import pic1 from "../public/Pic1.png"
import pic2 from "../public/Pic2.jpg"
import pic3 from "../public/Pic3.jpg"
import pic4 from "../public/Pic4.png"


const Pictures = ()=> {
    return (
        <section className={styles.picSec}>

            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Pictures</h1>
                    <hr className={styles.hr}></hr>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <Image 
                                src={pic1}
                                className = {styles.img}
                            />
                        </div>
                        <div className={styles.card}>
                            <Image 
                                    src={pic2}
                                    className = {styles.img}
                                />
                        </div>
                        <div className={styles.card}>
                            <Image 
                                    src={pic3}
                                    className = {styles.img}
                                />
                        </div>
                        <div className={styles.card}>
                            <Image 
                                    src={pic4}
                                    className = {styles.img}
                                />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )

}

export default Pictures;