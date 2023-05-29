import React from 'react';
import dog from '../utils/dog.svg';
import girll from '../utils/ladylaught.svg';
import handnuts from '../utils/handnuts.svg';
import arctext from '../utils/arctext.svg';

const HeroMobile = () => {
  return (
    <div className='container-fluid clank'>
      <div className='h1mob'>
        <h1 className='h1mob1' >WE PRODUCE TOP-QUALITY PHOTOS ON THE WEB</h1>
      </div>
      <div>
        <img className='dog' src={dog}/>
        <img className='girll' src={girll} />
        <img className='handnuts' src={handnuts} />
        <img className='arctext' src={arctext} />
      </div>
    </div>
  )
}

export default HeroMobile