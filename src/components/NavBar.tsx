import { Heart, Search } from 'lucide-react'
// import React from 'react'

const NavBar = () => {
  return (
   <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="flex justify-start space-x-8 items-center h-16">
            <div>
            
                <img src="https://images.ctfassets.net/zoq5l15g49wj/7DGi2D8VGvN2aV02ir8v27/aa9560b0cb32e7f690c913eebce06fb9/damac-white.svg?fm=webp&w=114&h=30&fit=pad&q=60" alt="" />
             
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm *:text-white">
              <a href="#" className="hover:underline duration-1000">Brows Properties</a>
              <a href="#" className="hover:underline duration-1000">About DRAMAC</a>
              <a href="#" className="hover:underline duration-1000">Media Center</a>
              <a href="#" className="hover:underline duration-1000">Blog</a>
            
            </div>
          </div>
          <div className="flex items-center text-white space-x-8">
            <button>Search</button>
            <Search/>
            <Heart/>
          </div>
        </div>
      </nav>
  )
}

export default NavBar