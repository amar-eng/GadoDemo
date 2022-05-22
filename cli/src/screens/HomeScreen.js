import React from "react";
import Hero from "../components/Hero";
import '../styles/Homepage.scss'
import { HomeContent } from "../components/HomeContent";
import Benefits from "../components/Benefits";
import Global from "../components/Global";
import Works from "../components/Works";
// import Testimonial from "../components/Testimonial";
import Intouch from "../components/Intouch";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className = 'homePage' >
      
    <Hero />
     <HomeContent/>
     <Benefits/>
     <Works/>
     <Global/>
     {/* <Testimonial/> */}
     <Intouch/>
     <Bottom/>
     <Footer/>
    </div>
  );
};

export default Home;
