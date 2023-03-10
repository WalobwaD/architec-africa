import { useState } from "react"

import ActiveNav from "./ActiveNav"
import InitialNav from "./InitialNav"
import Link from "next/link"
import styles from "../../styles/HomePage/Nav/NavBar.module.scss"

const NavBar = ({motion}) => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState('side')


    const changeBackGround = ()=> {
        if (window.scrollY >= 10) {
            setActive(true)
        }else {
            setActive(false)
        }
  
    }
    if (typeof window !== 'undefined') {
        // this code will only be executed in the browser
        window.addEventListener('scroll', changeBackGround)
      }

    //   const [icon, setIcon] = React.useState('hambugger')
  
    const navToggle = () =>{
          open === 'side' ? setOpen('active') : setOpen('side')
        //   icon === 'hambugger' ? setIcon('hambugger cross') : setIcon('hambugger')
      }

      return (
        <>
            {active ? <ActiveNav toggle={navToggle}/> : <InitialNav toggle={navToggle}/>}
            <div className={open}>
                <Link href="/posts">POST</Link>
                <Link href="/web">WEB</Link>
                <div onClick={navToggle} className="hum-active">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                </div>
            </div>
        </>

      )
}

export default NavBar