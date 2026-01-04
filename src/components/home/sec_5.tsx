import img from "../../images/our_company.png";
import { Link } from "react-router-dom";

const Sec_5 = () => {
  return (
    <div className="my-7">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 p-7">
        <img
          src={img}
          alt="our company section img"
          className="w-[90%] lg:w-[70%] m-auto rounded-md"
        />
        <div className="text-end flex flex-col justify-center mt-7 md:mt-0">
          <h1 className="text-3xl mb-5">
            ما هي <span className="text-lightBlue">شركتنا</span>
          </h1>
          <p className="text-sm">
            شركتنا من أقوى شركات النظافة التى تقدم جميع خدمات التنظيف مثل تنظيف
            الشركات و الشقق و الفيلات و تقوم أيضا بتنظيف المطاعم و شفط الأتربة
            من السجاد والموكيت عملية التنظيف فى العادة هى عملية مزعجة لأصحابها
            ولكن بالنسبة لنا هي الحل الأمثل لفريقنا القادر على تحويل التنظيف إلى
            عملية ممتعة تتم بسرعة وإتقان لاننا نعتمد علي اقوي فريق مدرب علي
            اعمال نظافه الوجهات والنظافه الداخليه ونظافه المنازل
          </p>
          <div className="text-end mt-5">
            <Link to={`/عن-الشركه`}>
              <button
                className="bg-darkBlue text-[#fff] w-fit px-5 py-2 rounded-md
            hover:bg-lightBlue transition-all
            "
              >
                من نحن
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec_5;
