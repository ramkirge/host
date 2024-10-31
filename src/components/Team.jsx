import React, { useState } from 'react'
import amitpal from '../assets/member/amitpal.jpeg'
import userf from '../assets/user.jpeg'

import { BsLinkedin } from "react-icons/bs";

function Team() {

  const [hoveredMember, setHoveredMember] = useState(null);


  const members = [
    {
      name : 'VIREN PARDESHI',
      position : 'Captain',
      education : 'Mechanical Engineering, Third year',
      linkidn : 'iiuhihiu',
      profile : require('../assets/user.jpeg')

    },
    {
      name : 'YASH KSHIRSAGAR',
      position : 'Vice Captain ',
      education : 'Mechanical Engineering, Final year',
      linkidn : 'iiuhihiu',
      profile : require('../assets/user.jpeg')

    },

    {
      name : 'SHIVAM NARAGUDE',
      position : 'Manager',
      education : 'Mechanical Engineering, Final year',
      linkedin : 'https://www.linkedin.com/in/shivam-naragude-24454a321/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/shivam.jpeg')

    },

    {
      name : 'ADITYA BHAVSAR',
      position : 'Powertrain System Head',
      education : 'Electronics and Telecommunication Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/aditya-bhavsar-7bb637235/u',
      profile : require('../assets/member/aditya.jpg')

    },
    {
      name : 'RAM KIRGE',
      position : 'Electrical System Head',
      education : 'Computer Science and Engineering, Second year',
      linkedin : 'iiuhihiu',
      profile : require('../assets/user.jpeg')

    },
    {
      name : 'ROHAN BHADARGE',
      position : 'Steering System Head',
      education : 'Mecjhanical Engineering, Final year',
      linkedin : 'https://www.linkedin.com/in/rohan-bhadarge-63605b229/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },
    {
      name : 'AKANSHA SALVE',
      position : 'Breaking System Head',
      education : 'Mechanical Engineering, Final year',
      linkedin : 'https://www.linkedin.com/in/akansha-salve-3bb0782b8/',
      profile : require('../assets/member/userf.jpeg')

    },
    {
      name : 'SOHAM MAHATOLE',
      position : 'Sopnsorship Team Head',
      education : 'Computer Science and Engineering (AIML), Second year',
      linkedin : 'https://www.linkedin.com/in/soham-mahatole-69b802262/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },

    {
      name : 'POOJA DHOOT',
      position : 'Powertrain System Member',
      education : 'Electronics and Telecommunication Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/pooja-dhoot-a6789b327/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/userf.jpeg')

    },

    {
      name : ' MRUNAL BHALERAO',
      position : 'Powertrain System Member',
      education : 'Electronics and Telecommunication Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/mrunal-bhalerao-8a172b302/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/userf.jpeg')

    },

    {
      name : 'GAYATRI BAHUDHANE',
      position : 'Powertrain System Member',
      education : 'Electronics and Telecommunication Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/gayatri-bahudhane-5a3b7a2b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/userf.jpeg')

    },

    {
      name : 'TANISHKA CHAVAN',
      position : 'Powertrain System Member',
      education : 'Electronics and Telecommunication Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/tanishka-chavan-624ab3335/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      profile : require('../assets/member/userf.jpeg')

    },

    {
      name : 'SHRUSHTI RAMPURIKAR',
      position : 'Electric System Member',
      education : 'Electronics and Telecommunication Engineering, First year',
      linkedin : 'https://www.linkedin.com/in/shrushti-rampurikar-83999b335/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/userf.jpeg')

    },

    {
      name : 'PRASAD AKHADE',
      position : 'Steering System Member',
      education : 'Mechanical Engineering, Second year',
      linkedin : 'https://www.linkedin.com/in/soham-mahatole-69b802262/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/prasad.jpg')

    },

    {
      name : 'KAIF PATHAN',
      position : 'Steering System Member',
      education : 'Mechanical Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/kaif-pathan-a31509264/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },

    {
      name : 'YASH BIRARI',
      position : 'Steering System Member',
      education : 'Mechanical Engineering, Final year',
      linkedin : 'https://www.linkedin.com/in/yash-birari-822773278/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },

    {
      name : 'TEJAS RATHOD',
      position : 'Breaking System Member',
      education : 'Mechanical Engineering, Final year',
      linkedin : 'https://www.linkedin.com/in/tejas-rathod-16a8432b7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },

    

    {
      name : 'SAHIL GOLE',
      position : 'Breaking System Member',
      education : 'Mechanical Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/sahil-gole-21030b22b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },

    {
      name : 'MOHIT GAWALI',
      position : 'Breaking System Member',
      education : 'Mechanical Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/mohit-gawli-49897a2b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },


    {
      name : 'VIVEK CHAVAN',
      position : 'Suspension System Member',
      education : 'Mechanical Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/vivek-chavan-91a20428a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },

    {
      name : 'SARTHAK CHAVAN',
      position : 'Suspension System Member',
      education : 'Mechanical Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/sarthak-chavan-3a8302326/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },
    {
      name : 'ARATI REVGADE',
      position : 'Suspension System Member',
      education : 'Mechanical Engineering, Final year',
      linkedin : 'https://www.linkedin.com/in/arti-revgade-7b45202ba/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/userf.jpeg')

    },

    {
      name : 'RUSHIKESH DARWANTE',
      position : 'Suspension System Member',
      education : 'Mechanical Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/rushi-darwante-a68a85335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      profile : require('../assets/member/user.jpeg')

    },

    {
      name : 'KRUSHNA BHAWAR',
      position : 'Design Team Member',
      education : 'Mechanical Engineering, Third year',
      linkedin : 'https://www.linkedin.com/in/rushi-darwante-a68a85335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      profile : require('../assets/member/user.jpeg')

    },

    {
      name : 'KULPREET KAUR SHERMAR',
      position : 'Sponsorship Team Member',
      education : 'Computer Science and Engineering, Second year',
      linkedin : 'https://www.linkedin.com/in/kulpreet-kaur-shermar-b75160326/',
      profile : require('../assets/member/kulpreet.jpg')

    },

    {
      name : 'OM CHANNE',
      position : 'Sponsorship Team Member',
      education : 'Computer Science and Engineering (AIML), Second year',
      linkedin : 'https://www.linkedin.com/in/om-channe-90868328b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      profile : require('../assets/member/user.jpeg')

    },
    {
      name : 'SUKANYA PURANIK',
      position : 'Sponsorship Team Member',
      education : 'Computer Science and Engineering (AIML), Second year',
      linkedin : 'https://www.linkedin.com/in/sukanya-puranik-70385a306/',
      profile : require('../assets/member/userf.jpeg')

    },

    {
      name : 'SIDDHI KONARDE',
      position : 'Sponsorship Team Member',
      education : 'Electronics and Telecommunication Engineering, Second year',
      linkedin : 'https://www.linkedin.com/in/siddhi-konarde-982105336/',
      profile : require('../assets/member/userf.jpeg')

    },




    


  ]

  return (

    <div className='bg-neutral-900 bg-bgteam  bg-[center_left_-14rem] bg-no-repeat bg-fixed bg-cover lg:bg-[center_left_10rem] lg:bg-[center_top_4rem] lg:bg-cover h-auto'>
      
      <div className='flex flex-col space-y-36   items-center bg-black/60 justify-center text-slate-200 w-screen h-screen'>
        <div className='p-8 text-center lg:w-1/2 flex justify-center absolute  items-center h-fit flex-col space-y-8'>
            <h1 className='text-4xl lg:text-5xl  p-4'>MEET THE TEAM</h1>
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
            <div className='p-5'><img className='h-80' src={amitpal} alt="" /></div>
            <div className='flex justify-center items-center flex-col space-y-5 text-center p-4'>
              <h2 className='text-2xl'>PROF. AMITPALSINGH PUNEWALA</h2>
              <p>Faculty Advisor</p>
              <p>Assistant Professer,Mechanical Department</p>
              <a href='https://www.linkedin.com/in/amitpal-singh-punewale-099b2899/' target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                         <div className='flex flex-row'><h3>Linked </h3><BsLinkedin className='mt-1'/></div>
              </a>
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
                <div className='p-5'><img className='h-80' src={member.profile} alt="" /></div>
                <div className='flex flex-col space-y-5 text-center p-4'>
                  <h2 className='text-2xl'>{member.name}</h2>
                  <p>{member.position}</p>
                  

                  {hoveredMember === index && (
                    <div className=" flex flex-col items-center transition-opacity h-full w-full duration-500 ease-in text-gray-300">
                    
                      <p>{member.education}</p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                         <div className='flex flex-row'><h3>Linked </h3><BsLinkedin className='mt-1'/></div>
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