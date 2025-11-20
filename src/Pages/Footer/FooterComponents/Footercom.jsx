function Footercom() {
  return (
    <div className="container mx-auto px-5 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo & About */}
        <div className="flex flex-col gap-5">
          <img
            className="w-40 h-20 md:w-50 md:h-40 object-contain"
            src="../../../../public/images/logo-removebg-preview.png"
            alt="logo"
          />
          <p className="text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="border border-gray-500 px-6 py-2 text-white font-bold rounded-full hover:text-yellow-400 cursor-pointer">
            Contact Us
          </button>
          <p className="text-gray-500 text-xs md:text-sm pt-5">
            © 2025 AutoSpark. All Rights Reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 pt-5 lg:pt-20">
          <h3 className="text-xl text-white border-b border-gray-500 w-40 pb-2">
            Navigation
          </h3>
          <p className="text-gray-500 hover:text-yellow-400 cursor-pointer py-1">
            Homepage
          </p>
          <p className="text-gray-500 hover:text-yellow-400 cursor-pointer py-1">
            Services
          </p>
          <p className="text-gray-500 hover:text-yellow-400 cursor-pointer py-1">
            Gallery
          </p>
          <p className="text-gray-500 hover:text-yellow-400 cursor-pointer py-1">
            FAQs
          </p>
          <p className="text-gray-500 hover:text-yellow-400 cursor-pointer py-1">
            Contact Us
          </p>
        </div>

        {/* Office & Contact */}
        <div className="flex flex-col gap-3 pt-5 lg:pt-20">
          <h3 className="text-xl text-white border-b border-gray-500 w-40 pb-2">
            Visit our office
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            Dhaka, Banani, Road-06, House-89
          </p>
          <h3 className="text-xl text-white border-b border-gray-500 w-40 pb-2">
            Contact Info
          </h3>
          <p className="text-gray-500 text-sm md:text-base">+880 1927 928212</p>
          <p className="text-gray-500 text-sm md:text-base">
            sakibulkabirrisat@gmail.com
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-5">
            <p className="text-white hover:text-yellow-400 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-white hover:text-yellow-400 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footercom;
