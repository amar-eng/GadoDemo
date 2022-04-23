import React from 'react'
import { twitter,instagram,facebook,whatsapp,telephone, tiktok, link, message } from "../utils/Lists";
import '../styles/Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='footer__header'>GAD<span className='footer__span'>o</span></h1>
        <div className='footer__socials'>
            <img src={twitter} alt='twitter' className='footer__icon'/>
            <img src={instagram} alt='instagram' className='footer__icon'/>
            <img src={link} alt='instagram' className='footer__icon'/>
            <img src={facebook} alt='facebook' className='footer__icon'/>
            <img src={tiktok} alt='tiktok' className='footer__tiktok'/>
        </div>
        <div className='footer__contact'>
            <div className='footer__phone'>
                <img src={telephone} alt='whatsapp' className='footer__icon footer__icons'/>
                <p className='footer__text'>+1-306-999-6734</p>
            </div>
            <div className='footer__phone'>
                <img src={message} alt='email' className='footer__icon footer__icons'/>
                <p className='footer__text'>support@gado.com</p>
            </div>
            
           
        </div>
        <button className='footer__button'>
                Careers
            </button>
    </div>
  )
}

export default Footer