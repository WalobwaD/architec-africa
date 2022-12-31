import ContactStyles from "../../styles/Contacts.module.scss"
const Contacts = ()=> {
    return (
        <div className={ContactStyles.contactCont}>
            <div className={ContactStyles.content}>
                <h2 className={ContactStyles.title}>Contacts</h2>
                <hr className={ContactStyles.hr}></hr>
            </div>

        </div>
    )
}

export default Contacts;