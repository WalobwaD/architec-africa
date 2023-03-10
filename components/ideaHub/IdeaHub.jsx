import Image from "next/image";
import logo from "../../public/IdeaLogo.jpg"
import styles from "../../styles/HomePage/IdeaHub/Idea.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper"
const IdeaHub = ()=> {

    return (
        <div className={styles.content} id="idea">
            <div className={styles.image}>
                <Image 
                    src={logo} 
                    alt="logo" 
                    className={styles.logo} 
                    width={100000} 
                    height={100000}/>
            </div>

            <div className={styles.texts}>
                <div className={styles.straight}></div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                            delay:2500,          
                            disableOnInteraction: false,
                        }}>
                    <SwiperSlide>                
                        <h3 className={styles.title}>Idea Hub</h3>
                    </SwiperSlide>
                    <SwiperSlide>                
                        <h3 className={styles.title}>Join The Tribe</h3>
                    </SwiperSlide>
                    <SwiperSlide>                
                        <h3 className={styles.title}>Coming Soon</h3>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.hum}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default IdeaHub;