function Reviewvideo() {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-80 md:h-96 lg:h-[450px] object-cover"
        src="/videos/Audi A1 Interior DEEP CLEAN - Auto Detailing.mp4"
        type="video/mp4"
      ></video>

      {/* Overlay */}
      <div className="absolute w-full h-80 md:h-96 lg:h-[450px] bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-80 md:h-96 lg:h-[450px] px-4">
        <p className="text-lg md:text-xl text-gray-400 mb-4">Customer Reviews</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Customer <span className="text-yellow-400">Experiences</span> That
        </h2>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
          Speak for Themselves
        </h2>
      </div>
    </div>
  );
}

export default Reviewvideo;
