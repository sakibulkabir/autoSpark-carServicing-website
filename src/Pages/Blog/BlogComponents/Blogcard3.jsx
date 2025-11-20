function Blogcard3() {
  return (
    <div className="w-full">
      <div className="bg-[#161616] 
          w-full h-auto 
          lg:w-[400px] lg:h-[600px] 
          rounded-xl">

        <img
          className="w-full h-[250px] lg:h-[350px] object-cover rounded-xl 
          hover:scale-105 duration-300 cursor-pointer"
          src="../../../../public/images/car-detailing-and-polishing-concept-2024-12-13-06-47-43-utc.jpg"
          alt=""
        />

        <div className="px-4 py-3">
          <h2 className="text-lg md:text-xl text-white font-semibold hover:text-yellow-400 cursor-pointer">
            The Ultimate Guide to Engine <br /> Cleaning
          </h2>

          <div className="flex gap-5 py-3 md:py-5">
            <p className="text-white font-semibold">Widagdo</p>
            <p className="text-white font-semibold">Clining</p>
          </div>

          <p className="text-gray-300 font-medium text-sm md:text-base">
            Keeping your car in top shape requires more <br /> 
            than just occasional washing. Regular car <br /> 
            detailing…
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogcard3;
