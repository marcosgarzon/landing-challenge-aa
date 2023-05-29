import React, { useState } from 'react';
import hambmenu from '../utils/hambmenu.svg';

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg  navsh">
      <div className="container-fluid">
        <button
          className="hambmenu "
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <img src={hambmenu} className=" img-fluid"/>
        </button>

        <div
          className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light bg-light">
            <li className="nav-item">
              <a className="nav-link" href="#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">WORK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">PRICING</a>
            </li>
          </ul>
        </div>

        <div className="">
          <div className="ms-auto">
            <button className="btn basbtn ">Build a Shoot</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMobile;
