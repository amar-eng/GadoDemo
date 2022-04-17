import React from 'react'
import '../styles/Benefits.scss'; 
import { express, verified,easy } from "../utils/Lists";

const Benefits  = () => {
    const blocks = [
        {
          heading: "Verified Products",
          icon: verified,
          paragraph:
            "At GADo, were in the trust business. That means you get the item you purchased or your money back. 100% GUARANTEED! ",
        },
        {
          heading: "Express Shipping",
          icon: express,
          paragraph:
            "Because waiting for shipping is never fun. Let us worry about how fast you get your product and you worry about enjoying it!",
        },
        {
          heading: "Simple Payment",
          icon: easy,
          paragraph:
            "Nothing's more annoying than a complicated checkout process. Follow the few simple payment steps we have to offer and enjoy your product!",
        },
      ];
  return (
      <>
    <h1 className='benefits'>Whats in it for you </h1>
    <div className="benefits__content">
        {blocks.map((block, index) => (
          <div key={index} className="block">
            <img className="block__icon" src={block.icon} alt="" />
            <h3 className="block__sub-heading">{block.heading}</h3>
            <p className="block__paragraph">{block.paragraph}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Benefits 