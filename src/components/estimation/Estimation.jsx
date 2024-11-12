import React from "react";
import news from "../../../public/images/asset 10.png";
import warehouse from "../../../public/images/asset 11.png";
import tracking from "../../../public/images/asset 12.png";
import { FaArrowRight } from "react-icons/fa6";
import { scrollToSection } from "../utils/Util";

function Estimation() {
  const handleNavigate = (id) => {
    scrollToSection(id);
  };
  return (
    <div>
      <div className="py-20  xl:px-40 lg:px-20 md:px-16 sm:px-10 px-5">
        <div className="flex justify-between">
          <div>
            <p
              className="sm:text-4xl font-semibold tracking-wide uppercase text-[#ff8800] text-3xl"
              style={{ fontFamily: "Oswald" }}
            >
              Estimation
            </p>
            <h1
              className="sm:text-5xl text-[#0b2e42] font-bold py-8 text-3xl"
              style={{ fontFamily: "Oswald" }}
            >
              Has a wide range of solutions
            </h1>
            <p className="md:text-lg  text-start sm:text-sm text-xm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard <br />
              dummy text ever since the when an printer took.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-10 py-20">
          <div className="border flex flex-col justify-center items-center text-center hover:shadow-2xl hover:shadow-cyan-500/50 ">
            <div className=" bg-[#f0f9ff] h-36 w-36 p-4 rounded-full flex justify-center items-center mt-16">
              <img src={news} alt="image is missing" className=" " />
            </div>
            <h1
              style={{ fontFamily: "Oswald" }}
              className="text-[#0b2e42] text-2xl pt-5 pb-3 font-bold"
            >
              Solutions and specialized
            </h1>
            <p className="text-base mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              Our aim is to optimize and improve your supply chain so that we
              can give you the best service
            </p>
            <button className="border-2 px-5 py-3 border-black my-8">
              <p
                onClick={() => {
                  handleNavigate("home");
                }}
              >
                <FaArrowRight className="" />
              </p>
            </button>
          </div>

          <div className="border flex flex-col justify-center items-center text-center  hover:shadow-2xl hover:shadow-cyan-500/50 ">
            <div className=" bg-[#f0f9ff] h-36 w-36 p-4 rounded-full flex justify-center items-center  mt-16">
              <img
                src={warehouse}
                alt="image is missing"
                className=" border bg-[#f0f9ff]"
              />
            </div>
            <h1
              style={{ fontFamily: "Oswald" }}
              className="text-[#0b2e42] text-2xl pt-5 pb-3 font-bold"
            >
              Multiple warehouses
            </h1>
            <p className="text-base mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              We provide multiple drop off and pickup locations so you don't
              have to worry. And you should not face any kind...
            </p>
            <button className="border-2 px-5 py-3 border-black my-8">
              <p
                onClick={() => {
                  handleNavigate("home");
                }}
              >
                <FaArrowRight className="" />
              </p>
            </button>
          </div>
          <div className="border flex flex-col justify-center items-center text-center hover:shadow-2xl hover:shadow-cyan-500/50 ">
            <div className=" bg-[#f0f9ff] h-36 w-36 p-4 rounded-full flex justify-center items-center  mt-16">
              <img
                src={tracking}
                alt="image is missing"
                className=" border bg-[#f0f9ff]"
              />
            </div>
            <h1
              style={{ fontFamily: "Oswald" }}
              className="text-[#0b2e42] text-2xl pt-5 pb-3 font-bold"
            >
              Tracking made easy
            </h1>
            <p className="text-base mx-8 my-4" style={{ fontFamily: "Rubik" }}>
              A tracking number for the entire process. so that you can find the
              exact position. this process will help you
            </p>
            <button className="border-2 px-5 py-3 border-black my-8">
              <p
                onClick={() => {
                  handleNavigate("home");
                }}
              >
                <FaArrowRight className="" />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimation;
