import React, { useLayoutEffect, useRef, useState } from 'react'
import styles from './header.module.css'
import { gsap } from "gsap";
import Image from 'next/image';

const Header = () => {
	const [isSidenavOpen, setIsSidenavOpen] = useState(false)

	const header = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to(header.current, {
				top: 0,
				delay: 0.4
			})

			gsap.to(header.current, {
				scrollTrigger: {
					start: '15%, 30%',
					end: "20% 30%",
					scrub: true,
				},
				background: 'rgba(34, 40, 49, 0.636)',
			})
			gsap.to(`.${styles.header}`, {
				scrollTrigger: {
					start: '1%, 30%',
					end: "20% 30%",
					scrub: true,
				},
				margin: 6,
			})
		}, header);

		return () => ctx.revert();
	}, []);


	const handleMouseEnterLogo = (event: any) => {
		if (event?.target?.innerHTML) {
			const tl = gsap.timeline();
			tl.to("#logoText", { opacity: 0, duration: 0.3, onComplete: () => { event.target.innerHTML = "<span id='logoText'>Santi Lubary</span>" } });
			tl.to("#logoText", { opacity: 1, duration: 0.3 });
		}
	}

	const handleMouseLeaveLogo = (event: any) => {
		if (event?.target?.innerHTML) {
			const tl = gsap.timeline();
			tl.to("#logoText", { opacity: 0, duration: 0.3, onComplete: () => { event.target.innerHTML = "<span id='logoText'>SL</span>" } });
			tl.to("#logoText", { opacity: 1, duration: 0.3 });
		}
	}

	return (
		<div ref={header} className={styles.headerContainer}>
			<div className={styles.header} style={{ gridColumn: '2/12' }}>
				<a href="#start">
					<div id='logo' className={styles.logo} onMouseLeave={handleMouseLeaveLogo} onMouseEnter={handleMouseEnterLogo}>
						<span id='logoText'>SL</span>
					</div>
				</a>
				<nav className={styles.headerNavContainer}>
					<a href="#experience" className={styles.navLink}>Experiencia</a>
					<a href="#services" className={styles.navLink}>Servicios</a>
					<a href="#contact" className={styles.navLink}>Conectar</a>
				</nav>
				<div className={styles.hamburgerMenu} onClick={() => setIsSidenavOpen(prev => !prev)}>
					<div className={styles.hamburgerLine}></div>
					<div className={styles.hamburgerLine}></div>
					<div className={styles.hamburgerLine}></div>
				</div>
			</div>
			<div className={`${styles.sidenav} ${isSidenavOpen && styles.sidenavShow}`}>
				<div className={styles.sidenavHeader}>
					<h1 className={styles.sidenavTitle}>
						Menu
					</h1>
					<div className={styles.hamburgerMenuClose} onClick={() => setIsSidenavOpen(prev => !prev)}>
						<div className={styles.hamburgerLineClose}></div>
						<div className={styles.hamburgerLineClose}></div>
					</div>
				</div>
				<div className={styles.sidenavNav}>
					<a href="#experience" onClick={() => setIsSidenavOpen(prev => !prev)}>Experiencia</a>
					<a href="#services" onClick={() => setIsSidenavOpen(prev => !prev)}>Servicios</a>
					<a href="#contact" onClick={() => setIsSidenavOpen(prev => !prev)}>Contactar</a>
				</div>
				<Image className={styles.model} src={'/santi.gif'} width={800} height={500} priority alt='Gif of a dude animated floating in space' />
			</div>
		</div>
	)
}

export default Header