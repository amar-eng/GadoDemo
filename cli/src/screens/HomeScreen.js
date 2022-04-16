import React from "react";
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import HowItWork from "../components/HowItWorks";
import '../styles/Homepage.scss'
import { HomeContent } from "../components/HomeContent";

const Home = () => {
  return (
    <div className = 'homePage' >
      
      <Hero />
     <HomeContent/>
    </div>
  );
};

export default Home;
