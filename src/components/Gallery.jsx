import React from 'react'

function Gallery() {

  const images = [
    {
      profile : require('../assets/gallery/baja.jpg')

    },
    {
      profile : require('../assets/gallery/baja1.jpg')

    },
    {
      profile : require('../assets/gallery/baja2.jpg')

    },
    {
      profile : require('../assets/gallery/baja3.jpg')

    },
    {
      profile : require('../assets/gallery/baja4.jpg')

    },
    {
      profile : require('../assets/gallery/baja5.jpg')

    },
    {
      profile : require('../assets/gallery/baja6.jpg')

    },
    {
      profile : require('../assets/gallery/baja7.jpg')

    },
    {
      profile : require('../assets/gallery/baja8.jpg')

    },
    {
      profile : require('../assets/gallery/baja9.jpg')

    },
    {
      profile : require('../assets/gallery/baja10.jpg')

    },
    {
      profile : require('../assets/gallery/baja11.jpg')

    },
    {
      profile : require('../assets/gallery/baja12.jpg')

    },
    {
      profile : require('../assets/gallery/baja13.jpg')

    },
    {
      profile : require('../assets/gallery/baja14.jpg')

    },
    {
      profile : require('../assets/gallery/baja15.jpg')

    },
    {
      profile : require('../assets/gallery/baja16.jpg')

    },
    {
      profile : require('../assets/gallery/baja17.jpg')

    },
    {
      profile : require('../assets/gallery/baja18.png')

    },
    
    {
      profile : require('../assets/gallery/baja19.png')

    },
    {
      profile : require('../assets/gallery/baja20.jpg')

    },
    {
      profile : require('../assets/gallery/baja21.jpg')

    },
    {
      profile : require('../assets/gallery/baja22.jpg')

    },
    {
      profile : require('../assets/gallery/baja23.jpg')

    },
    {
      profile : require('../assets/gallery/baja24.jpg')

    },
    {
      profile : require('../assets/gallery/baja25.jpg')

    },
    {
      profile : require('../assets/gallery/baja26.jpg')

    },
    {
      profile : require('../assets/gallery/baja27.jpg')

    },
    {
      profile : require('../assets/gallery/baja28.jpg')

    }

    

  ]

  return (
    <div className='relative flex flex-col justify-center items-center  bg-black/40 text-slate-200 top-0'>
       <div className='p-8 lg:w-1/2 flex justify-center items-center h-screen  flex-col space-y-8'>
           <h1 className='text-5xl lg:text-8xl border-b-4 border-red-700 p-4'>Gallery</h1>
           <p className='p-3 text-xl lg:text-2xl'>A look of our e-Baja Journey </p>
        </div>
        <div className='flex  bg-black w-screen justify-center '>
          <h1 className='mt-20 text-5xl p-4 border-b-4 border-red-700'>Highlights</h1>
          
        </div>
        <div className='flex flex-col bg-black w-screen justify-center'>
          {images.map((image,index) => {

            return(

                <div key={index} className='w-screen mt-20 p-5 flex justify-center'>
                  <img src={image.profile} alt="" />
             
                </div>
            );

           })}

        </div>
    </div>
  )
}

export default Gallery