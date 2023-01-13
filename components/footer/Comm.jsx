import styles from "../../styles/HomePage/Footer/Details.module.scss"
import { useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useEffect } from "react"
const Details = ({motion})=> {
    const [ref, inView] = useInView()
    const animation = useAnimation()

    useEffect(()=>{
        console.log("inview = ", inView)
        if(inView) {
            animation.start({
                opacity:1,
                transition:{
                    duration: 2,
                
                    
                }
            })
        }
        if (!inView) {
            animation.start({
                opacity:0
            })
        }
    }, [inView])

    return (
        <div className={styles.details}>
            <div ref={ref} className={styles.message}>
                <p>The community is a dedicated space where members can access exclusive resources and 
                    information, such as industry news, case studies, and best practices. 
                    Members can also participate in discussions and forums, 
                    where they can share their experiences and insights with other professionals. 
                    Additionally, the community provides opportunities for members to network and 
                    build relationships with other architects, designers, and industry experts.
                </p>
                <motion.form 
                    animate={animation}
                    className={styles.form}>
                    <p>Subscribe to our newsletter</p>
                    <input 
                        type="text" 
                        placeholder="Enter your name."
                        className={styles.email}
                        />
                    <input 
                        placeholder="Enter your email"
                        className={styles.email} 
                        type="email"    
                    />


                    <button 
                        className={styles.button}>
                        Subscribe
                    </button>
                </motion.form>
            <motion.div
                initial = {{opacity:0.2}}
                whileInView = {{
                    opacity:1,
                    x:'-2vw',
                    transition : {duration :1}
                }}
                className={styles.benefits}>
                <h2 className={styles.title}>Benefits of joining the community...</h2>
                <ul className={styles.list}>
                    <li>Connect with other members</li>
                    <li>Learn and grow</li>
                    <li>Networking</li>
                    <li>Access to exclusive content; podcasts, ebooks, webinars.</li>
                    <li>Events and activities</li>
                    <li>Discounts</li>
                </ul>
            </motion.div>
            </div>
        </div>
    )
}

export default Details