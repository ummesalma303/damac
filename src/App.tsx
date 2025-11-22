import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Info from './components/Info';
import BuildingVideo from './components/BuildingVideo';
import Footer from './components/Footer';
import Dream from './components/Dream';
import LagoonViews from './components/LagoonViews';

const LagoonLandingPage: React.FC = () => {
  return (
    <div className="w-full bg-white font-poppins">
      {/* Navigation */}
      <NavBar/>

      {/* Hero Section */}
    <Banner/>

      {/* Info Section */}
   <Info/>

      {/* Building Images */}
      <BuildingVideo/>

      {/* Find Your Dream Home */}
     <Dream/>

      {/* Lagoon views */}
    
    <LagoonViews/>
      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4">A WORLD OF AMENITIES</h2>
          <p className="text-center text-gray-600 mb-12">Experience luxury at every turn</p>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=500&fit=crop" 
              alt="Amenity 1" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=500&fit=crop" 
              alt="Amenity 2" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <p className="text-sm font-semibold">Swimming Pool</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <p className="text-sm font-semibold">Gym & Fitness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-sm font-semibold">Beach Access</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold">24/7 Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-4">CONNECTED TO DUBAI</h2>
          <p className="text-center text-gray-600 mb-12">Strategically located in the heart of Dubai</p>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600">Map Location View</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <h3 className="text-3xl font-light text-teal-600 mb-2">15 min</h3>
              <p className="text-sm text-gray-600">Dubai Marina</p>
            </div>
            <div>
              <h3 className="text-3xl font-light text-teal-600 mb-2">20 min</h3>
              <p className="text-sm text-gray-600">Downtown Dubai</p>
            </div>
            <div>
              <h3 className="text-3xl font-light text-teal-600 mb-2">25 min</h3>
              <p className="text-sm text-gray-600">Dubai International Airport</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Units */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-12">AVAILABLE UNITS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop" 
                alt="Unit 1" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-light mb-2">2 Bedroom</h3>
                <p className="text-gray-600 mb-4">Starting from AED 1.2M</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>1,200 sq ft</span>
                  <span>2 Bath</span>
                  <span>1 Parking</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop" 
                alt="Unit 2" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-light mb-2">3 Bedroom</h3>
                <p className="text-gray-600 mb-4">Starting from AED 1.8M</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>1,800 sq ft</span>
                  <span>3 Bath</span>
                  <span>2 Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            {[
              "What is the payment plan?",
              "When is the expected completion date?",
              "What are the maintenance fees?",
              "Is financing available?",
              "What are the amenities included?",
              "Are pets allowed?",
              "What is the cancellation policy?"
            ].map((q, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <button className="w-full flex justify-between items-center text-left">
                  <span className="text-lg font-light">{q}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aerial View */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&h=600&fit=crop" 
            alt="Aerial View" 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="mt-8 bg-teal-700 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-light mb-4">EXPERIENCE THE EXTRAORDINARY</h2>
            <p className="text-sm leading-relaxed">
              From crystal lagoons to white sandy beaches, DAMAC Lagoon brings the world's most iconic island destinations to Dubai. Explore Mediterranean vibes, tropical paradises, and endless blue waters.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">GET IN TOUCH</h2>
              <p className="text-gray-600 mb-8">
                Our team of experts is ready to help you find your dream home at DAMAC Lagoon.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop" 
                alt="Contact Person" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Message" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
                  ></textarea>
                </div>
                <button className="w-full bg-teal-600 text-white py-3 rounded font-semibold hover:bg-teal-700">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer></Footer>
    </div>
  );
};

export default LagoonLandingPage;
