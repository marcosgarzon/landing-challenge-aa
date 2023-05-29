import React from 'react';
import telbeer from '../Images/telbeer.png';

const BigProyectMob = () => {
  return (
    <div className='container-fluid big-container-mob '>
        <div className=' second-layer-mob '>
            <div>
                <h6 className='hbig-mob'>GOT A BIG PROYECT</h6>
                <p className='pa-mob'>Looking for a preferred option?</p>
                <p className='pb-mob'>Planning a significant proyect</p>
                <p className='pc-mob '>In need of assistantance to design and execute a bespoke shoot?</p>
                <button className='bb-mob'>Chat with sales</button>
            </div>
            <div>
                <img src={telbeer} className='ibp-mob'/>
            </div>
        </div>
    </div>
  )
}

export default BigProyectMob