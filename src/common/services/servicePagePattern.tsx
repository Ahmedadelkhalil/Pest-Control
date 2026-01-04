import { useInView } from "react-intersection-observer";
import { ServicePageDataType } from "../../types/services";
import Banner from "../banner";
import bannerImg from "../../images/banners/Service_banner.png";
// MetaData
import { Helmet } from "react-helmet";

const ServicePagePattern = (servicePageData: ServicePageDataType) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{servicePageData["servicePageData"].pageTitle.title}</title>
      </Helmet>
      <Banner
        img={bannerImg}
        mainTitle={servicePageData["servicePageData"].banner.mainTitle}
        subTitle={servicePageData["servicePageData"].banner.subTitle}
      />
      <div className="py-10 bg-sec-img">
        <div className="container mx-auto">
          <div className="mx-5">
            <h1 className="text-center mb-10 font-[Almarai] text-xl md:text-2xl lg:text-3xl text-darkBlue font-bold border-2 w-fit mx-auto py-4 px-5 tracking-wide">
              {servicePageData["servicePageData"].sec_1.mainTitle}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 items-center">
            <div className="flex flex-col">
              {servicePageData["servicePageData"].sec_1.percentages.map(
                (ele, indx) => {
                  return (
                    <div
                      className="flex flex-col items-end mx-5 mb-7"
                      key={indx}
                    >
                      <span className="font-[Almarai] text-darkBlue font-bold">
                        {ele.title}
                      </span>
                      <div
                        className={`
                        bg-lightBlue w-full text-center mt-3 rounded-xl
                        relative after:absolute ${
                          inView ? `after:w-full` : `after:w-0`
                        } after:h-full after:bg-darkBlue
                        after:top-0 after:left-0 after:rounded-xl
                        after:transition-all after:duration-[3000ms] after:ease-in-out
                        `}
                        ref={ref}
                      >
                        <span className="text-[#fff] font-bold z-30 relative">
                          {ele.percentage}
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <img
              src={servicePageData["servicePageData"].sec_1.img}
              alt="test img"
              className="rounded-lg lg:w-[80%] mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="parent py-10 mx-5">
        <div className="container mx-auto">
          <div className="mx-5">
            <h1 className="text-center mb-10 font-[Almarai] text-xl md:text-2xl lg:text-3xl text-darkBlue font-bold border-2 w-fit mx-auto py-4 px-5 tracking-wide">
              {servicePageData["servicePageData"].sec_2.mainTitle}
            </h1>
          </div>
          <div className="font-[Almarai] font-bold text-right text-darkBlue tracking-wide flex flex-col items-end">
            {servicePageData["servicePageData"].sec_2.paragraphs.map(
              (ele, indx) => {
                return (
                  <p
                    className="mb-10 text-sm sm:text-[15px] md:text-[17px] md:w-[700px] lg:md:w-[900px] xl:w-[1000px]"
                    key={indx}
                  >
                    <span className="text-lightBlue font-bold">{`${ele.highlightTitle}: `}</span>
                    {ele.desc}
                  </p>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePagePattern;
