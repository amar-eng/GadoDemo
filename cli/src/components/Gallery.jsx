import React from 'react'
import '../styles/Gallery.scss'

const Gallery = ({trust, com, tracking}) => {
  return (
    <div className='gallery'>
        
        <img className='gallery__trust' src={trust} alt='trust'/>
        <div className='gallery__container'>
            {/* <img className='gallery__trust' src={trust} alt='trust'/> */}
            <img className='gallery__img' src={com} alt='com'/>
            <img className=' gallery__tracking' src={tracking} alt='tracking'/>
        </div>
    </div>
  )
}

export default Gallery