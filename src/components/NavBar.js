import React from 'react';
import logoNavBar from '../utils/logoNavBar.svg'
import arrowdown from '../utils/arrowdown.svg'
// import { Link } from 'react-router-dom';


const NavBar = () => {
      
        return (
          <section>
            <div>
            <nav className='navbar navbar-desktop bg-body-tertiary '>
            <div className="container d-flex justify-content-between">
              <div>
                <a className="navbar-brand" href="#">
                  <img src={logoNavBar} alt="logo" width="30" height="24" className='' />
                </a>
                <button className="btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  SERVICES  <img src={arrowdown} className='arrowdown'/>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {/* Contenido del dropdown */}
                </div>
                <button className="btn btn-light " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  WORK <img src={arrowdown} className='arrowdown'/>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {/* Contenido del dropdown */}
                </div>
                <button className="btn btn-light " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  PRICING <img src={arrowdown} className='arrowdown'/>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {/* Contenido del dropdown */}
                </div>
              </div>
              <div>
                <button className="btn arrowdown" >Log In</button>
                <button className="btn btn-primary build-a-shot arrowdown">Build a Shoot</button>
              </div>
            </div>
          </nav>
          </div>
          </section>
        );
      }
    

export default NavBar;





    // <nav className="navbar bg-body-tertiary">
    //   <div className="container d-flex justify-content-between">
    //     <div>
    //       <a className="navbar-brand" href="#">
    //         <img src={logoNavBar} alt="logo" width="30" height="24" className='' />
    //       </a>
    //       <button className="btn btn-light navStyle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //         SERVICES  <img src={arrowdown} className='arrowdown'/>
    //       </button>
    //       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //         {/* Contenido del dropdown */}
    //       </div>
    //       <button className="btn btn-light " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //         WORK <img src={arrowdown}/>
    //       </button>
    //       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //         {/* Contenido del dropdown */}
    //       </div>
    //       <button className="btn btn-light " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //         PRICING <img src={arrowdown}/>
    //       </button>
    //       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //         {/* Contenido del dropdown */}
    //       </div>
    //     </div>
    //     <div>
    //       <button className="btn btn-outline-light">Log In</button>
    //       <button className="btn btn-primary">Build a Shoot</button>
    //     </div>
    //   </div>
    // </nav>




