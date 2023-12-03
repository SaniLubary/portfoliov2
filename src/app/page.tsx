'use client'

import styles from './page.module.css'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './components/santi'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'
import Mountains from './components/Mountains'
import { WavesSvg } from './components/WaveSvg'
import Card from './components/card'

import GlobantDescription from './components/card/descriptions/GlobantDescription'
import AndesDescription from './components/card/descriptions/AndesDescription'
import MuniDescription from './components/card/descriptions/MuniDescription'
import AdusDescription from './components/card/descriptions/AdusDescription'

// 3D Model values
const defaultPosition: Vector3 = [2.5, 0, 0]
const defaultRotation: Euler = [0.2, -0.6, 0.2]
const defaultScale = 0.7

const colors = {
  lightBlue: '#00ADB5',
}

const cardData = {
  images: [
    {
      path: '/icons/workPlaces/globantLogo.png',
      selected: true,
      id: 'globant',
      alt: 'globant logo'
    },
    {
      path: '/icons/workPlaces/andesLogo.png',
      id: 'andes',
      selected: false,
      alt: 'andes logo'
    },
    {
      path: '/icons/workPlaces/muni.png',
      id: 'muni',
      selected: false,
      alt: 'municipallity logo'
    },
    {
      path: '/icons/workPlaces/adus.jpg',
      id: 'adus',
      selected: false,
      alt: 'adus logo'
    }
  ],
  details: [
    { title: 'Globant', imgId: 'globant', text: <GlobantDescription /> },
    { title: 'Andes', imgId: 'andes', text: <AndesDescription /> },
    { title: 'Municipality of Neuquen', imgId: 'muni', text: <MuniDescription /> },
    { title: 'ADUS / IPVU', imgId: 'adus', text: <AdusDescription /> }
  ]
}

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])
  
  const handleMouseEnterLogo = (event: any) => {
    if (event?.target?.innerHTML) {
      const tl = gsap.timeline();
      tl.to("#logoText", { opacity: 0, duration: 0.3, onComplete: () => {event.target.innerHTML = "<span id='logoText'>Santi Lubary</span>"} });
      tl.to("#logoText", { opacity: 1, duration: 0.3 });
    }
  }
  const handleMouseLeaveLogo = (event: any) => {
    if (event?.target?.innerHTML) {
      const tl = gsap.timeline();
      tl.to("#logoText", { opacity: 0, duration: 0.3, onComplete: () => {event.target.innerHTML = "<span id='logoText'>SL</span>"} });
      tl.to("#logoText", { opacity: 1, duration: 0.3 });
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div id='logo' className={styles.logo} onMouseLeave={handleMouseLeaveLogo} onMouseEnter={handleMouseEnterLogo}>
          <span id='logoText'>SL</span>
        </div>
        <nav className={styles.headerNavContainer}>
          <a href="#" className={styles.navLink}>Experiencia</a>
          <a href="#" className={styles.navLink}>Sobre Mi</a>
          <a href="#" className={styles.navLink}>Conectar</a>
        </nav>
      </div>

      <section className={styles.greetingsSection}>
        <p className={styles.greetingsP}>Hola! Soy Santi</p>
        <h1 className={styles.greetingsH1}>Full Stack Web Developer</h1>

        <div className={styles.curriculumButton}>
          Descargar CV
        </div>
      </section>

      <div className={styles.model}>
        <Canvas>
          <OrbitControls />
          <hemisphereLight groundColor={colors.lightBlue} intensity={0.1} />
          <directionalLight color={colors.lightBlue} position={[5, 1, -19]} intensity={0.4} />
          <directionalLight color={colors.lightBlue} position={[-500, 1, -100]} intensity={0.3} />
          <directionalLight position={[5, 1, 10]} intensity={1} />
          <Model bbanchor={true} laptop={true} position={defaultPosition} rotation={defaultRotation} scale={defaultScale} />
        </Canvas>
      </div>

      {/* second section */}
      <div className={styles.mountainsContainer}>
        <Mountains className={styles.mountains} />
      </div>

      <div className={styles.cardContainer}>
        <Card data={cardData} />
      </div>

      <div className={styles.wave}>
        <WavesSvg />
      </div>

      {/* next section in width background */}
      <div className={styles.contactContainer}>

      </div>
    </main>
  )
}
