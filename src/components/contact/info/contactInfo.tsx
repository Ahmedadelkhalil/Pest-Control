import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ContactInfo = () => {
  return (
    <div className="font-[Almarai] font-bold mb-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-darkBlue mb-7 md:mb-10 text-center md:text-end">
        تواصل <span className="text-lightBlue">معنا</span>
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-7">
        <div className="text-end">
          <h3 className="text-lightBlue text-xl mb-2">العنوان</h3>
          <p className="text-darkBlue text-sm xl:text-[16px]">
            المملكه العربيه السعوديه- جده
          </p>
        </div>
        <div className="text-end">
          <h3 className="text-lightBlue text-xl  mb-2">ساعات العمل</h3>
          <p className="text-darkBlue text-sm xl:text-[16px]">
            يوميا من 05:00 ص – 12:00م
          </p>
        </div>
        <div className="text-end">
          <h3 className="text-lightBlue text-xl mb-2">وسائل التواصل</h3>
          <p className="text-darkBlue text-sm xl:text-[16px]">
            <Link to={`https://wa.me/+966572260430`} target="_blank">
              <span>+</span>
              <span>هاتف: 966572260430</span>
            </Link>
          </p>
          <p className="text-darkBlue text-sm xl:text-[16px]">
            pestcontrolcompany74@gmail.com :البريد
          </p>
        </div>
        <div className="text-end">
          <h3 className="text-lightBlue text-xl mb-2">خدماتنا</h3>
          <p className="text-darkBlue text-sm xl:text-[16px]">
            تعرف اكتر علي خدماتنا من هنا{" "}
            <HashLink to="/عن-الشركه#OurServices" smooth>
              <span className="underline">خدماتنا</span>
            </HashLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
