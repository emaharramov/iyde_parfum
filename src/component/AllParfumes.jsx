import React, { useState } from "react";
import { useGetDataQuery } from "../api/slices/data";
import { useTranslation } from "react-i18next";
import { PiHandbagLight } from "react-icons/pi";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./../css/homeSlider.css";

import { Autoplay, Pagination } from "swiper/modules";
function AllParfumes() {
  const [selected, setSelected] = useState("new");
  const {t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const { data } = useGetDataQuery();
  return (
    <div className=" bg-bg_grey">
      <div className="flex flex-col items-center justify-center py-12">
        <a href="#" className="underline text-black text-[17px] font-montserrat font-semibold mb-4">
         {t("all")}
        </a>
        <h2 className="font-fairy text-3xl md:text-4xl font-semibold mb-8 uppercase">{t("select")}</h2>
        <div className="flex border rounded-full overflow-hidden">
          <button
            className={`px-8 py-4 text-sm rounded-full duration-300 font-montserrat font-semibold transition-all ${
              selected === "new" ? "bg-black text-white" : "bg-transparent text-black"
            }`}
            onClick={() => setSelected("new")}
          >
            New
          </button>
          <button
            className={`px-8 py-4 font-montserrat rounded-full duration-300 text-sm font-semibold transition-all ${
              selected === "popular" ? "bg-black text-white" : "bg-transparent text-black"
            }`}
            onClick={() => setSelected("popular")}
          >
            Popular
          </button>
        </div>
      </div>

      <div className="w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {data &&
            data[language]
              .filter((item) => item.like_group === selected)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    key={item.id}
                    className=" mx-auto  h-[400px] rounded-xl flex flex-col justify-between shadow-md overflow-hidden"
                  >
                    <div className=" relative  overflow-hidden bg-white p-6">
                      <button
                        onClick={() => addToBasket(item.id)}
                        className={` absolute top-2 left-2 flex items-center gap-2 justify-center py-2 capitalize  px-3 rounded-full  text-white text-sm font-semibold z-10 ${
                          selected === "new" ? "bg-green" : "bg-blue-500"
                        }`}
                      >
                        {selected}
                      </button>
                      <Link to={`/product/${item.id}`}>
                        <img
                          className=" hover:scale-105 transition duration-300 w-full object-cover"
                          src={item.img}
                          alt={item.name}
                        />
                      </Link>
                    </div>
                    <div className="p-4 text-left">
                      <div className="text-lg font-semibold text-gray-900">
                        {Object.values(item.price)[0]}₼-
                        {Object.values(item.price)[3]}₼
                      </div>
                      <div className="text-gray-700 mt-1 font-montserrat font-semibold text-sm">{item.name}</div>
                      <div className="mt-2">
                        <Stars />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

          <div className="custom-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default AllParfumes;
