import React from 'react'
import '../styles/SupGallery.scss'
import { map  } from "../utils/Lists";
const SupGalerry = () => {
  return (
    <div className='gal'>
        <img src={map}alt="worldvendors"  className='gal__img'/>
    </div>
  )
}

export default SupGalerry