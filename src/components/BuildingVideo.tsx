import React from 'react'
import video from "/assets/Compressed_video.mp4";


import { useState } from "react";
import { PlayIcon } from 'lucide-react';

export default function BuildingVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full  rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
   
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <video src={video} autoPlay className="rounded-lg"></video>
        </div>
  

      {/* Play Button */}
      <button
        onClick={() => setShowVideo(true)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-60 h-12 bg-white/30 backdrop-blur-md rounded-full px-4 flex items-center justify-center space-x-2 text-white hover:scale-110 transition ">
         
          <PlayIcon />
          <h2 className='text-nowrap'>View Full Presentation</h2>
        </div>
      </button>

      {/* Fullscreen Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl px-6">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              &times;
            </button>

            <video
              src={video}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
