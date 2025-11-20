import AnotherChoose from "./AnotherChoose";

function Choosecom() {
  return (
    <div
      className="
        bg-[#171717] 
        rounded-3xl 
        container 
        mx-auto 
        px-6 
        md:px-12 
        lg:px-40 
        py-14 
        flex 
        flex-col 
        lg:flex-row 
        gap-12 
        lg:gap-40
      "
    >
      {/* Left Side */}
      <div className="flex flex-col justify-between text-center lg:text-left">
        <p className="text-gray-600 font-bold uppercase tracking-wide">
          why choose us ?
        </p>

        <div className="mt-5 lg:mt-0">
          <h1 className="text-4xl md:text-5xl text-yellow-400 font-bold pb-3">
            90%
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Many have felt the pleasure of our service <br className="hidden md:block" />
            and many have entrusted their vehicles to us
          </p>
        </div>
      </div>

      {/* Right Side (AnotherChoose Component) */}
      <div className="flex-1">
        <AnotherChoose />
      </div>
    </div>
  );
}

export default Choosecom;
