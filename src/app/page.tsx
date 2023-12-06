'use client'

import styles from './page.module.css'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './components/atoms/santi'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from 'react'
import Mountains from './components/atoms/mountains'
import { WavesSvg } from './components/atoms/WaveSvg'
import Card from './components/organisms/card'

import GlobantDescription from './components/organisms/card/descriptions/GlobantDescription'
import AndesDescription from './components/organisms/card/descriptions/AndesDescription'
import MuniDescription from './components/organisms/card/descriptions/MuniDescription'
import AdusDescription from './components/organisms/card/descriptions/AdusDescription'
import Header from './components/organisms/header'
import Services from './components/organisms/services'

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
      alt: 'municipallity logo',
      style: {top : '-50px', position: 'relative'},
    },
    {
      path: '/icons/workPlaces/adus.jpg',
      id: 'adus',
      selected: false,
      alt: 'adus logo',
      style: {top : '-100px', position: 'relative'},
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

  const main = useRef(null)
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.greetings', {
        x: 500,
        stagger: 0.1,
        delay:0.3
      })
    }, main)
  
    return () => ctx.revert();
  }, [])

  return (
    <main ref={main} className={styles.main}>
      <Header />

      <section className={styles.greetingsSection}>
        <p className={`${styles.greetingsP} ${styles.greetings} greetings`}>Hola! Soy Santi</p>
        <h1 className={`${styles.greetingsH1} ${styles.greetings} greetings`}>Full Stack Web Developer</h1>

        <div className={`${styles.curriculumButton} ${styles.greetings} greetings`}>
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
        <Mountains />
      </div>

      <div className={styles.cardContainer}>
        <Card data={cardData} />
      </div>

      <div className={styles.wave}>
        <WavesSvg />
      </div>

      {/* next section inside background */}
      <div className={styles.turquoiseContainer}>
        <Services />
      </div>
    </main>
  )
}
