import React from 'react';
import heroImg from '../Images/hero.png';

const Hero = () => {
  return (
    <section className="hero hero-container">
      <div  >
        <div>
          <h1 className="hero-title">WE DEILVER THE MOST OUTSTANDING PICTURES ON THE WEB</h1>
          <p className="hero-description">And we do it virtually</p>
          <div className="hero-buttons">
            <button className="hero-button1">Build a shoot</button>
            <button className="hero-button2">Chat with sales</button>
          </div>
        </div>
        <div >
          <img src={heroImg} alt="hero" className="hero-image" />
        </div>
        <div className='eclipse'>

        </div>
      </div>
    </section>
  )
}

export default Hero