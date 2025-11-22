import React from 'react'
import projctLogo from '/assets/Project-Logo.webp'
// import video from "";

const Dream = () => {
  return (
    <section className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=400&fit=crop" 
          alt="Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white bg-white/30 backdrop-blur-sm z-50 p-6 rounded-lg">
            <img className='mx-auto' src={projctLogo} alt=""  />
            <h2 className="text-3xl my-4">FIND YOUR DREAM HOME TODAY</h2>
            {/* <h2 className="text-5xl font-light mb-6"></h2> */}
            <button className="bg-white text-black px-8 py-3 rounded-full text-sm hover:bg-[#CCB073] w-full">
              EXPLORE IN 3D
            </button>
          </div>
        </div>
      </section>
  )
}

export default Dream