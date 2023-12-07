'use client'

import styles from './page.module.css'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './components/atoms/santi'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from 'react'
import Mountains from './components/atoms/mountains'
import { WavesSvg } from './components/atoms/WaveSvg'
import Card from './components/organisms/card'

import Header from './components/organisms/header'
import Services from './components/organisms/services'
import { adusData, globantData, muniData } from './cardsData'
import ScrollIcon from './components/atoms/scrollIcon'
import Contact from './components/organisms/contact'

gsap.registerPlugin(ScrollTrigger);

// 3D Model values
const defaultPosition: Vector3 = [2.5, 0, 0]
const defaultRotation: Euler = [0.2, -0.6, 0.2]
const defaultScale = 0.7

const colors = {
  lightBlue: '#00ADB5',
}

export default function Home() {
  const main = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.greetings', {
        x: 500,
        stagger: 0.1,
        delay: 0.3
      })

      gsap.fromTo(`.${styles.cardTitle}`, { opacity: 0, y: 100 }, {
        scrollTrigger: {
          trigger: 'main',
          start: '20% 50%',
          end: '30% 50%',
          scrub: 3,
        },
        opacity: 1,
        y: 0
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
          Hablemos!
        </div>
      </section>
      
      <div className={styles.scrollIconContainer}>
        <ScrollIcon />
      </div>

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
        <div>{/* Space to move next card */}</div>
        <div className={styles.cardTitle}><h1 style={{ textAlign: 'center' }}>EXPERIENCIAS</h1></div>
        <div>{/* Space to move next card */}</div>
        <Card data={globantData} />
        <Card data={muniData} />
        <Card data={adusData} />
      </div>

      <div className={styles.wave}>
        <WavesSvg />
      </div>

      {/* next section inside background */}
      <div className={styles.turquoiseContainer}>
        <Services />
        <Contact />
      </div>
    </main>
  )
}
