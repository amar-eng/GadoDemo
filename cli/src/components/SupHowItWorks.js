import React from "react";
import { howItWorks1, howItWorks3, howitworks4 } from "../utils/Lists";
import "../styles/HowItWorks.scss";

const SupHowItWorks = () => {
    const blocks = [
        {
          heading: "List your product",
          image: howItWorks1,
          paragraph:
            "As a supplier, enjoy listing your products on our platform in a simplest and most intuitive way. ",
        },
        {
          heading: "Communicate with merchant",
          image: howitworks4,
          // paragraph:
          //   "Jump on board to the best monthly cologne subscription around. Switch up your scent to match your energy",
          paragraph:
            "At GADo, we ensure open and transparent communication channels between you and merchants. ",
        },
        {
          heading: "Sell and receive your payment",
          image: howItWorks3,
          paragraph:
            "We ensure that you get the best possible deal. Sit back and enjoy receiving payments in a smooth transaction system.",
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
  )
}

export default SupHowItWorks