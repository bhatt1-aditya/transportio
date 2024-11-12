import React from "react";
import partnership from "../../../public/images/asset 19.jpeg";
import visiting from "../../../public/images/asset 20.jpeg";
import { scrollToSection } from "../utils/Util";
function Blog() {
  const handleNavigate = (id) => {
    scrollToSection(id);
  };
  return (
    <div id="blog">
      <div className="py-20  xl:px-40 lg:px-20 md:px-16 sm:px-10 px-5">
        <div className="flex flex-col justify-center items-center text-center">
          <p
            className="sm:text-4xl font-semibold tracking-wide uppercase text-[#ff8800] text-3xl"
            style={{ fontFamily: "Oswald" }}
          >
            Our Blogs
          </p>
          <h1
            className="sm:text-5xl text-[#0b2e42] font-bold py-8 text-3xl"
            style={{ fontFamily: "Oswald" }}
          >
            Recent news & events
          </h1>
          <p
            style={{ fontFamily: "Rubik" }}
            className="md:text-lg  text-center sm:text-sm text-xm"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry the standard
            <br /> dummy text ever since the when an printer took.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-10 mt-10">
          <div>
            <img src={partnership} alt="image is missing" />
            <div>
              {" "}
              <h1
                style={{ fontFamily: "Oswald" }}
                className="text-[#0b2e42] text-2xl pt-5 pb-3 font-bold"
              >
                At the end of the day, going forward, a new normal that has
                evolved from. your only logistic partner.
              </h1>
              <p className="md:text-lg  text-start sm:text-sm text-xm">
                New chip traps clusters of migrating tumor cells
                asperiortenetur, blanditiis odit. typesetting industry the
                standard dummy text ever since the when an printer.
              </p>
              <button
                className="text-xl uppercase   my-4  text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  read more
                </p>
              </button>
            </div>
          </div>
          <div>
            <img src={visiting} alt="image is missing" />
            <div>
              {" "}
              <h1
                style={{ fontFamily: "Oswald" }}
                className="text-[#0b2e42] text-2xl pt-5 pb-3 font-bold"
              >
                At the end of the day, going forward, a new normal that has
                evolved from. your only logistic partner.
              </h1>
              <p className="md:text-lg  text-start sm:text-sm text-xm">
                New chip traps clusters of migrating tumor cells
                asperiortenetur, blanditiis odit. typesetting industry the
                standard dummy text ever since the when an printer.
              </p>
              <button
                className="text-xl uppercase  my-4 text-[#ff8800]"
                style={{ fontFamily: "Rubik" }}
              >
                <p
                  onClick={() => {
                    handleNavigate("home");
                  }}
                >
                  read more
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
