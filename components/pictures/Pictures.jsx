import styles from "../../styles/HomePage/Pictures/Pictures.module.scss"
import Carousel, {CarouselItem} from "./Carousel"

import Image from "next/image";
import pic1 from "../../public/Pic1.png"
import pic2 from "../../public/Pic2.jpg"
import pic3 from "../../public/Pic3.jpg"
import pic4 from "../../public/Pic4.png"
import pic5 from "../../public/Pic5.jpg"
import pic6 from "../../public/Pic6.png"
import pic7 from "../../public/Pic7.png"
import pic8 from "../../public/Pic8.png"


// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 1, itemsToScroll: 2 },
//     { width: 768, itemsToShow: 2 },
//     { width: 1200, itemsToShow: 3 }
// ];

const Pictures = ()=> {


    return (
        <section className={styles.picSec}>

            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Pictures</h1>
                    <hr className={styles.hr}></hr>
                    {/* <div className={styles.cards}>
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
                    </div> */}
                    <div className={styles.cards}>
                        <Carousel>
                            <CarouselItem><Image className={styles.img} src={pic8}/></CarouselItem>
                            <CarouselItem><Image className={styles.img} src={pic7}/></CarouselItem>
                            <CarouselItem><Image className={styles.img} src={pic6}/></CarouselItem>
                            <CarouselItem><Image className={styles.img} src={pic5}/></CarouselItem>
                            <CarouselItem><Image className={styles.img} src={pic4}/></CarouselItem>
                            <CarouselItem><Image className={styles.img} src={pic3}/></CarouselItem>
                            <CarouselItem><Image className={styles.img} src={pic2}/></CarouselItem>
                            <CarouselItem><Image className={styles.img} src={pic1}/></CarouselItem>
                            {/* <Image
                                src={pic8}
                                className={styles.card}
                            />
                            <Image
                                src={pic7}
                                className={styles.card}

                            />
                            <Image
                                src={pic6}
                                className={styles.card}

                            />      
                            <Image
                                src={pic5}
                                className={styles.card}

                            />      
                            <Image
                                src={pic4}
                                className={styles.card}

                            />   
                            <Image
                                src={pic3}
                                className={styles.card}

                            />
                            <Image
                                src={pic2}
                                className={styles.card}

                            />
                            <Image
                                src={pic1}
                                className={styles.card}

                            />                                                            */}

                        </Carousel>
                    </div>

                </div>

            </div>
        </section>

    )

}

export default Pictures;