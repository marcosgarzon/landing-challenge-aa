import React from 'react'
import freepic1 from '../Images/freepic1.png';
import arrowright from '../utils/arrowright.svg';

const FreeMobile = () => {
  return (
    <section className="">
    <div className="new-container3 fix-mob-cont">
        <div>
            <img src={freepic1} className='freepic1'/>
        </div>
      <div className='new-container-row new-only1'>
        <p>NEW CUSTOMERS ONLY</p>
      </div>
      <div className='new-container-row '>
        <h2 className='new-free1'>5 FREE PHOTOS</h2>
      </div>
      <div className='new-container-row'>
        <p className='new-pix-free1'>Try Pix FREE and get the product on white images you need to successfully sell on Amazon. What are you waiting for? It’s FREE!</p>
      </div>
      <div className='new-container-row'>
        <button className='new-button-learn1'>Learn more</button>
      </div>
      <div className='new-container-row '>
        <button className='new-button-next1'>Next <img className='new-arrow' src={arrowright}/></button>
      </div>
    </div>
  </section>
  )
}

export default FreeMobile