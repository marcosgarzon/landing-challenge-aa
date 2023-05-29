import React, { useState, useEffect } from 'react';
import Hero from './Hero.js';
import HeroMobile from './HeroMobile.js';
import NavBar from './NavBar.js';
import NavBarMobile from './NavBarMobile.js';
import NewCustomer from './NewCustomer.js';
import Startingfv from './Startingfv.js';
import PackStarting from './PackStarting.js';
import VirtualShoot from './VirtualShoot.js';
import ReadyCard from './ReadyCard.js';
import Galery from './Galery.js';
import Discover from './Discover.js';
import BigProyect from './BigProyect.js';
import Ads from './Ads.js';
import FreeMobile from './FreeMobile.js';
import PacksMobile from './PacksMobile.js';
import VirtualShootMobile from './VirtualShootMobile.js';
import GaleryMob from './GaleryMob.js';
import BigProyectMob from './BigProyectMob.js';


const LandingPageContainer = () => {

    const [width, setWidth] = useState(window.innerWidth);
      
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
    {width > 769 ? (
        <>
        <NavBar/>
        <Hero/>
        <NewCustomer/>
        <Startingfv/>
        <PackStarting/>
        <VirtualShoot/>
        <ReadyCard/>
        <Galery/>
        <Discover/>
        <BigProyect/>
        </>
    ) : (
        <>
        <NavBarMobile/>
        <HeroMobile/>
        <Ads/>
        <FreeMobile/>
        <PacksMobile/>
        <VirtualShootMobile/>
        <ReadyCard/>
        <GaleryMob/>
        <Discover/>
        <BigProyectMob/>
        </>
    )}
    </>
  )
}

export default LandingPageContainer