import React from "react";
import { howItWorks1, howItWorks3, howitworks4 } from "../utils/Lists";
import "../styles/HowItWorks.scss";


const MerHowItWorks = () => {
    const blocks = [
        {
          heading: "Find your product",
          image: howItWorks1,
          paragraph:
            "Explore our suppliers vast collection for the right product or bring in your own product to sell  ",
        },
        {
          heading: "List your product",
          image: howitworks4,
          // paragraph:
          //   "Jump on board to the best monthly cologne subscription around. Switch up your scent to match your energy",
          paragraph:
            "Your product will be listed on our platform and will be available for purchase by other users",
        },
        {
          heading: "Sell and receive your payment",
          image: howItWorks3,
          paragraph:
            "Sit back and watch as your sales goes up and enjoy getting paid in a smooth transaction system.",
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

export default MerHowItWorks