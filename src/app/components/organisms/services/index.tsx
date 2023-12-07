import React, { useLayoutEffect } from 'react'
import styles from './services.module.css'
import gsap from 'gsap'

const Services = () => {
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(`.${styles.services}`, { opacity: 0, y: 500 }, {
				scrollTrigger: {
					trigger: 'main',
					start: '50% 50%',
					end: '65% 50%',
					scrub: 3,
					markers: true,
				},
				y: 0,
				opacity: 1,
			})
		}, 'main')

		return () => ctx.revert();
	}, [])

	return (
		<div className={styles.services}>
			<div className={`${styles.service}`}>
			</div>
			<div className={styles.servicesDescription}>
				<h1>SERVICIOS</h1>
				<p>Ofrezco soluciones completas para asegurar que tu presencia en la web sea impecable y efectiva</p>
			</div>
			<div className={`${styles.service} ${styles.highlight}`}>
				<h2>Diseño UI/UX</h2>
				<p>Multiples propuestas personalizados, desde interfaces atractivas hasta experiencias de usuario intuitivas, creamos diseños que cautivan y comprometen a tu audiencia</p>
			</div>
			<div className={styles.service}>
				<h2>Desarrollo de Aplicaciones a Medida</h2>
				<p>Transformo tus ideas en aplicaciones web dinámicas y funcionales, personalizadas según tus requisitos</p>
			</div>
			<div className={`${styles.service} ${styles.highlight}`}>
				<h2>Implementación en Servidores y Gestión de DNS</h2>
				<p>Subo tus aplicaciones a servidores confiables y nos encargamos del manejo y configuración de DNS para asegurar una presencia en línea sin interrupciones</p>
			</div>
			<div className={styles.service}>
				<h2>Optimización SEO</h2>
				<p>Potencio tu visibilidad en línea con estrategias de SEO eficaces para mejorar tu ranking en los motores de búsqueda</p>
			</div>
			<div className={`${styles.service} ${styles.highlight}`}>
				<h2>Mantenimiento Continuo</h2>
				<p>Ofrezco servicios de mantenimiento periódico para garantizar que tu sitio web y aplicaciones funcionen sin problemas y estén actualizados</p>
			</div>
			<div className={styles.service}>
				<h2>Optimización y Mejoras en Códigos Existentes</h2>
				<p>Analizo y mejoro los códigos existentes para optimizar el rendimiento y resolver problemas técnicos</p>
			</div>
		</div>
	)
}

export default Services