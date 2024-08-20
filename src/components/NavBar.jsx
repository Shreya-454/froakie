import { useState } from "react";
import navLogo from "../assets/images/svg/nav-logo.svg"
import { NAV_LINK_LIST } from "../utils/helper";

const NavBar = () => {
      const [show, setShow] = useState(true);
      function showNav() {
        setShow(!show);
        if (show === true) {
          document.body.classList.add("max-lg:!overflow-hidden");
        } else {
          document.body.classList.remove("max-lg:!overflow-hidden");
        }
      }
  return (
    <nav>
      <div className="container mx-auto px-6 max-w-[1204px] xl:px-3">
        <div className="flex justify-between items-center">
          <a className="flex items-center" href="#">
            <img
              src={navLogo}
              alt="logo"
              className="lg:w-[100px] sm:w-[85px] w-16 h-14 sm:h-[67px] lg:h-[87px]"
            />{" "}
            <span className="font-ubuntu !leading-116 lg:text-custom-2xl sm:text-2xl text-xl lg:ml-2.5 ml-1.5 text-white font-medium">
              Froakie
            </span>
          </a>
          <ul
            className={`flex lg:gap-12 gap-9 items-center mobileView ${
              show ? "right-[100%] " : "right-0 max-md:min-h-screen"
            }`}
          >
            {NAV_LINK_LIST.map((data, i) => (
              <li
                key={i}
                className="list-disc duration-300 capitalize hover:text-dark-blue font-cabin font-normal text-white text-base !leading-150"
              >
                <a href="" className="lg:ml-5 ml-1.5">
                  {data.title}
                </a>
              </li>
            ))}
            <li>
              {" "}
              <button className="bg-dark-blue sm:hidden block duration-300 relative after:absolute overflow-hidden after:top-0 hover:after:right-0 after:bottom-0 after:left-0 after:bg-white border-dark-blue border-2 hover:text-dark-blue after:z-[-1] z-[1] after:duration-300 after:right-[100%] !leading-121 rounded-[18px] py-3 lg:py-[18px] uppercase text-sm lg:text-base font-medium font-cabin text-white px-4 lg:px-[38.5px]">
                Buy Now
              </button>
            </li>
          </ul>

          <div className="flex gap-3 items-center">
            <button className="bg-dark-blue sm:block hidden duration-300 relative after:absolute overflow-hidden after:top-0 hover:after:right-0 after:bottom-0 after:left-0 after:bg-white border-dark-blue border-2 hover:text-dark-blue after:z-[-1] z-[1] after:duration-300 after:right-[100%] !leading-121 rounded-[18px] py-2 sm:py-3 lg:py-[18px] uppercase sm:text-sm text-sm lg:text-base font-medium font-cabin text-white px-4 lg:px-[38.5px]">
              Buy Now
            </button>
            <label className="md:hidden" onClick={showNav}>
              {show ? (
                <div className=" z-50 relative">
                  <span className="flex bg-white h-1 rounded-3xl duration-300 w-6"></span>
                  <span className="flex bg-white h-1 rounded-3xl duration-300 w-6 mt-1"></span>
                  <span className="flex bg-white h-1 rounded-3xl duration-300 w-6 mt-1"></span>
                </div>
              ) : (
                <div className="z-50 relative">
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar