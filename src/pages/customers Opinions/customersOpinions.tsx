import Banner from "../../common/banner";
import bannerImg from "../../images/banners/opinionsBanner.png";
// Testimonials
import Testimonials from "../../components/opinions/testimonials";
// MetaData
import { Helmet } from "react-helmet";

const CustomersOpinions = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>شركه تعقيم | آراء العملاء</title>
      </Helmet>
      <Banner
        img={bannerImg}
        mainTitle="آراء العملاء و الشهادات"
        subTitle="تعرف علي اراء عملائنا في خدماتنا"
      />
      <div className="py-[70px] md:py-[100px] font-[Almarai] font-bold bg-sec-img">
        <Testimonials />
      </div>
    </>
  );
};

export default CustomersOpinions;
