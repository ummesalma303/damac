// import React from 'react'
// import NavBar from './NavBar'

const Banner = () => {
  return (
     <section className="relative h-screen ">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white">
      
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop" 
            alt="Lagoon Building" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wider mb-4">
              DAMAC Lagoon
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">
              LUXURY WATERFRONT LIVING
            </p>
          </div>
        </div>
      </section>
  )
}

export default Banner