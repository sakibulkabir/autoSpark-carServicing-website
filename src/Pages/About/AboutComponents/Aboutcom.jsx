function Aboutcom() {
  return (
    <div className="container mx-auto px-5 lg:px-20 pt-16 lg:pt-20">

      {/* Top Title Row */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
        <h2 className="text-2xl lg:text-3xl text-gray-500">About Us</h2>

        <div>
          <h1 className="text-3xl lg:text-5xl text-white font-semibold leading-snug">
            Our Commitment to Providing Premium Car <br className="hidden lg:block" />
            Detailing Services That
          </h1>

          <h1 className="text-3xl lg:text-5xl text-amber-400 font-semibold leading-snug mt-2">
            Bring Out the Best in Your Vehicle, Ensuring A <br className="hidden lg:block" />
            Showroom Shine Every Time
          </h1>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 pt-10">
        
        {/* Line */}
        <div className="border-t border-gray-500 w-24 lg:w-64"></div>

        {/* Text */}
        <p className="text-gray-500 text-base leading-relaxed">
          Donec ullamcorper fermentum velit at pulvinar. Vivamus ac convallis sapien.
          In lacinia nulla non turpis suscipit, eu luctus mauris ultrices. Ut rhoncus
          purus ac mauris varius maximus. Ut congue sit amet urna quis posuere. Proin
          sed malesuada velit. In fermentum, arcu eget mollis tincidunt, est nisl auctor
          leo, eget fermentum libero diam in justo.
        </p>
      </div>

    </div>
  );
}

export default Aboutcom;
