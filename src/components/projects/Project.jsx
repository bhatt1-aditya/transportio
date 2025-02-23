import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../../constants";
function Project() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen bg-[#6c34af]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => {
            return (
              <SwiperSlide key={item.title}>
                <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h[400px] lg:w-[350px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"></div>
                  <div className="relative flex flex-col gap-3">
                    <item.icon className="text-blue-600 group-hover:text-blue-400 w[32px] h-[32px]" />
                    <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                    <p className="lg:text-[18px]">{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Project;
