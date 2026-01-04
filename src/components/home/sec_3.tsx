import whyUsImg from "../../images/Why-Us/whyUs.png";

const Sec_3 = () => {
  return (
    <>
      <div className=" bg-secBg">
        <div className="container mx-auto flex flex-col items-center md:flex-row-reverse md:justify-between py-10 px-5">
          <div className="text-end">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-7 lg:mb-10 tracking-wide border-2 border-darkBlue text-center md:border-0 md:text-end">
              اسباب اختيار العملاء{" "}
              <span className="text-lightBlue">لشركتنا</span>
            </h1>
            <div className="mb-7">
              <h3 className="text-lightBlue text-xl mb-2">توفير الوقت</h3>
              <p className="text-paragraphs text-sm">
                مع شركتنا يمكننا تنظيف المنازل او الشركات وتعقيمها في اسرع وقت
                وافضل جوده
              </p>
            </div>
            <div className="mb-7">
              <h3 className="text-lightBlue text-xl mb-2">
                نقدم الخدمه بجوده عاليه
              </h3>
              <p className="text-paragraphs mb-2 text-sm">
                تعتبر شركتنا من افضل الشركات الرائده في مجال التنظيف
              </p>
              <p className="text-paragraphs text-sm">
                بشهاده المئات من عملائنا فنحن نقدم هذه الخدمه علي يد عمال
                ومشرفين مدربين علي اعلي مستوي لتقديم افضل خدمه وجوده عاليه
              </p>
            </div>
          </div>
          <img
            src={whyUsImg}
            alt="why us img"
            className="w-[350px] sm:w-[400px] md:w-[330px] md:px-5 lg:w-[350px] xl:w-[450px] 2xl:w-[600px] mt-7 md:mt-0"
          />
        </div>
      </div>
    </>
  );
};

export default Sec_3;
