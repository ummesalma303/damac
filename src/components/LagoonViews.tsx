import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import img1 from "/assets/Damac_Lagoon_Views-Logo.svg";
import img2 from "/assets/DAMAC_Lagoon_Views-Gallery-00.jpg";
import img3 from "/assets/DAMAC_Lagoon_Views-Gallery-01.jpg";
import img4 from "/assets/DAMAC_Lagoon_Views-Gallery-02_1.webp";
import img5 from "/assets/DAMAC_Lagoon_Views-Gallery-03_1.webp";

const LagoonViews: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true });

  const images = [img2, img3, img4, img5];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-start">
        {/* Left Logo + Brochure */}
        <div className="flex flex-col items-start flex-shrink-0">
          <img src={img1} alt="DAMAC Lagoon Views" className="mb-4 w-44" />
          <button className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
            Brochure
          </button>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] md:w-[400px] rounded-lg overflow-hidden">
                <img src={img} alt={`View ${idx + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LagoonViews;
