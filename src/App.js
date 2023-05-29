import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LandingPageContainer from './components/LandingPageContainer.js';



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={`/`} element={ <LandingPageContainer/> }></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
