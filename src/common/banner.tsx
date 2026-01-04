type BannerData = {
  img: string;
  mainTitle: string;
  subTitle: string;
};

const Banner = ({ img, mainTitle, subTitle }: BannerData) => {
  return (
    <div
      className="relative bg-banner-img h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] 
    after:bg-[#232723a9] after:absolute after:top-0 after:left-0 after:w-full after:h-full
    flex flex-col justify-center items-center z-[-2]
    "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[white] mb-5 tracking-wide">
          {mainTitle}
        </h1>
        <p className="text-[#fff] text-sm lg:text-lg font-bold tracking-wider">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Banner;
