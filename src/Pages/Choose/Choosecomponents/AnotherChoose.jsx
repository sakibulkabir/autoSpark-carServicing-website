import Choosecard from "./Choosecard"

function AnotherChoose() {
  return (
    <div className="container mx-auto px-5 lg:px-20 py-12">
      
      {/* Heading */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl text-white font-bold leading-snug">
          Unmatched Quality, Precision, and <br className="hidden lg:block" />
          <span className="text-yellow-400">
            Care for Your Car
          </span>
        </h1>
      </div>

      {/* Sub Heading */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 py-8">
        <h3 className="text-2xl text-white font-bold text-center lg:text-left">
          Excellence in Every Detail
        </h3>

        <p className="text-lg lg:text-xl text-gray-500 leading-relaxed text-center lg:text-left">
          Curabitur vel massa ut augue posuere lacinia. Maecenas pellentesque nisi quis 
          dolor aliquam dignissim quis tincidunt velit. Vestibulum in pulvinar nisl, 
          vel suscipit erat. Vivamus accumsan est augue, vel tristique erat facilisis at.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <Choosecard 
          number={"01"}
          tittle={"Professional Expertise"}
          description={
            "Our skilled detailers use top-quality products and techniques to ensure the best results for your vehicle."
          }
        />

        <Choosecard 
          number={"02"}
          tittle={"Comprehensive Services"}
          description={
            "From exterior washes to interior deep cleaning, we offer a wide range of services to meet all your car care needs."
          }
        />

        <Choosecard 
          number={"03"}
          tittle={"Customer Satisfaction"}
          description={
            "We prioritize your satisfaction and strive to exceed your expectations with every service we provide."
          }
        />

        <Choosecard 
          number={"04"}
          tittle={"Customer Satisfaction"}
          description={
            "We prioritize your satisfaction and strive to exceed your expectations with every service we provide."
          }
        />
      </div>

    </div>
  );
}

export default AnotherChoose;
