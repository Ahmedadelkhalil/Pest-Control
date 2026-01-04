import { Link } from "react-router-dom";
import banner from "../../images/banners/banner-2-bg.jpg";

const Sec_1 = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <img src={banner} alt="home banner" className="absolute h-full w-full" />
      <span className="overlay absolute w-full h-full top-0 left-0 bg-[#000000b7]"></span>
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
      text-[#fff] flex flex-col items-center w-full
      "
      >
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-[18px] md:text-2xl lg:text-3xl">
            شركه تعقيم لمكافحه الحشرات
          </h1>
          <h3 className="text-sm md:text-lg lg:text-xl">
            للتنظيف والتعقيم والمكافحه
          </h3>
        </div>
        <button
          className=" bg-darkBlue px-3 py-2 md:px-5 md:py-3 rounded-md text-sm
        hover:bg-lightBlue transition-all
        "
        >
          <Link to="/عن-الشركه">عن الشركه</Link>
        </button>
      </div>
    </div>
  );
};

export default Sec_1;
