import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Works.scss'
import { checked } from "../utils/Lists";
const Works = () => {
    const blocks = [
        {
          heading: "As a Drop Shipper",
          icon: checked,
          one: 'Contact a supplier',
          two: 'List your product',
          three: 'Sell and Get Paid',
          link: '/sell',
    
        },
        {
          heading: "As a Supplier",
          icon: checked,
          one: 'List your Products', 
          two: 'Contact a Vendor',
          three: 'Sell and Get Paid',
          link: '/supply',
          
        },
        {
          heading: "When Shopping",
          icon: checked,
            one: 'Search for Products',
            two: 'Compare Prices',
            three: 'Buy & Get Your Product',
            link: '/shop',
          
        },
      ];
  return (
      <>
    <div className='works'> How It Works</div>
    <div className="works__context">
    {
        blocks.map((b, index) => {
            return (
              <div className='works__container'>
                <div className='works__block' key={index}>
                 
                   <h2 className='works__heading'>{b.heading}</h2>
                   <div className='works__content'>
                    <div className='works__info'>
                        <img src={b.icon} alt='checked' className='works__icon'/>
                        <p className='works__text'>{b.one}</p>
                    </div>
                    <div className='works__info'>
                        <img src={b.icon} alt='checked' className='works__icon'/>
                        <p className='works__text'>{b.two}</p>
                    </div>
                    <div className='works__info'>
                        <img src={b.icon} alt='checked' className='works__icon'/>
                        <p className='works__text'>{b.three}</p>
                    </div>
                    
                   </div>
                   <Link to= {`${b.link}`} >
                      <button className='works__button'>Get Started</button>
                  </Link>
                   </div>
                </div>
            )
        }
        )}
    </div>
    </>
  )
}

export default Works