import styles from "../../styles/HomePage/Pictures/Carousel.module.scss"
import React, {useState} from "react"

export const CarouselItem = ({children, width})=> {
    return (
        <div className={styles.carouselItem} style={{width:width}}>
            {children}
        </div>
    )
}



const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex]= useState(0)

    const updateIndex = (newIndex)=> {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) -1
        }
    
        setActiveIndex(newIndex)
    }
    return (
        <div className={styles.carousel}>
            <div className={styles.inner} style={{transform : `translateX(-${activeIndex * 100}%`}}> 
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child)
                })}

            </div>
            <div className={styles.indicators}>
                <button className={styles.button}
                    onClick={()=>{
                        updateIndex(activeIndex-1)
                    }}
                    >
                    Prev
                </button>
                <button className={styles.button}
                    onClick={()=>{
                        updateIndex(activeIndex+1)
                    }}
                    >
                    Next
                </button>

            </div>

        </div>
    )
}

export default Carousel;