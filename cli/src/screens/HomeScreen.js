import React from "react";
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import HowItWork from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import '../styles/Homepage.scss'

const Home = () => {
  return (
    <div className = 'homePage' >
       <Navbar />
      <Hero />
      {/* <OurProducts />
      <HowItWork /> */}

      {/* <OurPlans /> */}
    </div>
  );
};

export default Home;
