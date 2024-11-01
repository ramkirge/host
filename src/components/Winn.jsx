import React,{useState} from 'react'


const achievements = [
  { year: "2016", title: "AIR 1", description: "Endurance Test", image: require('../assets/gallery/baja13.jpg') },
  { year: "2017", title: "AIR 2", description: "In Cost and Durability Award", image: require('../assets/gallery/baja6.jpg') },
  { year: "2018", title: "AIR 1", description: "In Cost and Sales",image: require('../assets/gallery/baja5.jpg') },
  { year: "2020", title: "AIR 1", description: "ATVC",image: require('../assets/gallery/baja16.jpg') }
  // Add more achievements as needed
];


function Winn() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? achievements.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % achievements.length);
  };

  return (

    <div className="flex flex-col items-center w-screen h-screen abs   bg-gray-950 shadow-lg">
      {/* Card with Background Image */}
      <div
        className="w-full h-full bg-center bg-center bg-no-repeat bg-[length:700px_600px] lg:bg-[length:1600px_850px] rounded-lg shadow-md p-6 flex flex-col justify-center text-center relative"
        style={{
          backgroundImage: `url(${achievements[currentIndex].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-40 rounded-lg"></div> {/* Overlay */}
        <div className="relative flex items-center  justify-end  flex-col  z-50 text-white">
          <h2 className="text-2xl font-bold">{achievements[currentIndex].year}</h2>
          <h3 className="text-lg font-semibold mt-2">{achievements[currentIndex].title}</h3>
          <p className="mt-4">{achievements[currentIndex].description}</p>
        </div>
        <div className="flex items-center justify-between z-50 w-full mt-4">
        <button
          onClick={handlePrev}
          className="text-4xl text-white hover:text-blue-700 focus:outline-none"
        >
          &lt;
        </button>
                <button
          onClick={handleNext}
          className="text-4xl text-white hover:text-blue-700 focus:outline-none"
        >
          &gt;
        </button>
        
      </div>
      
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center w-full ">
      
        <div className="flex space-x-2 relative bottom-0">
          {achievements.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-700' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
        
      </div>
    </div>

   
  )
}

export default Winn