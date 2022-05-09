import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import '../styles/Bottoms.scss'
import { cart, vending, supplier } from "../utils/Lists";
const Bottom = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const blocks = [
        {
          heading: "Shop Now ",
          icon: cart,
          text: 'Explore our wide range of products',
          btn:'Shop Now', 
          link: '/shop',
        },
        {
            heading: "I'm a Drop-Shipper",
            icon: vending,
            text: 'Sell your own products or hit up one of our suppliers',
            btn:'Get Started', 
            link: '/sell',
          },
          {
            heading: "Become a Supplier ",
            icon: supplier,
            text: 'List your products and get paid',
            btn:'Get Started', 
            link: '/supply',
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
                               
                                <Link to= {`${b.link}`} >
                                    <button className='bottom__button'>{b.btn}</button>
                                 </Link> 
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