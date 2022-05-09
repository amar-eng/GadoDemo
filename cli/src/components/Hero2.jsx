import React from "react";
import '../styles/Hero2.scss'
import Navbar from './Navbar'
const Hero2 = ({title, text, hero}) => {
 

  return (
    
    <div className='heroo' style={{background: `linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.70)),url(${hero}) no-repeat `, backgroundSize:'cover', backgroundPosition:' center'}}>
        <Navbar/>
        <div className='heroo__content slide-up'>
          <h1 className='heroo__title'>
              {title}
          </h1>
          <p className='heroo__text'>
              {text}
          </p>
        </div>
        
    </div>
    
  )
}

export default Hero2