import styles from "../../styles/HomePage/Pictures/Pictures.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/scrollbar';

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
        <section className={styles.picSec} id="pictures">

            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <div className={styles.cards}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic8}/></SwiperSlide>
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic7}/></SwiperSlide>
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic6}/></SwiperSlide>
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic5}/></SwiperSlide>
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic4}/></SwiperSlide>
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic3}/></SwiperSlide>
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic2}/></SwiperSlide>
                            <SwiperSlide><Image alt="pictures" className={styles.img} src={pic1}/></SwiperSlide>

                        </Swiper>
                    </div>

                </div>

            </div>
        </section>

    )

}

export default Pictures;