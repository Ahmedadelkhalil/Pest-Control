import Banner from "../../common/banner";
import bannerImg from "../../images/banners/contact-banner.jpg";
// Map
import ContactMap from "../../components/contact/map/contactMap";
// Form
import Form from "../../components/contact/form/form";
// Info
import ContactInfo from "../../components/contact/info/contactInfo";
// MetaData
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>شركه تعقيم | اتصل بنا</title>
      </Helmet>
      <Banner
        img={bannerImg}
        mainTitle="تواصل معنا"
        subTitle="كن علي اتصال بنا من خلال وسائل التواصل المختلفه"
      />
      <div className="py-10 bg-secBg">
        <ContactMap />
      </div>
      <div className="bg-sec-img">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 p-10">
            <Form />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
