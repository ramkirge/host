

import React, { useEffect } from 'react';
import Nav from './components/Nav';
import { HashRouter as Router, Route, Routes, } from 'react-router-dom';

import Hero from './components/Hero';
import Baja from './components/Baja';
import Winn from './components/Winn';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Sponser from './components/Sponser';
import Team  from './components/Team';
import Footer from './components/Footer';





//import { Component } from 'react';

export default function App() {
  return (
    
      <Router>
      <div className='bg-neutral-900 bg-bgimg  bg-[center_left_-14rem] bg-no-repeat bg-fixed bg-[length:700px_450px] lg:bg-[center_left_10rem] lg:bg-[center_top_4rem] lg:bg-[length:1000px_650px] h-auto'>
        <Nav />
        <Routes>
          <Route path="/" element={
           <>

          
              <Hero />
              <Baja />
              <Winn />
              <Sponser />
              <Contact />
          
           </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ourteam" element={<Team />} />
        </Routes>
        <Footer/>

        </div>
      </Router>

      
  );
}


