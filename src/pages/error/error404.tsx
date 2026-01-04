import { Link } from "react-router-dom";
import errorImg from "../../images/error.svg";
// MetaData
import { Helmet } from "react-helmet";

const Error404 = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-[#a3c6d3] font-[Almarai] font-bold text-[white] md:py-[50px] lg:py-[60px] xl:py-[70px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>شركه تعقيم | خطا 404</title>
      </Helmet>
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5">
          عفوا ... خطا 404
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-3">
          عذرا ولكن الصفحه التي تبحث عنها غير موجوده
        </p>
        <div className="flex items-center justify-center text-sm sm:text-lg md:text-xl">
          <Link to="/">
            <button className="bg-darkBlue p-3 rounded-md hover:bg-[#fff] hover:text-darkBlue transition border border-[white] hover:border-darkBlue">
              الصفحه الرئيسيه
            </button>
          </Link>
          <p className="ml-3">يمكنك الذهاب الي</p>
        </div>
      </div>
      <img
        src={errorImg}
        alt=""
        className="w-[280px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
      />
    </div>
  );
};

export default Error404;
