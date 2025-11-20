function Reviewcom() {
  const reviews = [
    {
      name: "Tays Kardinal",
      role: "Auto Dialer",
      img: "/images/6Team16.jpg",
      review:
        "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
    },
    {
      name: "Tays Kardinal",
      role: "Auto Dialer",
      img: "/images/6Team16.jpg",
      review:
        "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
    },
    {
      name: "Tays Kardinal",
      role: "Auto Dialer",
      img: "/images/6Team16.jpg",
      review:
        "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
    },
    {
      name: "Tays Kardinal",
      role: "Auto Dialer",
      img: "/images/6Team16.jpg",
      review:
        "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
    },
    {
      name: "Tays Kardinal",
      role: "Auto Dialer",
      img: "/images/6Team16.jpg",
      review:
        "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
    },
    {
      name: "Tays Kardinal",
      role: "Auto Dialer",
      img: "/images/6Team16.jpg",
      review:
        "Absolutely incredible service! My car looks brand new inside and out. The attention to detail was phenomenal. I couldn’t be happier with the results. Highly recommend!",
    },
  ];

  return (
    <div className="container mx-auto px-5 lg:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev, index) => (
          <div
            key={index}
            className="bg-[#171717] p-5 rounded-xl shadow-md"
          >
            <p className="text-white font-semibold pb-3 leading-relaxed">
              {rev.review}
            </p>
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={rev.img}
                alt={rev.name}
              />
              <div>
                <h3 className="text-xl text-white font-bold">{rev.name}</h3>
                <p className="text-gray-500">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviewcom;
