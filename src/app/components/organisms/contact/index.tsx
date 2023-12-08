import React, { HTMLInputTypeAttribute, InputHTMLAttributes, useLayoutEffect } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import gsap from 'gsap'

const Input = ({name='', autoComplete='', width = '30%', type = 'text'}: {name: string, autoComplete?: string, width?: string, type?: HTMLInputTypeAttribute}) => {
  return <input name={name} autoComplete={autoComplete} required={true} type={type} className={styles.input} style={{ width }}/>
}

const Contact = () => {
  useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(`.${styles.contactContainer}`, { opacity: 0, y: 500 }, {
				scrollTrigger: {
					trigger: `.${styles.contactContainer}`,
					scrub: 3,
					start: '-100% 100%',
					end: '-100%'
				},
				y: 0,
				opacity: 1,
			})
		}, 'main')

		return () => ctx.revert();
	}, [])

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // submit form
  }
  
  return (
    <div id='contact' className={styles.contactContainer}>
      <h1>🚀 Trabajemos juntos! 🚀</h1>
      <div className={styles.separatorLine}></div>
      <div className={styles.infoFormCotainer}>
        <div className={styles.infoContainer}>
          <h3>Chatea Conmigo!</h3>
          <div style={{ marginTop: '1em' }}>
            <a href=""><Image style={{ marginRight: '1em' }} alt={'WhatsApp icon'} width={50} height={50} src={'/icons/socialMedia/whatsapp.png'} /></a>
            <a href=""><Image style={{ marginRight: '1em' }} alt={'WhatsApp icon'} width={50} height={50} src={'/icons/socialMedia/email.png'} /></a>
            <a href=""><Image alt={'WhatsApp icon'} width={50} height={50} src={'/icons/socialMedia/linkedin.png'} /></a>
          </div>
          <h3 style={{ marginTop: '2em' }}>Hazme una llamada!</h3>
          <a href="">+54 000 0000000</a>
        </div>
        <form className={styles.formContainer}>
          <h3>Hola!</h3><p>Soy <Input autoComplete='given-name' name='name' />!</p>
          <p>Mi <b>email</b> es <Input autoComplete='email' name='email' type='email' width='50%' /> y me <b>contacto porque</b> <Input name='description' width='100%'/></p>
          <button className={styles.sendButton} onClick={e =>handleFormSubmit(e)} type="submit">Enviar!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact