import React from "react";
import truck from "../../../public/images/asset 4.png";
import ship from "../../../public/images/asset 5.png";
import flite from "../../../public/images/asset 6.png";
import train from "../../../public/images/asset 7.png";
import Warehousing from "../../../public/images/asset 8.png";
import project from "../../../public/images/asset 9.png";
import { scrollToSection } from "../utils/Util";
function Service() {
  const handleNavigate = (id) => {
    scrollToSection(id);
  };
  return (
    <div id="service">
      <div className="flex justify-center items-center flex-col bg-[#f0f9ff] py-20  xl:px-40 lg:px-20 md:px-16 sm:px-10 px-5 ">
        <p
          className="sm:text-4xl font-semibold tracking-wide uppercase text-[#ff8800]  text-center text-3xl"
          style={{ fontFamily: "Oswald" }}
        >
          All Services
        </p>
        <h1
          className="sm:text-5xl text-[#0b2e42] font-bold py-8  text-center text-3xl sm:px-2"
          style={{ fontFamily: "Oswald" }}
        >
          Trusted For Our Services
        </h1>
        <p
          style={{ fontFamily: "Rubik" }}
          className="md:text-lg  text-center sm:text-sm text-xm"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the standard <br />
          dummy text ever since the when an printer took.
        </p>
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-10">
          <div className="flex flex-col justify-start items-start border-[20px] hover:border-[#ff8800] duration-500 bg-white ">
            <img
              src={truck}
              alt="image is missing"
              className="m-8"
              style={{ height: "61px" }}
            />
            <span
              className="flex gap-8 bottom-0 text-[#ff8800] text-4xl font-bold mx-8 pt-4"
              style={{ fontFamily: "Oswald" }}
            >
              01 <h1 className="text-[#0b2e42] text-2xl pt-2"> Air Freight</h1>
            </span>
            <p className="text-base mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              Our aim is to optimize and improve <br />
              your supply chain so that we can
              <br /> give you the best service.
            </p>
            <div>
              <button
                className="text-xl uppercase  mx-8 my-4  text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  view detail
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start border-[20px]   hover:border-[#ff8800] duration-500 bg-white ">
            <img
              src={ship}
              alt="image is missing"
              className="m-8"
              style={{ height: "61px" }}
            />
            <span
              className="flex gap-8 bottom-0 text-[#ff8800] text-4xl font-bold mx-8 pt-4"
              style={{ fontFamily: "Oswald" }}
            >
              02 <h1 className="text-[#0b2e42] text-2xl pt-2"> Road Freight</h1>
            </span>
            <p className="text-base  mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              Our aim is to optimize and improve <br />
              your supply chain so that we can
              <br /> give you the best service.
            </p>
            <div>
              <button
                className="text-xl uppercase  mx-8 my-4  text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  view detail
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start border-[20px]  hover:border-[#ff8800] duration-500 bg-white ">
            <img
              src={flite}
              alt="image is missing"
              className="m-8"
              style={{ height: "61px" }}
            />
            <span
              className="flex gap-8 bottom-0 text-[#ff8800] text-4xl font-bold mx-8 pt-4"
              style={{ fontFamily: "Oswald" }}
            >
              03{" "}
              <h1 className="text-[#0b2e42] text-2xl pt-2"> Ocean Freight</h1>
            </span>
            <p className="text-base mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              Our aim is to optimize and improve <br />
              your supply chain so that we can
              <br /> give you the best service.
            </p>
            <div>
              <button
                className="text-xl uppercase  mx-8 my-4  text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  view detail
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start border-[20px]  hover:border-[#ff8800] duration-500 bg-white ">
            <img
              src={train}
              alt="image is missing"
              className="m-8"
              style={{ height: "61px" }}
            />
            <span
              className="flex gap-8 bottom-0 text-[#ff8800] text-4xl font-bold mx-8 pt-4"
              style={{ fontFamily: "Oswald" }}
            >
              04 <h1 className="text-[#0b2e42] text-2xl pt-2"> Rail Freight</h1>
            </span>
            <p className="text-base  mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              Our aim is to optimize and improve <br />
              your supply chain so that we can
              <br /> give you the best service.
            </p>
            <div>
              <button
                className="text-xl uppercase  mx-8 my-4  text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  view detail
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start border-[20px]  hover:border-[#ff8800] duration-500 bg-white ">
            <img
              src={Warehousing}
              alt="image is missing"
              className="m-8"
              style={{ height: "61px" }}
            />
            <span
              className="flex gap-8 bottom-0 text-[#ff8800] text-4xl font-bold mx-8 pt-4"
              style={{ fontFamily: "Oswald" }}
            >
              05 <h1 className="text-[#0b2e42] text-2xl pt-2"> Warehousing</h1>
            </span>
            <p className="text-base  mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              Our aim is to optimize and improve <br />
              your supply chain so that we can
              <br /> give you the best service.
            </p>
            <div>
              <button
                className="text-xl uppercase  mx-8 my-4  text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  view detail
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start border-[20px]  hover:border-[#ff8800] duration-500 bg-white ">
            <img
              src={project}
              alt="image is missing"
              className="m-8"
              style={{ height: "61px" }}
            />
            <span
              className="flex gap-8 bottom-0 text-[#ff8800] text-4xl font-bold mx-8 pt-4"
              style={{ fontFamily: "Oswald" }}
            >
              06{" "}
              <h1 className="text-[#0b2e42] md:text-2xl text-xl font-bold pt-2">
                {" "}
                Project Cargo
              </h1>
            </span>
            <p className="text-base mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              Our aim is to optimize and improve <br />
              your supply chain so that we can
              <br /> give you the best service.
            </p>
            <div>
              <button
                className="text-xl uppercase  mx-8 my-4  text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  view detail
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
