import React from 'react'
import logopng from '../assets/logopng.png'
import { Element } from 'react-scroll';


function Hero() {
  return (
        
        <Element name="hero">
          <div className='text-gray-200 bg-black/40 flex flex-col items-center justify-center  space-y-6 justify-center w-screen h-screen items-center'>
            
            <div className='flex flex-col items-center justify-center   w-screen h-screen'>
              <div className='w-48'>
                <img src={logopng} alt="" />
              </div>
                <div className='flex  items-center justify-center flex-col lg:flex-row'>
                  <span className='text-5xl lg:text-8xl'>TEAM   &nbsp; </span>
                  <span className='text-5xl lg:text-8xl'>  VIDYUTASHWA</span>
                </div>
                <div>
                  <h1 className='text-xl lg:text-2xl'># FORGING A LEGACY</h1>
                </div>
            </div>
          
          </div>

        </Element>

    
  )
}

export default Hero