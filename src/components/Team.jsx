import React, { useState } from 'react'
import baja17 from '../assets/baja17.jpg'
import { BsLinkedin } from "react-icons/bs";

function Team() {

  const [hoveredMember, setHoveredMember] = useState(null);


  const members = [
    {
      name : 'Ram Kirge',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, 2nd year',
      linkidn : 'iiuhihiu',
      profile : 'baja17'

    },
    {
      name : 'Ram Kirge',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, 2nd year',
      linkidn : 'iiuhihiu'

    },

    {
      name : 'Ram Kirge',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, 2nd year',
      linkidn : 'iiuhihiu'

    },

    {
      name : 'Ram Kirge',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, 2nd year',
      linkidn : 'iiuhihiu'

    },
    {
      name : 'Ram Kirge',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, 2nd year',
      linkidn : 'iiuhihiu'

    },
    {
      name : 'Ram Kirge',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, 2nd year',
      linkidn : 'iiuhihiu'

    },
    {
      name : 'Ram Kirge',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, 2nd year',
      linkidn : 'iiuhihiu'

    }

  ]

  return (

    <div className='bg-neutral-900 bg-bgteam  bg-[center_left_-14rem] bg-no-repeat bg-fixed bg-cover lg:bg-[center_left_10rem] lg:bg-[center_top_4rem] lg:bg-cover h-auto'>
      
      <div className='flex flex-col space-y-36   items-center bg-black/60 justify-center text-slate-200 w-screen h-screen'>
        <div className='p-8 text-center lg:w-1/2 flex justify-center absolute  items-center h-fit flex-col space-y-8'>
            <h1 className='text-4xl lg:text-5xl  p-4'>MEAT THE TEAM</h1>
            <p className='p-3 text-2xl'>Welcome to the faces Of Team Vidyutashwa </p>
        </div>
        
      </div>
      <div className='bg-gray-950 text-slate-200'>
        <div className='  flex w-screen items-center justify-center p-20 lg:p-32 text-slate-200 '>
            <h1 className='text-3xl lg:text-6xl  border-b-4 p-4 border-red-600'>TEAM OF 2025</h1>

        </div>
        <div className='flex items-center justify-center w-auto p-10 '>

        <div
         className='p-5 bg-black border-b-2 px-8 lg:w-1/4  h-auto border-red-600 hover:border-2  transition duration-300 '>
          
          <div className='flex flex-col'>
            <div className='p-5'><img className='h-80' src={baja17} alt="" /></div>
            <div className='flex flex-col space-y-5 text-center p-4'>
              <h2 className='text-2xl'>Prof. Amitpalsingh Punewala</h2>
              <p>Faculty Advisor</p>
              <p>Assistant Professer,Mechanical Department</p>
            </div>
          </div>

        </div>

        </div>
        <div className='grid gap-6 grid-cols-1 mt-20 p-5 px-8 lg:grid-cols-4 items-center justify-center'>

          {members.map((member,index) => {
            return(
            <div 
            key={index}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
            className='p-5 bg-black border-b-2 px-8  h-auto border-red-600 hover:border-2 transition duration-300'
            >
          
              <div className={`flex flex-col ${hoveredMember === index ? 'bg-black/90' : ''}`}>
                <div className='p-5'><img className='h-80' src={baja17} alt="" /></div>
                <div className='flex flex-col space-y-5 text-center p-4'>
                  <h2 className='text-2xl'>{member.name}</h2>
                  <p>{member.position}</p>
                  

                  {hoveredMember === index && (
                    <div className=" flex flex-col items-center transition-opacity h-full w-full duration-500 ease-in text-gray-300">
                    
                      <p>{member.education}</p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                         <div className='flex flex-row'><h3>Linked</h3><BsLinkedin className='mt-1'/></div>
                      </a>
                    </div>
                  )}
                </div>
              </div>

            </div>
            );

          })}

        </div>
      </div>
   </div>
  )
}

export default Team