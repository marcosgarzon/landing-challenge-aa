import React from 'react';
import telbeer from '../Images/telbeer.png';

const BigProyect = () => {
  return (
    <div className='container-fluid big-container '>
        <div className=' second-layer '>
            <div>
                <h6 className='hbig'>GOT A BIG PROYECT</h6>
                <p className='pa'>Looking for a preferred option?</p>
                <p className='pb'>Planning a significant proyect</p>
                <p className='pc '>In need of assistantance to design and execute a bespoke shoot?</p>
                <button className='bb'>Connect with sales</button>
            </div>
            <div>
                <img src={telbeer} className='ibp'/>
            </div>
        </div>
    </div>
  )
}

export default BigProyect