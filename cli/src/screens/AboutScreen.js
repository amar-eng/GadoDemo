import React from "react";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Intouch from '../components/Intouch';
import Benefits from '../components/Benefits';
import Story from "../components/Story";
import { about, office  } from "../utils/Lists";
const AboutScreen = () => {
  return <div>
 
    {/* <Hero2 title ='About Us' text = "We are an African based Venture " hero={office}/> */}
    <Hero2 title ='Our Story'  hero={office}/>
    <Story/>
    <Benefits/>
    <Intouch/>
    <Bottom/>
    <Footer/>
  </div>;
};

export default AboutScreen;
