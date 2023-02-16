import Head from 'next/head'
import {motion} from "framer-motion"

import styles from '../styles/HomePage/Home.module.scss'

import NavBar from '../components/nav/NavBar'
import About from "../components/about/About"
import Pictures from '../components/pictures/Pictures'
import Brands from "../components/Brands/Brands"
import FooterComp from "../components/footer/Footer"
import Community from '../components/community/Communit'
import Series from '../components/series/Series'
import IdeaHub from '../components/ideaHub/IdeaHub'


export default function Home() {

  return (
    <>
      <Head>
        <title>Archtivate-Africa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href= "/archtivate.png"/>
      </Head>
      <main className={styles.main}>
        <NavBar motion={motion}/>
        <section className={styles.vidSec}>
          <video className={styles.vid}controls>
            Your browser does not support HTML5 videos!
          </video>
        </section>
        <About motion={motion}/>
        <Brands motion={motion}/>  
        <IdeaHub />
        <Community/>      
        <Pictures/>
        <Series/>

        <FooterComp motion={motion}/>


      </main>
    </>
  )
}
