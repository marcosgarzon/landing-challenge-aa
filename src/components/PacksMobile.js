import React from 'react';
import pinkdrink from '../Images/pinkdrink.png';
import muddybites from '../Images/muddybites.png';
import lovecorn from '../Images/lovecorn.png';
import pinkwave from '../Images/pinkwave.png';

const PacksMobile = () => {
  return (
    <div>
    <div className='container-fluid variante-rosa'>
        <h2 className='h2-packs'>PHOTOS STARTING AT $39</h2>
        <p className='p-packs'>Choose every detail and build a shoot</p>
        <p className='p-packs2'>that is right for your budget</p>
        <a className='learn-link'>Learn more</a>
    </div>
    <div>
        <img src={pinkdrink} className='pinkdrink' />
    </div>
    <div className='container-fluid variante-amarilla'>
        <h2 className='h2-packs'>VIDEOS STARTING AT $93</h2>
        <p className='p-packs'>We will capture all the angles during</p>
        <p className='p-packs2'>your shoot</p>
        <a className='learn-link'>View Videos</a>
    </div>
    <div>
        <img src={muddybites} className='pinkdrink' />
    </div>
    <div className='container-fluid variante-verde'>
        <h2 className='h2-packs'>PACKS STARTING AT $260</h2>
        <p className='p-packs'>Expertly curated packs tailored to your</p>
        <p className='p-packs2'>exact need.</p>
        <a className='learn-link'>View packs</a>
    </div>
    <div>
        <img src={lovecorn} className='pinkdrink' />
    </div>
    <div >
        <img src={pinkwave} className='pinkdrink' />
    </div>
    </div>
  )
}

export default PacksMobile