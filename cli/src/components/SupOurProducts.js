import React from 'react'
import { bestCollection,freeShipping, trust, connect, inventory } from "../utils/Lists";
import "../styles/OurProducts.scss";

const SupOurProducts = () => {
    const blocks = [
        {
          heading: "Trustworthy and reliable",
          icon: trust,
          // paragraph:
          //   "Help your friends smell better and boost confidence. Refer 5 friends to subscribe and enjoy an instant FREE upgrade to our Elite level!",
          paragraph:
            "At Gado, were in the trust business. We provide a platform in which all payments are clear, no hidden fees. You get your payment haggle or delay free. 100% GUARANTEED! ",
        },
        {
          heading: "Connecting to Vendors",
          icon: connect,
          paragraph:
            "It's paramount that you and the merchants are on the same page. We connect you to them by providing a transparent platform where your exact requirements are communicated!",
        },
        {
          heading: "Simple inventory tracking ",
          icon: inventory,
          paragraph:
            "We created for you a one of a kind platform in which you can easily list, maintain, and sustain your entire inventory. For a small annual fee, enjoy this platform and stay organized!",
        },
      ];
  return (
    <div className="our-products">
    <h1 className="main-heading">Why Us</h1>

    <div className="our-products-blocks">
    {blocks.map((block, index) => (
        <div key={index} className="our-products-blocks__block">
         <img className="our-products-blocks__icon" src={block.icon} alt="" />
          <h3 className="our-products-blocks__sub-heading">{block.heading}</h3>
          
          <p className="our-products-blocks__paragraph">{block.paragraph}</p>
        </div>
    ))}
    </div>
</div>
  )
}

export default SupOurProducts