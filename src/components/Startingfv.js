import React from 'react'
import cartera from '../Images/cartera.png';
import gummymix from '../Images/gummymix.png';

const Startingfv = () => {
    return (
      <div className="container-fluid">
        <div className="row rosa-chicle">
          <div className="col-md-3 start">
            {/* Elemento 1 */}
            <img src={cartera} alt="Imagen" className="img-fluid cartera-img" />
          </div>
          <div className="col-md-3 start d-flex flex-column align-items-center justify-content-center text-left">
            {/* Elemento 2 */}
            <h2 className='start-p'>PHOTOS STARTING AT $39</h2>
            <p className='start-p-p'>Choose every detail and build a shoot that is right for your budget</p>
            <a className='learn-more' href="#">Learn more</a>
          </div>
          <div className="col-md-3 ">
            {/* Elemento 3 */}
            <img src={gummymix} alt="Imagen" className="custom-image" />
          </div>
          <div className="col-md-3 rosa-chicle custom-column">
            {/* Elemento 4 */}
            <h2 className='video-start'>VIDEOS STARTING AT $93</h2>
            <p className='par-start'>We will capture all the angles during your shoot</p>
            <a className='learn-more2' href="#">Learn More</a>
          </div>
        </div>
      </div>
    );
  };


export default Startingfv