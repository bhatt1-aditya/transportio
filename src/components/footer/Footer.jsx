import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 pb-20 pt-10 text-[#0b2e42]   xl:px-40 lg:px-20 md:px-16 sm:px-10 px-5 bg-[#e8e8e8]  ">
        <div className="mb-5">
          <h1
            className="sm:text-4xl font-semibold tracking-wide  text-3xl"
            style={{ fontFamily: "Oswald" }}
          >
            Transportio
          </h1>
          <p className="text-base  my-4" style={{ fontFamily: "Rubik" }}>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipisicing elit. Quia <br />
            nisi rem odit repellendus, soluta <br />
            vitae.
          </p>
          <ul className="flex flex-row gap-5 text-white ">
            <li className=" bg-[#184e6d] p-3">
              <FaFacebook />
            </li>
            <li className=" bg-[#184e6d] p-3">
              <FaTwitter />
            </li>
            <li className=" bg-[#184e6d] p-3">
              <FaInstagram />
            </li>
            <li className=" bg-[#184e6d] p-3">
              <CiYoutube />
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <h1
            className=" tracking-wide text-3xl"
            style={{ fontFamily: "Rubik" }}
          >
            Quick Links
          </h1>
          <ul
            className="flex flex-col gap-2 pt-4"
            style={{ fontFamily: "Rubik" }}
          >
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="mb-5">
          <h1
            className=" tracking-wide text-3xl"
            style={{ fontFamily: "Rubik" }}
          >
            Services
          </h1>
          <ul
            className="flex flex-col gap-2 pt-4"
            style={{ fontFamily: "Rubik" }}
          >
            <li>Warehouse</li>
            <li>Air Freight</li>
            <li>Ocean Freight</li>
            <li>Road Freight</li>
            <li>Packaging</li>
          </ul>
        </div>
        <div className="mb-5">
          <h1
            className=" tracking-wide text-3xl"
            style={{ fontFamily: "Rubik" }}
          >
            Community
          </h1>
          <ul
            className="flex flex-col gap-2 pt-4"
            style={{ fontFamily: "Rubik" }}
          >
            <li>Business Consulting</li>
            <li>Testimonials</li>
            <li>Track Your Shipment</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </div>
      <h1 className="text-center">© 2023 Transportio. All Rights Reserved.</h1>
    </div>
  );
}

export default Footer;
