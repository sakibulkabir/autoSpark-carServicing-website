import Blogcard1 from "./Blogcard1";
import Blogcard2 from "./Blogcard2";
import Blogcard3 from "./Blogcard3";

function Blogcom() {
  return (
    <div className="container mx-auto px-5 lg:px-20 py-10">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xl text-gray-500">Blogs & article</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          Expert Tips & Insights for Car
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          Enthusiasts
        </h1>
      </div>

      {/* Responsive Cards Section */}
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-10 
          pt-20
        "
      >
        <Blogcard1 />
        <Blogcard2 />
        <Blogcard3 />
      </div>
    </div>
  );
}

export default Blogcom;
