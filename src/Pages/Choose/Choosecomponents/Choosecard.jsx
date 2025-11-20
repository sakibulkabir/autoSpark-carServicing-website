function Choosecard({ number, tittle, description }) {
  return (
    <div className="
      bg-transparent
      border border-gray-700 
      rounded-xl 
      p-5 lg:p-6 
      hover:border-yellow-400 
      transition-all duration-300
    ">
      
      {/* Number */}
      <p className="text-yellow-400 font-bold border-b border-gray-600 pb-3 text-lg w-20">
        {number}
      </p>

      {/* Title */}
      <h2 className="text-xl lg:text-2xl text-white font-bold py-4">
        {tittle}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Choosecard;
