import React from 'react';
import newCustomer from '../Images/newCustomer.png';
import arrowright from '../utils/arrowright.svg';

const NewCustomer = () => {
  return (
    <section className="new-customer-container">
    <div className="new-container"> 
      <div>
        <div>
          <img className="new-customer-img" src={newCustomer} alt="New Customer" />
        </div>
      </div>
    </div>
    <div className="new-container2">
        <div className='new-progress'></div>
        <div className='new-progress'></div>
        <div className='new-progress'></div>
      <div className='new-container-row new-only'>
        <p>NEW CUSTOMERS ONLY</p>
      </div>
      <div className='new-container-row '>
        <h2 className='new-free'>5 FREE PHOTOS</h2>
      </div>
      <div className='new-container-row'>
        <p className='new-pix-free'>Try Pix FREE and get the product on white images you need to successfully sell on Amazon. What are you waiting for? It’s FREE!</p>
      </div>
      <div className='new-container-row'>
        <button className='new-button-learn'>Learn more</button>
      </div>
      <div className='new-container-row'>
        <button className='new-button-next'>Next <img className='new-arrow' src={arrowright}/></button>
      </div>
    </div>
  </section>
  )
}

export default NewCustomer