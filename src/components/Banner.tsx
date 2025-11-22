import video from "/assets/Compressed_video.mp4";

const Banner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        src={video}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-wider mb-4">
            DAMAC Lagoon
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            LUXURY WATERFRONT LIVING
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
