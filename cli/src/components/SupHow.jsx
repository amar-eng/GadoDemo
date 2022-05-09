import React from 'react'
import '../styles/How.scss'
import { arrow1, arrow2} from "../utils/Lists";
const SupHow = () => {
    const blocks = [
        {
          heading: "List your product",
          number: "01",
          paragraph:
            "Bring in your OWN product or get in touch with OUR suppliers to find the right product you want to sell. ",
        },
        {
          heading: "Contact with Drop Shipper",
          number: "02",
          paragraph:
            "Once you've found the right product, it will get listed on GADo and ensure you get the best possible price. ",
        },
        {
          heading: "Sell and get paid",
          number: "03",
          paragraph:
            "With our simple and secure payment system, you can sell your product and get paid in just a few minutes.",
        },
        
      ];
  return (
    <div className='how'>
        <h1 className='how__title'>
            How it works
        </h1>
        <div className="how__container">
        {
            blocks.map((block, index) => {
                return (
                    <>
                    <div className='how__block' key={index}>
                        <div className='how__block-number'>
                            {block.number}
                        </div>
                        <div className='how__block-content'>
                            <h2 className='how__block-content-heading'>
                                {block.heading}
                            </h2>
                            <p className='how__block-content-paragraph'>
                                {block.paragraph}
                            </p>
                        </div>
                    </div>
                    <img src={arrow1} alt="arrow" className='how__arrow'/>
                    <img src={arrow2} alt="arrow" className='how__arrow2'/>
                    </>
                )
            }
            

            )

        }
        
        </div>
    </div>
  )
}

export default SupHow