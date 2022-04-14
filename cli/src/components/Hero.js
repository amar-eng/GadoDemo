import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";

const Hero = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="hero">
      <div className="container">
        <div className="info">
          <h1 className="info__header slide-up">
            WE ARE <span className="info__logo">GADo</span> . 
            <br />
           E-COMMERCE <span className="info__span">SIMPLIFIED</span>
          </h1>
          <h2 className="info__text slide-up">
          An African Based E-commerce Venture 

            <br />
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
          </h2>
          <div className="info__buttons">
          <Link to="/" className="info__btn slide-up">
            Shop
          </Link>
          <Link to="/Sell" className="info__btn slide-up">
            Become a Vendor
          </Link>
          <Link to="/Supply" className="info__btn slide-up">
            Im a supplier
          </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
