import React from 'react'
import logopng from '../assets/logopng.png'
import { Element } from 'react-scroll';


function Hero() {
  return (
        
        <Element name="hero">
          <div className='text-gray-200 bg-black/40 flex flex-col items-center justify-center  space-y-0 justify-center w-screen h-screen items-center'>
            
            <div className='flex flex-col items-center justify-center lg:flex-row space-x-6   w-screen h-screen'>
              <div className='w-48'>
                <img src={logopng} alt="" />
              </div>
              <span className='text-5xl lg:text-8xl'>TEAM </span>
              <span className='text-5xl lg:text-8xl'>  VIDYUTASHWA</span>
            </div>
          
          </div>

        </Element>

    
  )
}

export default Hero