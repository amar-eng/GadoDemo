import React from 'react'
import '../styles/HomeContent.scss'
export const HomeContent = () => {
  return (
    <div className='context'>
        <p className='context__p'> <span className='context__span context__logo'>GAD</span><span className=' context__o'>o</span> is a one-stop  platform built to simplify e-commerce throughout Africa. </p>
        <p className='context__p'> Whether you are a shopper from <span className='context__span'>Nairobi</span>  or a Drop-Shipper from <span className='context__span'>London</span>  or even a supplier from <span className='context__span'>Istanbul</span>  </p>
        <p className='context__p'> WE at <span className='context__span context__logo'>GAD</span><span className=' context__o'>o</span> work extremely hard to make sure you have the most simplified and haggle-free experience when buying or selling goods. </p>
    </div>
  )
}
