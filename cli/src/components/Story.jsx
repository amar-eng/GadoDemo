import React from 'react'
import '../styles/Story.scss'
import '../styles/HomeContent.scss'
const Story = () => {
  return (
    <div className='story '>
        {/* <h1 className="story__header">
            Our Story
        </h1> */}
        {/* <p className="story__text">
        The vision at <span className='context__span context__logo'>GAD</span><span className=' context__o'>o</span> is to create a one of a kind, easy, user-friendly,  one-stop shop for all e-commerce needs. With Africa being the centre of the world, We want to bring authentic world products here and introduce the world to what Africa has to offer. Started off in Nairobi, it is our mission to provide <span className='story__span'>trustworthy</span> and <span className='story__span'>transparent</span> shopping experiences that will help you enjoy complete <span className='story__span'>tranquility</span> with your merchandise. 
        </p> */}
        <p className="story__text ">
        The vision at <span className='context__span context__logo'>GAD</span><span className=' context__o'>o</span> is to create a one of a kind, easy, user-friendly,  one-stop shop for all e-commerce needs. 
        </p>
        <p className="story__text ">
         With Africa being the centre of the world, We want to bring authentic world products here and introduce the world to what Africa has to offer.
        </p>
        <p className="story__text">
         Started off in Toronto, it is our mission to provide <span className='story__span'>trustworthy</span> and <span className='story__span'>transparent</span> shopping experiences that will help you enjoy complete <span className='story__span'>tranquility</span> with your merchandise. 
        </p>
    </div>
  )
}

export default Story