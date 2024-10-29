import React from 'react'
import grindm from '../assets/grindm.png'
import para from '../assets/para.png'
import urban from '../assets/urban.png'
import { Element } from 'react-scroll';




function Sponser() {
  return (

    <Element name="sponser">
            <div className='p-10 lg:p-24 flex flex-col justify-center items-center w-screen bg-gray-950 text-slate-200'>
                <div className='flex flex-col space-y-20 justify-center items-center'>
                    <h1 className='text-6xl p-5 border-red-600 border-b-4'>Sponsers</h1>
                    <p className='text-2xl  text-center'>
                        We rely on sponsorships to help us get materials, manufacture parts, use specialized software and 
                        cover expenses. Attending competitions wouldn't be possible without them.
                    </p>
                    <h2 className='text-center text-4xl'>Thank you to all our Sponsers!</h2>
                </div>
                <div className='flex mt-24  '>
                    
                    <div className='flex bg-white h-60 w-60'><a href="https://grindmaster.co.in/"><img className='p-3 w-56 h-56'  src={grindm} alt="" /></a></div>
                    
                </div>
                <div className='flex mt-20 flex-col justify-center items-center space-y-8 lg:flex-row lg:space-x-32'>
                    <a href="https://www.parason.com/"><img  className='w-96 h-90' src={para} alt="" /></a>
                    <a href=""><img className='w-96 h-80' src={urban} alt="" /></a>
                </div>
                <div className='mt-24 text-center'>
                    <p className='text-xl'>
                        Partner with us to make a lasting impact! Join our mission as a valued sponsor and showcase your brand
                        to our engaged audience. Together, we can bring this project to life and drive meaningful change.
                        Join us as a sponsor and become a vital part of an innovative project that’s set to make a meaningful 
                        impact! Partnering with us means connecting your brand with a dedicated audience that values positive 
                        change and forward-thinking solutions. As a sponsor, you’ll gain visibility through our website, events,
                        and communications, positioning your brand as a champion for SAE e Baja event . By supporting this project,
                        you’re not only helping us reach our goals but also aligning your brand with a mission-driven initiative
                        that truly resonates. Let’s create something extraordinary together!"
                    </p>
                    <p className='text-2xl'>
                    Thinking about sponsoring us? Check out our 
                        <a href="" className='text-red-600 underline'>   sponsorship  package</a> and learn how you can help by
                        <a href="" className='text-red-600 underline'> contacting us</a>  today!
                    </p>
                    <button className='bg-red-600 rounded-full p-4 mt-10 hover:bg-red-700'>Sponsership Package</button>
                </div>
            </div>
    </Element>
  )
}

export default Sponser