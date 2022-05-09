import React from "react";
import { express, trust,easy } from "../utils/Lists";
import "../styles/OurProducts.scss";

const OurProducts = () => {
  const blocks = [
    {
      heading: "Verified Products",
      icon: trust,
      // paragraph:
      //   "Help your friends smell better and boost confidence. Refer 5 friends to subscribe and enjoy an instant FREE upgrade to our Elite level!",
      paragraph:
        "At Gado, were in the trust business. That means you get the item you purchased or your money back. 100% GUARANTEED! ",
    },
    {
      heading: "Express Shipping",
      icon: express,
      paragraph:
        "Because waiting for shipping is never fun. Let us worry about how fast you get your product and you worry about enjoying it!",
    },
    {
      heading: "Simple payment process",
      icon: easy,
      paragraph:
        "Nothing's more annoying than a complicated checkout process. Follow the few simple payment steps we have to offer and enjoy your product!",
    },
  ];

  return (
    <div className="our-products">
      <h1 className="main-heading">Why Us</h1>

      <div className="our-products-blocks">
        {blocks.map((block, index) => (
        <div key={index} className="block">
            <img className="icon" src={block.icon} alt="" />
            <h3 className="sub-heading">{block.heading}</h3>
            <p className="paragraph">{block.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
