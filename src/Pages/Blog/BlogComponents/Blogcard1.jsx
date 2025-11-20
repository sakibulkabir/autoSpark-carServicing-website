function Blogcard1() {
  return (
    <div className="bg-[#161616] rounded-xl overflow-hidden shadow-md 
      w-full max-w-sm lg:max-w-[420px]">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          className="w-full h-60 md:h-64 lg:h-72 object-cover rounded-xl 
          transition-all duration-300 hover:scale-105 cursor-pointer"
          src="/images/service-station-in-the-hands-of-master-a-device-fo-2024-11-29-00-13-17-utc.jpg"
          alt="blog"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        <h2 className="text-lg md:text-xl text-white font-semibold hover:text-yellow-400 cursor-pointer leading-snug">
          The Ultimate Guide to Engine Cleaning
        </h2>

        <div className="flex items-center justify-between py-3">
          <p className="text-white font-semibold">Widagdo</p>
          <p className="text-white font-semibold">Cleaning</p>
        </div>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Keeping your car in top shape requires more than just occasional washing.  
          Regular car detailing…
        </p>
      </div>
    </div>
  );
}

export default Blogcard1;
