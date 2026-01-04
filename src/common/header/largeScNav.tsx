import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// Nav Links
import { links } from "../../data/Nav Links/links";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const LargeScNav = () => {
  const [showSubLinks, setShowSubLinks] = useState<boolean>(false);
  const [subLinkindxToShow, setSubLinkindxToShow] = useState<number | null>();
  const [highLightNavHeading, setHighLightNavHeading] = useState<any>({});
  const [path, setPath] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setHighLightNavHeading({});
    setPath(decodeURIComponent(location.pathname));

    for (let i = 0; i < links.length; i++) {
      if (links[i].subLinks.length > 0) {
        for (let j = 0; j < links[i].subLinks.length; j++) {
          if (
            decodeURIComponent(location.pathname) ===
            links[i].subLinks[j].pagelink
          ) {
            setHighLightNavHeading(links[i].subLinks[j]);
          }
        }
      }
    }
  }, [location.pathname]);

  return (
    <nav className="hidden md:block">
      <div className="flex justify-center mt-3">
        <ul className="flex flex-row-reverse">
          {links.map((ele, indx) => {
            let len = ele.subLinks.length;
            return (
              <li
                key={indx}
                className={`relative mx-[6px]`}
                onClick={() => {
                  if (ele.subLinks.length === 0) {
                    navigate(`${ele.pagelink}`);
                  }
                  if (ele.subLinks.length === 0) {
                    setShowSubLinks(false);
                    setSubLinkindxToShow(null);
                    setPath(ele.pagelink);
                    setHighLightNavHeading(null);
                  } else {
                    setShowSubLinks(!showSubLinks);
                    setSubLinkindxToShow(indx);
                  }
                }}
              >
                <button
                  className={`flex items-center p-2 font-[Almarai] font-bold
                    after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 
                    hover:after:w-full hover:after:bg-lightBlue hover:text-lightBlue
                    after:transition-all after:duration-300
                    hover:after:transition-all hover:after:duration-300
                    ${
                      ele.pagelink === path ||
                      ele.subLinks.includes(highLightNavHeading) ||
                      (showSubLinks && subLinkindxToShow === indx)
                        ? `text-lightBlue after:bg-lightBlue after:w-full`
                        : `text-darkBlue`
                    }
                `}
                >
                  {ele.pageName}
                  {ele.subLinks.length !== 0 ? (
                    <span className="ml-2">
                      {showSubLinks && subLinkindxToShow === indx ? (
                        <FontAwesomeIcon icon={faAngleUp} />
                      ) : (
                        <FontAwesomeIcon icon={faAngleDown} />
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </button>

                {showSubLinks && subLinkindxToShow === indx ? (
                  ele.subLinks.length !== 0 ? (
                    <div
                      className={`absolute left-0 top-[45px] w-[250px] p-2 mt-1 shadow-md border-t-4 border-[darkBlue] bg-[#fff] z-[100000]`}
                    >
                      <ul className="text-right">
                        {ele.subLinks.map((ele, indx) => {
                          return (
                            <>
                              <NavLink to={`${ele.pagelink}`}>
                                <button
                                  className={`text-sm text-right w-full
                                  ${
                                    ele.pagelink === path
                                      ? `text-lightBlue bg-[#e3e3e3]`
                                      : `text-darkBlue`
                                  }
                                  hover:bg-[#e3e3e3]
                                  my-3 px-3 py-2  
                                  `}
                                  onClick={() => {
                                    setShowSubLinks(false);
                                    setSubLinkindxToShow(null);
                                    setPath(ele.pagelink);
                                    setHighLightNavHeading(ele);
                                  }}
                                >
                                  <li key={indx} className={`font-bold`}>
                                    {ele.pageName}
                                  </li>
                                </button>
                              </NavLink>
                              {indx !== len - 1 ? (
                                <hr
                                  className={`w-[70%] mx-auto text-darkBlue`}
                                />
                              ) : (
                                ""
                              )}
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default LargeScNav;
