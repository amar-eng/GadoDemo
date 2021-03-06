import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";
import Navbar from "./Navbar";

const Hero = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>

    <div className="hero">
      <Navbar/>
      <div className="container">
        <div className="info">
            <h1 className="info__header fade-in">
              <span className="info__logo">e-<span className="info__logoo">GAD</span></span> 
              <br />
            </h1>
            
            <h2 className="info__text fade-in">
            An African Based Marketplace

              <br />
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
            </h2>
          </div>
          <div className="info__buttons">
          <Link to="/shop" className="info__btn slide-up1">
            Shop Now
          </Link>
          <Link to="/Sell" className="info__btn slide-up2">
            I'm a Drop-Shipper
          </Link>
          <Link to="/Supply" className="info__btn slide-up3">
            Become a supplier
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
