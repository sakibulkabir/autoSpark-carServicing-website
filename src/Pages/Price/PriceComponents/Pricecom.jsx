import Pricecard from "./Pricecard";

function Pricecom() {
  return (
    <div className="container mx-auto px-5 lg:px-20 pt-20 lg:pt-40">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-xl md:text-2xl">Pricing plan</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
            Choose the Perfect Detailing <br /> Package for Your Car
          </h1>
        </div>

        <p className="text-gray-500 text-base md:text-lg lg:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut
          elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Price Cards */}
      <div className="pt-10">
        <Pricecard />
      </div>
    </div>
  );
}

export default Pricecom;
