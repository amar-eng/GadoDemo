import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Intouch.scss'
const Intouch = () => {
  return (
    <div className='touch'>
      <div className='in-touch'>
          <h1  className='in-touch__header'>Get In Touch with Us</h1>
          <p  className='in-touch__p'>To get further details on what e-GAD is about or asking on how you can become a e-GAD partner feel free to hit us up!</p>
          
          <Link to="/Contact" >
          <button  className='in-touch__btn'>Contact Us</button>
          </Link>
      </div>
    </div>
  )
}

export default Intouch