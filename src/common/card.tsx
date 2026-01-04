import { CardDataType } from "../types/services";

const Card = ({ imgSrc, title, desc }: CardDataType) => {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-[#4f81dfdd]">
      <img src={imgSrc} alt={title} className="w-full h-[200px]" />
      <div className="p-5 bg-[#fff] h-full font-[Almarai] font-bold">
        <h4 className="mb-3 text-center text-xl">{title}</h4>
        <p className="text-paragraphs text-sm text-center">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
