import Button from "../../Components/sheard/Button";

function Workcom() {
  return (
    <div className="container mx-auto px-5 lg:px-40 pt-20 lg:pt-40">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        {/* Text Section */}
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-lg md:text-2xl font-semibold">
              How it works
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold pb-4 lg:pb-6">
              Obtain your car's history in <br /> just three easy steps.
            </h1>
            <Button text={"Let's Get in Touch"} />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4 pt-6 lg:pt-15">
            <p className="text-xl md:text-2xl text-white font-bold border-b border-gray-600 pb-2">
              01. Book Your Appointment
            </p>
            <p className="text-xl md:text-2xl text-white font-bold border-b border-gray-600 pb-2 p-3">
              02. We Detail Your Car
            </p>
            <p className="text-xl md:text-2xl text-white font-bold border-b border-gray-600 pb-2 p-3">
              03. Enjoy the Shine
            </p>
          </div>
        </div>

        {/* Image Section */}
        <img
          className="w-full lg:w-150 h-auto lg:h-100 rounded-3xl object-cover"
          src="../../../public/images/car-grille-and-headlight-2025-01-08-23-47-13-utc.jpg"
          alt="Car"
        />
      </div>
    </div>
  );
}

export default Workcom;
