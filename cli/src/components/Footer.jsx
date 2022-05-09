import React from 'react'
import { twitter,instagram,facebook,whatsapp,telephone, tiktok, link, message } from "../utils/Lists";
import '../styles/Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='footer__header'>e-<span className='footer__span'>GAD</span></h1>
        <div className='footer__socials'>
            <a href="https://twitter.com/e__GAD" target="_blank" rel="noreferrer">
                <img src={twitter} alt='twitter' className='footer__icon'/>
            </a>
            <a href="https://www.instagram.com/egad.marketplace/" target="_blank" rel="noreferrer">
                <img src={instagram} alt='twitter' className='footer__icon'/>
            </a>
            <a href="https://www.linkedin.com/company/e-gad" target="_blank" rel="noreferrer">
                <img src={link} alt='twitter' className='footer__icon'/>
            </a>
            <a href="https://www.facebook.com/E-GAD-101017069284174" target="_blank" rel="noreferrer">
                <img src={facebook} alt='twitter' className='footer__icon'/>
            </a>
            <a href="https://www.tiktok.com/@_egad" target="_blank" rel="noreferrer">
                <img src={tiktok} alt='twitter' className='footer__tiktok'/>
            </a>
        </div>
        <div className='footer__contact'>
            <div className='footer__phone'>
                <img src={telephone} alt='whatsapp' className='footer__icon footer__icons'/>
                <p className='footer__text'>+1-306-999-6734</p>
            </div>
            <div className='footer__phone'>
                <img src={message} alt='email' className='footer__icon footer__icons'/>
                <p className='footer__text'>support@eGAD.com</p>
            </div>
            
           
        </div>
        <button className='footer__button'>
                Careers
            </button>
    </div>
  )
}

export default Footer