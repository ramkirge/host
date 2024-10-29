import React from 'react'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { Element } from 'react-scroll';

function Contact() {
  return (

    <Element  name = "contact">
            <div className='p-24 flex flex-col space-y-20 justify-center items-center w-screen bg-black text-slate-200'>
                <div>
                    <h1 className='text-3xl lg:text-6xl border-b-4 p-4 border-red-600'>Contact Us</h1>
                </div>
                <div>
                    <h2 className='text-2xl text-center'>Feel free to get in touch with us anytime!</h2>
                </div>
                <div className='flex flex-col space-x-24 space-y-14  lg:flex-row'>
                    <div className=' flex flex-col space-y-4'>
                        <h2 className='text-2xl text-center'>Team Info</h2>
                        <h3 className='text-lg' >Email: <a className='text-red-600 underline' href="mailto:vidyutashwaebaja@gmail.com"> vidyutashwaebaja@gmail.com</a></h3>
                        <h3  className='text-xl' >Address: <a className='text-red-600 underline' href="https://www.google.com/maps/dir/19.8672384,75.3270784/deogiri+college+of+engineering+aurangabad+location/@19.8658768,75.318572,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bdb9860cbffffff:0xa66e2b579fb7570!2m2!1d75.321184!2d19.863738?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">Deogiri Institute of Engineering and Management Studies</a></h3>
                        <p className='text-xl text-left' >Deogiri Campus, Railway Station Road,<br /> Chhatrapati Sambhajinagar (Aurangabad),<br /> Maharashtra 431005</p>
                
                    </div>
                    <div className='flex flex-col space-y-10 text-start '>
                        <div className=' text-2xl'>
                            <h1>Captain Info</h1>
                            <h2 className='text-xl'>Viren Pardeshi</h2>
                        </div>
                        <div className=' text-2xl'>
                            <h1>Manager Info</h1>
                            <h2 className='text-xl'>Shivam Naragude</h2>
                        </div>
                    </div>
                    
                </div>
                <div className='flex flex-row space-x-10'>
                        <div><a href="https://www.facebook.com/teamvidyutashwa/" target="blank"><TiSocialFacebookCircular size={70} /></a></div>
                        <div><a href="https://www.instagram.com/team_vidyutashwa/" target="blank"><FaInstagram size={62} /></a></div>
                        <div><a href="https://www.linkedin.com/in/team-vidyutashwa-7285a4121/?originalSubdomain=in" target="blank"><TiSocialLinkedinCircular size={70} /></a></div>
                </div>
            </div>
    </Element>
  )
}

export default Contact