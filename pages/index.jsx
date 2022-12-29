import Head from 'next/head'
import Image from 'next/image'

import Logo1 from "../public/archtivate.png"
import BackImg2 from "../public/HomeLand2.jpg"

import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar'
import Link from 'next/link'

import {useEffect} from "react"
import gsap from "gsap"

export default function Home() {

  useEffect(
    ()=> {
      gsap.fromTo('.logo', {opacity:0, scale:0}, {duration:3, opacity:0.9, scale:1})
      console.log("opacity changed")
    },
  [])

  return (
    <>
      <Head>
        <title>Archtivate-Africa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/archtivate.jpeg" />
        <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
          crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <main className={styles.main}>
        <NavBar/>
        <div>
          <div className={styles.overlay}>
            <div className='logo'>
              <Image
                src = {Logo1}
                className={styles.logo}
                />
            </div>
            <p className={styles.tagline}>African Architecture, <Link className={styles.link} href="/web">developed </Link> and <Link className={styles.link} href="/posts">broadcast</Link> world wide
            </p>
          </div>
          <Image
              src={BackImg2}
              className={styles.backG}
            />
        </div>

      </main>
    </>
  )
}
