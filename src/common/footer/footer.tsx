import { Link, NavLink } from "react-router-dom";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/logo.png";

const Footer = () => {
  const socialIcons = [
    {
      icon: faFacebook,
      color: "#1877F2",
      path: "#",
    },
    {
      icon: faInstagram,
      color: "#E1306C",
      path: "#",
    },
    {
      icon: faWhatsapp,
      color: "#25D366",
      path: "https://wa.me/+966572260430",
    },
  ];
  const links = [
    {
      pageName: "تعقيم الشقق و الفيلات",
      pagelink: "/تنظيف-الشقق-والفيلات",
    },
    {
      pageName: "مكافحه الحشرات",
      pagelink: "/مكافحه-الحشرات",
    },
    {
      pageName: "تنظيف السجاد والموكيت",
      pagelink: "/تنظيف-السجاد-والموكيت",
    },
    {
      pageName: "تعقيم المؤسسات",
      pagelink: "/تعقيم",
    },
  ];
  const currentDate = new Date().getFullYear();
  return (
    <footer className="bg-secBg">
      <div className="container mx-auto py-10">
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <h1 className="text-2xl font-[Almarai] text-darkBlue font-bold">
            تابعنا علي
          </h1>
          <div className="mt-5">
            <ul className="flex">
              {socialIcons.map((ele, indx) => {
                return (
                  <NavLink to={`${ele.path}`} target="_blank" key={indx}>
                    <li className="mx-3">
                      <FontAwesomeIcon
                        icon={ele.icon}
                        size={`2xl`}
                        color={`${ele.color}`}
                      />
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between lg:justify-center items-center md:items-start px-7">
          <div className="rounded-md w-[250px] md:w-[200px] lg:w-[250px] h-[250px] md:h-[200px] lg:h-[250px] mb-[50px] md:mb-0">
            <NavLink to={`/`}>
              <img
                src={logo}
                alt="logo"
                className="w-[100%] h-[100%] border border-darkBlue"
              />
            </NavLink>
          </div>
          <div className="md:mx-[50px] lg:mx-[100px] mb-[50px] md:mb-0">
            <hr className="block md:hidden mb-[25px] text-darkBlue w-full" />
            <h3 className="text-2xl text-center md:text-end font-[Almarai] text-lightBlue font-bold mb-3">
              خدماتنا
            </h3>
            <ul className="text-center md:text-right">
              {links.map((ele, indx) => {
                return (
                  <NavLink to={`${ele.pagelink}`} key={indx}>
                    <li className="cursor-pointer md:text-sm lg:text-[16px] font-[Almarai] text-darkBlue font-bold mb-1">
                      {ele.pageName}
                    </li>
                  </NavLink>
                );
              })}
            </ul>
            <hr className="block md:hidden mt-[25px] text-darkBlue w-full" />
          </div>
          <div className=" mb-[50px] md:mb-0">
            <h3 className="text-2xl text-center md:text-end font-[Almarai] text-lightBlue font-bold mb-3">
              تواصل معنا
            </h3>
            <div className="text-center md:text-end my-0">
              <span className="font-[Almarai] text-darkBlue font-bold md:text-sm lg:text-[16px]">
                <Link to={`https://wa.me/+966572260430`} target="_blank">
                  +966572260430
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-center md:items-end font-[Almarai] text-darkBlue font-bold md:text-sm lg:text-[16px]">
              <span>المملكة العربية السعودية – جده</span>
              <span>ساعات العمل من 05:00 ص – 12:00م</span>
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-center items-center">
          <p className="font-[Almarai] font-bold text-sm">
            جميع الحقوق محفوظه{" "}
            <span>
              {currentDate} &copy;{" "}
              <Link
                to={`https://github.com/Ahmedadelkhalil`}
                target="_blank"
                className="underline"
              >
                احمد عادل
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
