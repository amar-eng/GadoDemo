import React from 'react'
import '../styles/Test.scss'
import { left,right } from "../utils/Lists";
const Testimonial = () => {
  

    const blocks = [
        {
         
          header: 'Amazing platform1', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform2', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform3', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform4', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform5', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform6', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform7', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform8', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform9', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 
        {
         
          header: 'Amazing platform10', 
          text: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.', 
          name: 'Mohamed Ali', 
          title:'Vendor',
          country: 'Kenya', 

        }, 

       
        
      ];

    const getFirstLetter = (block) => {
        return block.name[0].toUpperCase();
    }




    
   



  return (
      <>
        <div className='test '> What others are saying</div>
        <div className='test__container'>
        {
            blocks.map((b, index) => {
                return(
                    <div className='test__block ' key={index}>
                        <div className='test__content'>
                            <h3 className='test__header'>{b.header}</h3>
                            <p className='test__text'>{b.text}</p>
                            <div className='test__info'>
                                <p className='test__icon'>{getFirstLetter(b)}</p>
                                <div className='test__profile'>
                                    <p className='test__name'>{b.name}- <span className='test__span'>{b.title}</span></p>
                                    <p className='test__country'>{b.country}</p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>


                )
            })

        }
        </div>
        <div className='test__arrows'>
            <img src={right} alt='right' className='test__right'  />
            <img src={left} alt='left' className='test__right' />
        </div>
    </>
    
  )
}

export default Testimonial