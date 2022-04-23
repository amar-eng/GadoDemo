import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import SupOurProducts from '../components/SupOurProducts'
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Intouch from '../components/Intouch';
import SupHow from '../components/SupHow';
import {  shop  } from "../utils/Lists";
import SupGalerry from '../components/SupGalerry';
const Supplier = () => {
  return (
    <>
    {/* <Hero2 title="Supply" text = "As a supplier you have the opportunity to sell and reach Countless GADo vendors in Africa and across the World." hero={shop}/> */}
    <Hero2 title="Supply" hero={shop}/>
    <SupOurProducts/>
    <SupGalerry/>
    <SupHow/>
    <Intouch/>
    <Bottom/>
    <Footer/>
    </>
  )
}

export default Supplier