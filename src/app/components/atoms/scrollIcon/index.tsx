import gsap from "gsap"
import * as React from "react"
import { SVGProps } from "react"
import styles from './scrollicon.module.css'

const ScrollIcon = (props: SVGProps<SVGSVGElement>) => {
    React.useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({repeat: -1})
        tl.to(`.${styles.arrow1}`, {opacity: 0, duration: 0.3})
        tl.to(`.${styles.arrow2}`, {opacity: 0, duration: 0.3})
        tl.to(`.${styles.arrow3}`, {opacity: 0, duration: 0.3})
      }, 'main')

      gsap.fromTo(`.scrollIcon`, {opacity: 0}, {
        opacity: 1,
        duration: 0.5,
        delay: 2
      })
    
      return () => ctx.revert();
    }, [])
    
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={46}
            height={80}
            fill="none"
            opacity={0}
            className="scrollIcon"
            {...props}
        >
            <rect width={46} height={80} fill="#263645" rx={23} />
            <path className={styles.arrow1} d="M21.9393 33.0607C22.5251 33.6464 23.4749 33.6464 24.0607 33.0607L33.6066 23.5147C34.1924 22.9289 34.1924 21.9792 33.6066 21.3934C33.0208 20.8076 32.0711 20.8076 31.4853 21.3934L23 29.8787L14.5147 21.3934C13.9289 20.8076 12.9792 20.8076 12.3934 21.3934C11.8076 21.9792 11.8076 22.9289 12.3934 23.5147L21.9393 33.0607ZM21.5 30L21.5 32L24.5 32L24.5 30L21.5 30Z" fill="#00ADB5" />
            <path className={styles.arrow2} d="M21.9393 48.0607C22.5251 48.6464 23.4749 48.6464 24.0607 48.0607L33.6066 38.5147C34.1924 37.9289 34.1924 36.9792 33.6066 36.3934C33.0208 35.8076 32.0711 35.8076 31.4853 36.3934L23 44.8787L14.5147 36.3934C13.9289 35.8076 12.9792 35.8076 12.3934 36.3934C11.8076 36.9792 11.8076 37.9289 12.3934 38.5147L21.9393 48.0607ZM21.5 45L21.5 47L24.5 47L24.5 45L21.5 45Z" fill="#00ADB5" />
            <path className={styles.arrow3} d="M21.9393 62.0607C22.5251 62.6464 23.4749 62.6464 24.0607 62.0607L33.6066 52.5147C34.1924 51.9289 34.1924 50.9792 33.6066 50.3934C33.0208 49.8076 32.0711 49.8076 31.4853 50.3934L23 58.8787L14.5147 50.3934C13.9289 49.8076 12.9792 49.8076 12.3934 50.3934C11.8076 50.9792 11.8076 51.9289 12.3934 52.5147L21.9393 62.0607ZM21.5 59L21.5 61L24.5 61L24.5 59L21.5 59Z" fill="#00ADB5" />
        </svg>
    )
}
export default ScrollIcon
