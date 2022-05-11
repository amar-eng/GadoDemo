import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Contact.scss'
import {telephone, message } from "../utils/Lists";
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <>
      <div className='contact'>
          <Navbar/>
          <h1 className='contact__header'>
                Contact Us
          </h1>
          <div className='contact__info'>
            <div className='contact__phone'>
                <img src={telephone} alt='whatsapp' className=' contact__icons'/>
                <p className='contact__text'>+1-306-999-6734</p>
            </div>
            <div className='contact__phone'>
                <img src={message} alt='email' className='contact__icon contact__icons'/>
                <p className='contact__text'>support@eGAD.com</p>
            </div>
          </div>
          <ContactForm/>
      </div>
      
  </>
  )
}

export default Contact