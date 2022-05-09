import React from 'react'
import { messages, freeShipping, inventory, trust } from "../utils/Lists";
import "../styles/OurProducts.scss";

const MerOurProducts = () => {
    const blocks = [
        {
          heading: "Trustworthy and reliable",
          icon: trust,
          // paragraph:
          //   "Help your friends smell better and boost confidence. Refer 5 friends to subscribe and enjoy an instant FREE upgrade to our Elite level!",
          paragraph:
            "At Gado, we're in the trust business. We provide a platform in which all payments are clear, no hidden fees and you get the item you purchased or your money back. 100% GUARANTEED! ",
        },
        {
          heading: "Open Communication",
          icon: messages,
          paragraph:
            "It's paramount that you and the suppliers are on the same page. We ensure this by providing a messaging centre where your exact requirements are communicated and met! ",
        },
        {
          heading: "Simple Inventory Tracking",
          icon: inventory,
          paragraph:
            "We created for you a one of a kind platform in which you can easily track, maintain, and sustain your entire inventory. For a small annual fee, enjoy this platform and stay organized!",
        },
      ];
  return (
    <div className="our-products">
        <h1 className="main-heading">Why Us</h1>

        <div className="our-products-blocks">
        {blocks.map((block, index) => (
            <div key={index} className="our-products-blocks__block">
              <div className='our-products-blocks__items'>
                <img className="our-products-blocks__icon" src={block.icon} alt="" />
                <h3 className="our-products-blocks__sub-heading">{block.heading}</h3>
              </div>
              <p className="our-products-blocks__paragraph">{block.paragraph}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default MerOurProducts