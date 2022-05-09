import React from 'react'
import '../styles/Bottoms.scss'
import { cart, vending, supplier } from "../utils/Lists";
const Bottom = () => {

    const blocks = [
        {
          heading: "Shop Now ",
          icon: cart,
          text: 'Explore our wide range of products',
          btn:'Shop Now'
        },
        {
            heading: "I'm a Drop-Shipper",
            icon: vending,
            text: 'Sell your own products or hit up one of our suppliers',
            btn:'Get Started'
          },
          {
            heading: "Become a Supplier ",
            icon: supplier,
            text: 'List your products and get paid',
            btn:'Get Started'
          },
      ];
  return (
 
    <div className='bottom'>
      <div className="bottom__container">
            {
                blocks.map((b, index) => {
                    return (
                        <div className='bottom__block' key={index}>
                            <img src={b.icon} alt='checked' className='bottom__icon'/>
                            <div className='bottom__content'>
                                <div className='bottom__info'>
                                <h2 className='bottom__heading'>{b.heading}</h2>
                                    <p className='bottom__text'>{b.text}</p>
                                </div>
                                <button className='bottom__button'>{b.btn}</button>
                            </div>
                        </div>
                    )
                }
                )}
        </div>
            

    </div>
  
  )
}

export default Bottom