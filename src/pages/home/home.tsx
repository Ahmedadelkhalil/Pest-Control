import Sec1 from "../../components/home/sec_1";
import Sec2 from "../../components/home/sec_2";
import Sec3 from "../../components/home/sec_3";
import Sec4 from "../../components/home/sec_4";
import Sec5 from "../../components/home/sec_5";
// MetaData
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="font-[Almarai] font-bold text-darkBlue">
      <Helmet>
        <meta charSet="utf-8" />
        <title>شركه تعقيم | الرئيسيه</title>
      </Helmet>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
    </div>
  );
};

export default Home;
