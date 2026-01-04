import { Link } from "react-router-dom";
// Nav Links [ Large & Small ] Screen Sizes
import LargeScNav from "./largeScNav";
import SmallScNav from "./smallScNav";

const Header = () => {
  return (
    <header className="container mx-auto my-[30px]">
      <div className="font-[Almarai] flex flex-col justify-center items-center">
        <Link to="/" className="flex flex-col justify-center items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-darkBlue font-bold">
            شركه تعقيم لمكافحه الحشرات بجده
          </h1>
          <h5 className="text-md sm:text-lg md:text-xl mt-1 text-lightBlue font-bold">
            للتنظيف والتعقيم والمكافحه
          </h5>
        </Link>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-1 font-bold text-darkBlue">
          <Link to={`https://wa.me/+966572260430`} target="_blank">
            +966572260430
          </Link>
        </h2>
      </div>
      {/* ----------------- Small Screen Nav --------------------- */}
      <SmallScNav />
      {/* ------------------ Large Screen Nav -------------------- */}
      <LargeScNav />
    </header>
  );
};

export default Header;
