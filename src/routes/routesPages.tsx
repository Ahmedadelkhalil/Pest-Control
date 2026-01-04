import { useEffect } from "react";
// Import Layout
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
// Import Pages
import Home from "../pages/home/home";
import Service1 from "../pages/services/service_1";
import Service2 from "../pages/services/service_2";
import Service3 from "../pages/services/service_3";
import Service4 from "../pages/services/service_4";
import Service5 from "../pages/services/service_5";
import Service6 from "../pages/services/service_6";
import Service7 from "../pages/services/service_7";
import Service8 from "../pages/services/service_8";
import Service9 from "../pages/services/service_9";
import Service10 from "../pages/services/service_10";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import CustomersOpinions from "../pages/customers Opinions/customersOpinions";
import Error404 from "../pages/error/error404";

// Import React Router Dom Components
import { Routes, Route, useLocation } from "react-router-dom";

const RoutesPages = () => {
  const locatin = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [locatin.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/تنظيف-السجاد-والموكيت" element={<Service1 />} />
        <Route path="/تنظيف-الاثاث" element={<Service2 />} />
        <Route path="/تنظيف-الوجهات" element={<Service3 />} />
        <Route path="/تنظيف-الشقق-والفيلات" element={<Service4 />} />
        <Route path="/تنظيف-الشركات" element={<Service5 />} />
        <Route path="/جلي-وتلميع-الرخام" element={<Service6 />} />
        <Route path="/تنظيف-هود-المطاعم" element={<Service7 />} />
        <Route path="/تعقيم" element={<Service8 />} />
        <Route path="/مكافحه-الحشرات" element={<Service9 />} />
        <Route path="/تنظيف-ما-بعد-التشطيب" element={<Service10 />} />
        <Route path="/عن-الشركه" element={<About />} />
        <Route path="/اتصل-بنا" element={<Contact />} />
        <Route path="/آراء-العملاء" element={<CustomersOpinions />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesPages;
