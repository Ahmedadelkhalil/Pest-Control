import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Nav Links
import { links } from "../../data/Nav Links/links";

const SmallScNav = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [highlightHeading, setHighlightHeading] = useState<any>({});
  const location = useLocation();

  useEffect(() => {
    setHighlightHeading({});
    for (let i = 0; i < links.length; i++) {
      if (links[i].subLinks.length > 0) {
        for (let j = 0; j < links[i].subLinks.length; j++) {
          if (
            decodeURIComponent(location.pathname) ===
            links[i].subLinks[j].pagelink
          ) {
            setHighlightHeading(links[i].subLinks[j]);
          }
        }
      }
    }
  }, [location.pathname]);

  return (
    <div className={`relative md:hidden flex justify-center items-center`}>
      <button
        className=" mt-3 mb-1"
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" color="darkBlue" />
      </button>
      <div
        className={`absolute w-[80%] h-0 ${
          showMobileNav ? "h-[500px] overflow-y-scroll" : ""
        } transition-height duration-500 ease-in-out top-[100%] overflow-hidden shadow-lg z-[99999] bg-[#fff]`}
      >
        <div className="relative after:absolute after:w-full after:h-[5px] after:top-0 after:left-0 after:bg-[darkBlue]">
          <ul className="flex flex-col items-end p-5">
            {links.map((ele, indx) => {
              let len = ele.subLinks.length;
              return (
                <li
                  key={indx}
                  className="font-[Almarai] text-darkBlue font-bold w-full overflow-hidden text-right"
                  onClick={() => {
                    setShowMobileNav(false);
                  }}
                >
                  <NavLink
                    to={`${ele.pagelink}`}
                    className={({ isActive }) =>
                      isActive ? `bg-[#e3e3e3] py-2` : ``
                    }
                  >
                    <button
                      className={`text-lightBlue w-full text-end hover:bg-[#e3e3e3] px-5 py-2
                      ${
                        ele.subLinks?.includes(highlightHeading)
                          ? `bg-[#e3e3e3]`
                          : ``
                      }
                      `}
                    >
                      {ele.pageName}
                    </button>
                  </NavLink>

                  {/* ---------------------- Sub Links ------------------------ */}
                  {ele.subLinks.length > 0 ? (
                    <ul className="mt-5">
                      {ele.subLinks.map((ele, indx) => {
                        return (
                          <>
                            <NavLink
                              to={`${ele.pagelink}`}
                              className={({ isActive }) =>
                                isActive ? `bg-[#e3e3e3] text-lightBlue` : ""
                              }
                            >
                              <li
                                key={indx}
                                className={`mr-[40px] py-3 pr-2 hover:bg-[#e3e3e3] cursor-pointer text-[14px]
                              ${
                                ele.pagelink ===
                                decodeURIComponent(location.pathname)
                                  ? `bg-[#e3e3e3]`
                                  : ``
                              }
                                `}
                              >
                                {`${ele.pageName} #`}
                              </li>
                            </NavLink>
                            {indx !== len - 1 ? (
                              <hr className="w-[80%] mx-auto my-2 text-[darkBlue]" />
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                  {indx !== links.length - 1 ? (
                    <hr className="w-[80%] mx-auto my-3 text-darkBlue" />
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallScNav;
