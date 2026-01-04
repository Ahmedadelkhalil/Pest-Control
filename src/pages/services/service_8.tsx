import ServicePagePattern from "../../common/services/servicePagePattern";
import img from "../../images/services/pages/sanitizing/sanatizing.png";

const Service_8 = () => {
  const data = {
    banner: {
      mainTitle: "التعقيم",
      subTitle: "افضل شركة لـ تعقيم الشقق و الفيلات",
    },
    pageTitle: {
      title: "خدماتنا | التعقيم",
    },
    sec_1: {
      mainTitle:
        "لماذا يمكنك الاعتماد علي شركتنا في تعقيم المنازل و الفيلات و الشركات",
      percentages: [
        {
          title: "المهارة و الجودة",
          percentage: "100%",
        },
        {
          title: "الامانة والالتزام",
          percentage: "100%",
        },
        {
          title: "الاسعار التنافسية",
          percentage: "100%",
        },
        {
          title: "مدي ارضاء العملاء",
          percentage: "100%",
        },
      ],
      img: img,
    },
    sec_2: {
      mainTitle: "مميزات شركتنا في خدمة تعقيم المنازل والفيلات والشركات",
      paragraphs: [
        {
          highlightTitle: "الجودة",
          desc: "فريقنا مكون عمال ومشرفين مدربين وعلي درجة عالية من الكفاءة والمهنية لنتاكد من تقديمنا خدمة نظافة الشركات والمصانع ذات جودة عالية ترضينا قبل ان يرضي عنها العميل نفسه",
        },
        {
          highlightTitle: "الالتزام",
          desc: "اكثر ما يميز شركتنا في جميع خدماتها ومن ضمنها خدمة نظافة الشركات والمصانع،هي الالتزام التام بالمواعيد المتفق عليها",
        },
        {
          highlightTitle: "الامانة والالتزام",
          desc: "شركتنا تضمن لجميع عملائها ان جميع العمال والمشرفين الذين يقوموا خدمة تنظيف الشركات والمصانع علي درجة عالية جدا من الامانة. فلا قلق علي اي متعلقات شخصية",
        },
      ],
    },
  };
  return (
    <>
      <ServicePagePattern servicePageData={data} />
    </>
  );
};

export default Service_8;
