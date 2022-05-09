import React from "react";
import Hero2 from "../components/Hero2";
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Story from "../components/Story";
import {  office, team  } from "../utils/Lists";
import '../styles/About.scss';
const AboutScreen = () => {
  return <div>
 
    {/* <Hero2 title ='About Us' text = "We are an African based Venture " hero={office}/> */}
    <Hero2 title ='Our Story'  hero={office}/>
    <div className="about-container">
      <img src={team} alt="about" className="about-img"/>
      <Story/>
    </div>
    <Bottom/>
    <Footer/>
  </div>;
};

export default AboutScreen;
