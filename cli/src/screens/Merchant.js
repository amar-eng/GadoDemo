import React from 'react'
import Hero2 from '../components/Hero2';
import Navbar from '../components/Navbar';
import MerOurProducts from '../components/MerOurProducts';
import { vendorhero,truss, com, tracking, sell, hero4, supply , work , working, somali} from "../utils/Lists";
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Intouch from '../components/Intouch';
import How from '../components/How';
import Gallery from '../components/Gallery';
import '../styles/Merch.scss'
const Merchant = () => {
  return (
    <>
      {/* <Hero2 title='Sell' text = "You're on the best platform to sell and reach Countless GADo clients in Africa and across the World." hero={work}/> */}
      <Hero2 title='Sell' hero={work}/>
      <div className='merchant-block'>
        <MerOurProducts/>
        <Gallery trust = {truss} com ={com} tracking ={tracking} somali ={somali} />
      </div>
      <How/>
      <Intouch/>
      <Bottom/>
      <Footer/>
    </>
  )
}

export default Merchant