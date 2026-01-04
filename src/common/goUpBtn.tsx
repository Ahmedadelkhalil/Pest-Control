import { useState, useEffect } from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const GoUpBtn = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        className={`fixed bottom-[30px] right-[30px] z-[10000] bg-darkBlue text-[#fff] w-[35px] h-[35px] flex justify-center items-center rounded-md
         transition-all duration-500 ease-in-out ${
           showBtn ? `translate-x-[0]` : `translate-x-[200%]`
         }
        `}
        onClick={() => goUp()}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default GoUpBtn;
