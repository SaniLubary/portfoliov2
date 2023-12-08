'use client'

import styles from './page.module.css'
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
import Image from 'next/image';
import { MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const main = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.greetings', {
        x: 500,
        stagger: 0.1,
        delay: 0.3
      })
      gsap.fromTo(`.${styles.model}`, { x: 800, opacity: 0 }, {
        x: 0,
        opacity: 1,
        delay: 0.3
      })

      gsap.fromTo(`.${styles.cardTitle}`, { opacity: 0, y: 100 }, {
        scrollTrigger: {
          trigger: `.${styles.cardTitle}`,
          scrub: true,
        },
        opacity: 1,
        y: 0
      })
    }, main)

    return () => ctx.revert();
  }, [])

  return (
    <main id='start' ref={main} className={styles.main}>
      <Header />

      <section className={styles.greetingsSection}>
        <p className={`${styles.greetingsP} ${styles.greetings} greetings`}>Hola! Soy Santi</p>
        <h1 className={`${styles.greetingsH1} ${styles.greetings} greetings`}>Full Stack Web Developer</h1>

        <a href="#contact">
          <div className={`${styles.curriculumButton} ${styles.greetings} greetings`}>
            Hablemos!
          </div>
        </a>
      </section>

      <div className={styles.scrollIconContainer}>
        <ScrollIcon />
      </div>

      <div className={styles.model}>
        <Image src={'/santi.gif'} width={500} height={500} alt='Gif of a dude animated floating in space' />
      </div>

      <div className={styles.mountainsContainer}>
        <Mountains />
      </div>

      <div id='experience' className={styles.cardContainer}>
        <div className={styles.extraCardSpace}>{/* Space to move next card */}</div>
        <div className={styles.cardTitle}><h1 style={{ textAlign: 'center' }}>EXPERIENCIAS</h1></div>
        <div className={styles.extraCardSpace}>{/* Space to move next card */}</div>
        <Card data={globantData} />
        <Card data={muniData} />
        <Card data={adusData} />
      </div>

      <div id='wave' className={styles.wave}>
        <WavesSvg />
      </div>

      {/* next section inside turquoise bg */}
      <div className={styles.turquoiseContainer}>
        <Services />
        <Contact />
      </div>
    </main>
  )
}
