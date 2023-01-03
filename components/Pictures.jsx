import picStyles from "../styles/HomePage/Pictures.module.scss"

const Pictures = ()=> {
    return (
        <section className={picStyles.picSec}>

            <div className={picStyles.flexContainer}>
                <div className={picStyles.content}>
                    <h1 className={picStyles.title}>Pictures</h1>
                    <hr className={picStyles.hr}></hr>
                    <div className={picStyles.cards}>
                        <div className={picStyles.card}>
                            Picture
                        </div>
                        <div className={picStyles.card}>
                            Picture
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )

}

export default Pictures;