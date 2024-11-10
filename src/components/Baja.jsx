import React from 'react'

import baja17 from '../assets/baja17.jpg'
import baja3 from '../assets/baja3.jpg'
import { Element } from 'react-scroll';

import { useNavigate } from 'react-router-dom';


function Baja() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ourteam');

  };

  return (

    <Element name="baja">
      <div id='baja' className='flex flex-col justify-center w-screen bg-black text-slate-200 lg:flex-row-reverse lg:justify-between'>
         <div className='p-8 lg:w-1/2 flex justify-center items-center flex-col space-y-8'>
           <h1 className='text-4xl border-b-2 border-red-700 p-4'>ABOUT SAE-EBAJA</h1>
           <p className='p-3 lg:text-xl'>SAE BAJA, hosted by SAE International, is a premier collegiate design competition where 
              students craft, race, and innovate off-road vehicles. It fosters practical skills, teamwork, and industry connections,
               attracting teams from universities worldwide. The E-Baja is it's electric version where students compete with electric ATVs. After m-Baja,taking inspiration from Dr. A.P.J Abdul Kalam, the Electric version of
               BAJA  was launched in 2015, today known as E-BAJA . The main objectives of E-BAJA is to electrical mobility and making the young
               engineers ready for the future of automobile industry.
               Today around 200 teams to compete and establish their place in the BAJA every year. </p>
          </div>
        <div className='lg:w-1/2 '>
            <img src={baja17} alt="" className='w-screen'/>
        </div>
     
      </div>

      <div className='flex flex-col justify-center w-screen bg-black text-slate-200 lg:flex-row lg:justify-between'>
         <div className='p-8 lg:w-1/2 flex justify-center items-center flex-col space-y-8'>
           <h1 className='text-4xl border-b-2 border-red-700 p-4'>Our Team</h1>
           <p className='p-3 lg:text-xl'>Team Vidyutashwa is the E-BAJA team of Deogiri Institute of Engineering and Management
              Studies, Chhatrapati Sambhajinagar. We are a team of 30 passionate and dedicated students creating a High-Performance 
              E-ATV (All Terrain Vehicle). We have Years of Legacy and established our place in the BAJA History.
           </p>
            <button onClick={handleButtonClick} className='bg-red-600 rounded-full p-4 hover:bg-red-700'>Check Us Out </button>
          </div>
        <div className='lg:w-1/2 '>
            <img src={baja3} alt="" className='w-screen'/>
        </div>
     
      </div>
    </Element>
  )
}

export default Baja