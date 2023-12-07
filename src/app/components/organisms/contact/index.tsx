import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

const Input = ({width = '30%'}) => {
  return <input className={styles.input} style={{ width }}/>
}

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
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
          <h3>Hola!</h3><p>Soy <Input />!</p>
          <p>Mi <b>email</b> es <Input width='50%' /> y me <b>contacto porque</b> <Input width='100%'/></p>
          <button value="asdf" type="submit"></button>
        </form>
      </div>
    </div>
  )
}

export default Contact