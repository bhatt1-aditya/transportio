import React from "react";
import HeroImg from "../../../public/images/asset 22.jpeg";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Service from "../service/Service";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Estimation from "../estimation/Estimation";
function Hero() {
  return (
    <div id="home">
      {/* <Navbar /> */}
      <div className="max-h-screen  ">
        <img
          src={HeroImg}
          alt="image is missing"
          className="bg-cover bg-center bg-no-repeat w-screen h-screen object-cover "
        />
        <div className=" absolute 2xl:top-36 lg:top-40 md:top-60 top-[280px] xl:left-40 lg:left-20 md:left-16 sm:left-10 left-5">
          <h1
            className="uppercase font-black 2xl:text-[130px] lg:text-[110px] md:text-[60px] text-[55px] 2xl:leading-[150px] lg:leading-[130px] md:leading-[80px] leading-[60px]"
            style={{ fontFamily: "Oswald" }}
          >
            <span className="text-[#ff8800]">To&nbsp; Every</span>
            <br />
            <span
              className="2xl:text-[120px] lg:text-[100px] uppercase font-bold text-white"
              style={{ fontFamily: "Oswald" }}
            >
              Direction
            </span>
          </h1>
          <p className="text-white 2xl:text-2xl md:text-xl text-base font-medium 2xl:leading-[40px] lg:leading[35px] leading-[30px] py-5">
            There are many variations of passages of worem
            <br />
            Ipsum available, but the majority
          </p>
          <button
            className="text-white md:text-lg text-base font-semibold border border-white md:p-4 py-2 md:px-8 px-5 uppercase hover:bg-[#ff8800] duration-500"
            style={{ fontFamily: "Rubik" }}
          >
            view services
          </button>
        </div>
      </div>

      <About />
      <Service />
      <Estimation />
      <Blog />
      <Contact />
    </div>
  );
}

export default Hero;
