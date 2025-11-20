function Servicecom() {
  return (
    <div className="container mx-auto px-5 lg:px-20 py-10">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start lg:items-end">
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-xl text-gray-500">
            Still Have Questions? Find Your Answers
          </p>
          <p className="text-lg md:text-xl text-gray-500">
            Here! or{" "}
            <span className="text-lg md:text-xl text-yellow-400 font-semibold">
              Contact Us
            </span>
          </p>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
            Everything You Need to Know About <br /> Our{" "}
            <span className="text-yellow-400">Detailing Services</span>
          </h1>
        </div>
      </div>

      {/* Questions Section */}
      <div className="pt-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Categories */}
        <div className="flex flex-col gap-3">
          <p className="text-xl md:text-2xl text-yellow-400 font-semibold">
            General Question
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold hover:text-yellow-400 cursor-pointer">
            Service & Process Question
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold hover:text-yellow-400 cursor-pointer">
            Pricing & Payment Question
          </p>
        </div>

        {/* Questions List */}
        <div className="flex flex-col gap-3">
          <p className="text-gray-500 text-lg md:text-xl font-semibold border-b border-gray-500 pb-3">
            What is car detailing?
          </p>
          <p className="text-gray-500 text-lg md:text-xl font-semibold border-b border-gray-500 pb-3">
            How often should I get my car detailed?
          </p>
          <p className="text-gray-500 text-lg md:text-xl font-semibold border-b border-gray-500 pb-3">
            How long does a car detailing service take?
          </p>
          <p className="text-gray-500 text-lg md:text-xl font-semibold border-b border-gray-500 pb-3">
            Do you use eco-friendly products?
          </p>
          <p className="text-gray-500 text-lg md:text-xl font-semibold border-b border-gray-500 pb-3">
            Do I need to make an appointment for a detailing service?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servicecom;
