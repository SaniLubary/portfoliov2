import React, { useLayoutEffect, useRef } from 'react'
import styles from './header.module.css'
import { gsap } from "gsap";

const Header = () => {
	const header = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to(header.current, {
				top: 0,
				delay: 0.4
			})
			
			gsap.to(header.current, {
				scrollTrigger: {
					trigger: 'body',
					start: '15%, 30%',
					end: "20% 30%",
					scrub: true,
				},
				background: 'rgba(34, 40, 49, 0.636)',
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
				<div id='logo' className={styles.logo} onMouseLeave={handleMouseLeaveLogo} onMouseEnter={handleMouseEnterLogo}>
					<span id='logoText'>SL</span>
				</div>
				<nav className={styles.headerNavContainer}>
					<a href="#" className={styles.navLink}>Experiencia</a>
					<a href="#" className={styles.navLink}>Sobre Mi</a>
					<a href="#" className={styles.navLink}>Conectar</a>
				</nav>
			</div>
		</div>
	)
}

export default Header