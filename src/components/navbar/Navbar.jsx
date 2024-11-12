import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import Hero from "../hero/Hero";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/Util";
// import { useScrollHeight } from "../utils/useScrollHeight";
function Navbar() {
  const [navColor, setNavColor] = useState("bg-transparent");

  const changeNavColorOnScroll = () => {
    if (window.scrollY > 92) {
      setNavColor("bg-[#1e90d2]");
    } else {
      setNavColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColorOnScroll);
    return () => {
      window.removeEventListener("scroll", changeNavColorOnScroll);
    };
  }, []);
  const [openMenu, setOpenMenu] = useState(false);
  // const isValid = useScrollHeight();
  // console.log(isValid);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleNavigate = (id) => {
    scrollToSection(id);
  };
  return (
    <div className="">
      <div className="  max-h-screen   ">
        <div
          className={`flex justify-between fixed w-full p-4 ${navColor}  items-center z-50`}
        >
          <div className="">
            <h1
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Oswald" }}
            >
              Transportio
            </h1>
          </div>
          <div className="hidden lg:inline-flex  ">
            <ul
              className="flex justify-center items-center gap-10 2xl:text-lg lg:text-base  text-white  "
              style={{ fontFamily: "Rubik" }}
            >
              <li className="hover:text-[#ff8800] duration-500">
                {" "}
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  Home
                </p>
              </li>
              <li className="hover:text-[#ff8800] duration-500">
                <p
                  onClick={() => {
                    handleNavigate("about");
                  }}
                >
                  About
                </p>
              </li>
              <li className="hover:text-[#ff8800] duration-500">
                <p
                  onClick={() => {
                    handleNavigate("service");
                  }}
                >
                  Service
                </p>
              </li>
              <li className="hover:text-[#ff8800] duration-500">
                <p
                  onClick={() => {
                    handleNavigate("blog");
                  }}
                >
                  Blog
                </p>
              </li>
              <li className="hover:text-[#ff8800] duration-500">
                <p
                  onClick={() => {
                    handleNavigate("contact");
                  }}
                >
                  Contact
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-5 text-white">
            <div
              style={{ fontFamily: "Rubik" }}
              className="sm:inline-block hidden"
            >
              <h1 className="xl:text-base lg:text-sm text-sm font-normal text-end uppercase">
                Free Call In India
              </h1>
              <span className="xl:text-3xl lg:text-2xl text-xl font-semibold">
                +91 234 567 8910
              </span>
            </div>
            <IoCallOutline className="text-4xl sm:inline-block hidden" />
            {openMenu ? (
              <>
                <RxCross1
                  className="text-4xl lg:hidden md:inline-block"
                  onClick={handleOpenMenu}
                />
                <div className="absolute left-0 w-full h-screen lg:top-[92px] md:top-[80px] top-[70px]">
                  <div className="lg:hidden inline-block w-full  h-screen">
                    <ul
                      className="flex flex-col justify-center items-center gap-10 h-screen bg-white w-full 2xl:text-lg lg:text-base  text-black text-3xl  "
                      style={{ fontFamily: "Rubik" }}
                    >
                      <li className="hover:text-[#ff8800] duration-500">
                        {" "}
                        <p
                          onClick={() => {
                            handleNavigate("home");
                            handleOpenMenu();
                          }}
                        >
                          Home
                        </p>
                      </li>
                      <li className="hover:text-[#ff8800] duration-500">
                        <p
                          onClick={() => {
                            handleNavigate("about");
                            handleOpenMenu();
                          }}
                        >
                          About
                        </p>
                      </li>
                      <li className="hover:text-[#ff8800] duration-500">
                        <p
                          onClick={() => {
                            handleNavigate("service");
                            handleOpenMenu();
                          }}
                        >
                          Service
                        </p>
                      </li>
                      <li className="hover:text-[#ff8800] duration-500">
                        <p
                          onClick={() => {
                            handleNavigate("blog");
                            handleOpenMenu();
                          }}
                        >
                          Blog
                        </p>
                      </li>
                      <li className="hover:text-[#ff8800] duration-500">
                        <p
                          onClick={() => {
                            handleNavigate("contact");
                            handleOpenMenu();
                          }}
                        >
                          Contact
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <IoMenu
                  className="text-4xl lg:hidden md:inline-block"
                  onClick={handleOpenMenu}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
