import { Link } from "react-router-dom";
// Images
import Banner from "../../common/banner";
import bannerImg from "../../images/whoUs.png";
import secImg from "../../images/whous/sec_1.png";
// Services Data
import { servicesData } from "../../data/servicesData";
// Card Shape Pattern
import Card from "../../common/card";
// MetaData
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>شركه تعقيم | عن الشركه</title>
      </Helmet>
      <Banner
        img={bannerImg}
        mainTitle="من نحن"
        subTitle="الشركه الاولي في خدمات تنظيف ومكافحه الحشرات"
      />
      <div className="bg-sec-img">
        <div className="container mx-auto">
          <div className="grid geid-cols-1 md:grid-cols-2 gap-3 items-center py-10 px-5">
            <img
              src={secImg}
              alt="who us img"
              className="lg:w-[500px] mx-auto rounded-md"
            />
            <div className="p-5">
              <h1
                className="text-3xl lg:text-4xl xl:text-5xl text-darkBlue font-[Almarai] font-bold
          text-end
          "
              >
                ما هي <span className="text-lightBlue">شركتنا</span>
              </h1>
              <p className="font-bold font-[Almarai] text-sm mt-7 text-end">
                شركتنا من أقوى شركات النظافة التى تقدم جميع خدمات التنظيف مثل
                تنظيف الشركات و الشقق و الفيلات و تقوم أيضا بتنظيف المطاعم و شفط
                الأتربة من السجاد والموكيت .عملية التنظيف فى العادة هى عملية
                مزعجة لأصحابها ولكن بالنسبة لنا هي الحل الأمثل لفريقنا القادر
                على تحويل التنظيف إلى عملية ممتعة تتم بسرعة وإتقان لاننا نعتمد
                علي اقوي فريق مدرب علي كافه الاجهزه الحديثه
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-7">
        <div className="container mx-auto">
          <div className="py-10 px-5">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-darkBlue font-[Almarai] font-bold text-center mb-10">
              جميع{" "}
              <span className="text-lightBlue" id="OurServices">
                خدماتنا
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {servicesData.map((ele, indx) => {
                return (
                  <>
                    <Link to={ele.link} key={indx}>
                      <Card imgSrc={`${ele.img}`} title={ele.title} />
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
