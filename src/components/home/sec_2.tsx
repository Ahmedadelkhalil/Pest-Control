import Img1 from "../../images/Why-Us/تنظيف-الشقق-والفلل.png";
import Img2 from "../../images/Why-Us/مكافحة-حشرات.png";
import Img3 from "../../images/Why-Us/تنظيف-غرف-الصرف-الصحي.png";
import Img4 from "../../images/Why-Us/تنظيف-سجاد.png";

const Sec_2 = () => {
  const data = [
    {
      img: Img1,
      title: "تنظيف العقارات",
      desc: "نقدم خدمات تنظيف شاملة وفعالة للشقق و الفيلات ب احدث الاجهزه",
    },
    {
      img: Img2,
      title: "مكافحة الحشرات",
      desc: "نقوم بالقضاء على الحشرات مثل الصراصير، النمل، الفئران والقوارض",
    },
    {
      img: Img3,
      title: "تعقيم المؤسسات",
      desc: "نقدم خدمة تعقيم وتنظيف للمؤسسات الكبري الحكوميه والخاصه",
    },
    {
      img: Img4,
      title: "تنظيف السجاد",
      desc: "نقوم بتنظيف السجاد و الموكيت و إزالة الأوساخ والبقع ب احدث الاجهزه",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-7">
      <h1 className="text-lg sm:text-2xl my-5 border-2 border-darkBlue p-2">
        من خدماتنا
      </h1>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 my-7">
        {data.map((ele, indx) => {
          return (
            <div
              className="flex flex-col justify-center items-center text-center"
              key={indx}
            >
              <img
                src={ele.img}
                alt={ele.title}
                className={`w-[70px] sm:w-[90px] md:w-[100px] h-[70px] sm:h-[90px] md:h-[100px]`}
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl mt-5 mb-2">
                {ele.title}
              </h3>
              <p className="text-[11px] sm:text-[12px] lg:text-sm w-[145px] lg:w-auto">
                {ele.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sec_2;
