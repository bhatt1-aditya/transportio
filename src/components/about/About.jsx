import React from "react";
import bgImage from "../../../public/images/asset 3.png";
import AboutImage from "../../../public/images/asset 1.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { scrollToSection } from "../utils/Util";
function About() {
  const handleNavigate = (id) => {
    scrollToSection(id);
  };
  return (
    <div id="about">
      <div className="flex lg:flex-row flex-col justify-between py-20  xl:px-40 lg:px-20 md:px-16 sm:px-10 px-5">
        <div className="md:mb-10">
          <img
            src={AboutImage}
            alt="image is missing"
            className="object-scale-down "
          />
        </div>
        <div className="lg:w-1/2 w-full ">
          <p
            className="sm:text-4xl font-semibold tracking-wide uppercase text-[#ff8800] text-3xl"
            style={{ fontFamily: "Oswald" }}
          >
            Why Choose Us
          </p>
          <h1
            className="sm:text-5xl text-[#0b2e42] font-bold py-8 text-3xl"
            style={{ fontFamily: "Oswald" }}
          >
            We Are Professional Logistics & cargo Agency
          </h1>
          <p className="md:text-lg  text-start sm:text-sm text-xm">
            Sed ut perspiciatis unde omnis iste natus error volup tatem
            accusantium dolorem que laudantium, totam inventore.
          </p>
          <ul className="md:text-lg  text-start sm:text-sm text-xm py-8 flex flex-col gap-5 w-full">
            <li className="flex gap-5 justify-start items-center text-start">
              <IoIosArrowForward className="text-[#ff8a00]" />
              Go beyond logistics, make the world go round and revolutionize
              business.
            </li>

            <li className="flex gap-5 justify-start items-center text-start">
              <IoIosArrowForward className="text-[#ff8a00]" />
              Logistics through innovation, dedication, and technology. ready,
              set, done.
            </li>
            <li className="flex gap-5 justify-start items-center text-start">
              <IoIosArrowForward className="text-[#ff8a00]" />
              We take pride in serving our customers safely. together with
              passion.
            </li>
            <li className="flex gap-5 justify-start items-center text-start">
              <IoIosArrowForward className="text-[#ff8a00]" />
              Imagination what we can easily see is only a small percentage.
            </li>
            <li className="flex gap-5 justify-start items-center text-start">
              <IoIosArrowForward className="text-[#ff8a00]" />
              Quality never goes out of style. safety, quality, professionalism.
            </li>
            <li className="flex gap-5 justify-start items-center text-start">
              <IoIosArrowForward className="text-[#ff8a00]" />
              The quality shows in every move we make where business lives.
            </li>
          </ul>
          <button
            className="text-xl uppercase text-white  my-4 border py-2 px-4 bg-[#ff8800]"
            style={{ fontFamily: "Rubik" }}
          >
            <p
              onClick={() => {
                handleNavigate("home");
              }}
            >
              Read More
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
