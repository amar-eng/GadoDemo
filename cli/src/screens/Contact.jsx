import React from 'react'
import Navbar from '../components/Navbar2'
import '../styles/Contact.scss'
import Form from '../components/Form'
import { twitter,instagram,facebook,whatsapp,telephone, tiktok, link, message } from "../utils/Lists";
const Contact = () => {
  return (
    <>
   
    <div className='contact'>
      <Navbar/>
      <div className='contact__contain'>
        <div className='contact__wrapper'>
          <h1 className='contact__header'>
            Contact Us
          </h1>
          <div className='contacts__contact'>
            <div className='contacts__phone'>
                <img src={telephone} alt='whatsapp' className=' contacts__icons'/>
                <p className='contacts__text'>+1-306-999-6734</p>
            </div>
            <div className='contacts__phone'>
                <img src={message} alt='email' className='contacts__icon contacts__icons'/>
                <p className='contacts__text'>support@gado.com</p>
            </div>
          </div>
        </div>
        <div className='contact__form'>
          <form className='form-container'>
            <div className='contact--form'>
            <div className='contact__form--info'>
              <input type='radio'  className='contact__input' name='Customer' value='Customer'/> 
              <div className='contact__form--text'>Customer</div>
            </div>
            <div className='contact__form--info'>
              <input type='radio'  className='contact__input' name='drop-shipper' value='drop-shipper'/> 
              <div className='contact__form--text'>Drop-Shipper</div>
            </div>
            <div className='contact__form--info'>
              <input type='radio'  className='contact__input' name='Supplier' value='Supplier'/> 
              <div className='contact__form--text'>Supplier</div>
            </div> 
            </div>
            <Form/>  
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact