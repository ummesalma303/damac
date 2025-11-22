// import React from 'react'

const Info = () => {
  return (
    <section className="bg-[#007175] text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-80">Master community</p>
            <h2 className="text-xl lg:text-2xl font-bold mt-2">49 MILLION SQ.FT</h2>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-80">Starting price</p>
            <h3 className="text-xl lg:text-2xl font-bold mt-2">AED 1,492,000</h3>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-80">Payment plan</p>
            <p className="text-xl lg:text-2xl font-bold mt-2">1%*</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-80">Project Handover</p>
            <p className="text-xl lg:text-2xl font-bold mt-2">Q2, 2027</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h1 className="text-xl lg:text-3xl font-bold leading-tight">
            LAGOON VIEWS: ELEVATED<br />
            LIVING INSPIRED BY THE<br />
            MEDITERRANEAN
          </h1>

          <p className="text-base leading-relaxed opacity-90">
            Nestled away in DAMAC Lagoons, with its top-tier amenities, is Lagoon Views, 
            a collection of apartments that bring you elevated luxury inspired by the Mediterranean. 
            Overlooking the lagoon and surrounded by lush greenery and stunning water features, 
            find a lifestyle wrapped in serenity, with sleek, white curved exteriors and sweeping 
            balconies that offer sublime views and a seamless indoor-outdoor living experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="border border-white rounded-full px-6 text-white font-medium hover:bg-white hover:text-teal-600 transition">
              GET IN TOUCH
            </button>
            <button className="border border-white rounded-full p-4 hover:bg-white hover:text-teal-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.11 11.11 0 003.44.56 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1H7.5a1 1 0 011 1 11.11 11.11 0 00.56 3.44 1 1 0 01-.22 1.11l-2.2 2.2z"/>
              </svg>
            </button>
            <button className="border border-white rounded-full p-4 hover:bg-white hover:text-teal-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info