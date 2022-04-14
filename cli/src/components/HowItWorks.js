import React from "react";
import { howItWorks1, howItWorks3, howitworks4, boxed } from "../utils/Lists";
import "../styles/HowItWorks.scss";

const HowItWorks = () => {
  const blocks = [
    {
      heading: "Select your product",
      image: howItWorks1,
      paragraph:
        "Explore our collection for all types of products. Add the product you want to buy to your cart and get started.",
    },
    {
      heading: "Activate your purchase",
      image: howitworks4,
      // paragraph:
      //   "Jump on board to the best monthly cologne subscription around. Switch up your scent to match your energy",
      paragraph:
        "Jump on board to the BEST product collection options in Africa. GADo is designed to help you find the right product for YOU.",
    },
    {
      heading: "Receive your Product",
      image: boxed,
      paragraph:
        "At GADo, we believe in fast delivery and expert pricing. Things are feeling fresh. Right at your doorstep.",
    },
  ];

  return (
    <div className="how-it-works">
      <h1 className="hiw-main-heading">How It Works</h1>

      <div className="horizontal-scroll">
        <div className="how-it-work-blocks">
          {blocks.map((block, index) => (
            <div key={index} className="hiw-block">
              <span className="top-blue-circle">{index + 1}</span>
              <img className="how-it-works-image" src={block.image} alt="" />
              <h4 className="hiw-sub-heading">{block.heading}</h4>
              <p className="hiw-paragraph">{block.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
