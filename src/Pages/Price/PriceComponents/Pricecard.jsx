function Pricecard() {
  const plans = [
    {
      name: "Basic",
      time: "1.5 – 2 Hours",
      price: "$299,99",
      description:
        "Designed for regular maintenance, keeping your car clean and fresh.",
      features: [
        "Exterior hand wash & wax",
        "Interior vacuum & dusting",
        "Windows cleaning (inside & out)",
        "Tire cleaning & shine",
        "Light interior wipe-down",
      ],
      perfectFor: "Regular maintenance and keeping your car fresh.",
    },
    {
      name: "Standard",
      time: "2 – 3 Hours",
      price: "$399,99",
      description:
        "Ideal for a detailed clean, covering all main areas of your vehicle.",
      features: [
        "Exterior hand wash & wax",
        "Interior vacuum & dusting",
        "Windows cleaning (inside & out)",
        "Tire cleaning & shine",
        "Dashboard & console cleaning",
      ],
      perfectFor: "Regular and detailed car maintenance.",
    },
    {
      name: "Premium",
      time: "3 – 4 Hours",
      price: "$499,99",
      description:
        "Complete detailing service for showroom-quality results.",
      features: [
        "Exterior hand wash & wax",
        "Interior vacuum & dusting",
        "Windows cleaning (inside & out)",
        "Tire cleaning & shine",
        "Full interior wipe-down",
        "Engine bay cleaning",
      ],
      perfectFor: "Full car detailing and premium care.",
    },
  ];

  return (
    <div className="container mx-auto px-5 lg:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#161616] rounded-2xl p-6 flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4">
                <h2 className="text-white text-2xl font-bold">{plan.name}</h2>
                <p className="bg-[#1B1B1B] text-[#463232] p-1 rounded w-fit">
                  Estimated Time: {plan.time}
                </p>
              </div>

              <h2 className="text-xl text-white font-bold">Start with</h2>
              <h1 className="text-4xl md:text-5xl text-yellow-400 font-bold py-3">
                {plan.price}
              </h1>
              <p className="text-[#9CAAAA] pb-6">{plan.description}</p>

              <button className="bg-yellow-400 w-full py-3 rounded-full font-semibold hover:bg-[#161616] hover:text-white hover:border hover:border-white transition-all duration-300 mb-5">
                Choose This Plan
              </button>

              <div className="bg-[#1B1B1B] p-5 rounded-3xl mb-3">
                <h3 className="text-xl text-white font-bold pb-3">Feature :</h3>
                {plan.features.map((feat, i) => (
                  <p key={i} className="text-gray-500">
                    {feat}
                  </p>
                ))}
              </div>

              <p className="text-gray-500 pt-3">
                <span className="font-bold">Perfect for:</span> {plan.perfectFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricecard;
