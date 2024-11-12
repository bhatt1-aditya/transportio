import React from "react";
import man from "../../../public/images/asset 21.png";
function Contact() {
  const handleNavigate = (id) => {
    scrollToSection(id);
  };
  return (
    <div id="contact">
      <div className=" h-auto">
        <div className="py-20  xl:px-40 lg:px-20 md:px-16 sm:px-10 px-5 flex flex-col lg:flex-row justify-center items-center text-center bg-[#ff8800] lg:h-96 h-full w-full">
          <img src={man} alt="image is missing " />
          <h1
            className="lg:text-5xl md:text-3xl text-2xl  text-[#0b2e42] font-bold py-8  w-full"
            style={{ fontFamily: "Oswald" }}
          >
            Subscribe for offers
            <br /> and news
          </h1>
          <div className="flex flex-col justify-start items-start w-3/4 ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-10 py-5 w-full "
            />
            <button className="sm:px-10 lg:px-5 px-3 md:py-5 py-3 duration-500 text-white bg-[#184e6d] mt-4 flex mx-start">
              <p
                onClick={() => {
                  handleNavigate("home");
                }}
              >
                Subscribe Now
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
