import { useState } from "react"

import ActiveNav from "./ActiveNav"
import InitialNav from "./InitialNav"



const NavBar = ({motion}) => {
    const [active, setActive] = useState(false)

    const changeBackGround = ()=> {
        if (window.scrollY >= 80) {
            setActive(true)
        }else {
            setActive(false)
        }
  
    }
    if (typeof window !== 'undefined') {
        // this code will only be executed in the browser
        window.addEventListener('scroll', changeBackGround)
      }


      return (
        active ? <ActiveNav/> : <InitialNav/>
      )
}

export default NavBar