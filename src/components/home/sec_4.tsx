import { Link } from "react-router-dom";
// Images
import img1 from "../../images/services/تنظيف الشقق و الفيلات.jpg";
import img2 from "../../images/services/تنظيف الاثاث.jpg";
import img3 from "../../images/services/تنظيف السجاد و الموكيت.jpg";
import img4 from "../../images/services/تنظيف الوجهات.jpg";
// Card Pattern Shape
import Card from "../../common/card";

const Sec_4 = () => {
  const data = [
    {
      img: img1,
      title: "تنظيف الشقق و الفيلات",
      desc: "تعتبر شركتنا من افضل الشركات الرائدة في مجال تنظيف و نظافة المنزل بشهادةالمئات من عملائنا فنحن نقدم هذه الخدمة علي يد عمال ومشرفين مدربين علي اعلي مستوي",
      link: "/تنظيف-الشقق-والفيلات",
    },
    {
      img: img2,
      title: "تنظيف الاثاث",
      desc: "تعتبر شركتنا من افضل الشركات الرائدة في مجال تنظيف الاثاث بشهادة المئات من عملائنا فنحن نقدم هذه الخدمة علي يد عمال ومشرفين مدربين علي اعلي مستوي",
      link: "/تنظيف-الاثاث",
    },
    {
      img: img3,
      title: "تنظيف السجاد و الموكيت",
      desc: "تعتبر شركتنا من افضل الشركات الرائدة في مجال تنظيف الاثاث بشهادة المئات من عملائنا فنحن نقدم هذه الخدمة علي يد عمال ومشرفين مدربين علي اعلي مستوي",
      link: "/تنظيف-السجاد-والموكيت",
    },
    {
      img: img4,
      title: "تنظيف الوجهات",
      desc: "تعتبر شركتنا من افضل الشركات الرائدة في مجال تنظيف الاثاث بشهادة المئات من عملائنا فنحن نقدم هذه الخدمة علي يد عمال ومشرفين مدربين علي اعلي مستوي",
      link: "/تنظيف-الوجهات",
    },
  ];
  return (
    <div className={`bg-sec-img py-10`}>
      <div className="flex flex-col justify-center items-center py-7 px-5 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5">
          خدماتنا <span className="text-lightBlue">المميزه</span>
        </h1>
        <p className="text-sm">
          تريد تنظيفًا سريعًا في مكتبك أو شقتك أو تنظيف وجهات وما إلى ذلك
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 py-7 gap-5">
        {data.map((ele, indx) => {
          return (
            <Link to={ele.link} key={indx}>
              <Card imgSrc={ele.img} title={ele.title} desc={ele.desc} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sec_4;
