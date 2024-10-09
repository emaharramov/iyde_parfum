import React from "react";
import { MdOutlineCall } from "react-icons/md";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const {t}=useTranslation()
  console.log(t);
  
  return (
    <div className="flex flex-col items-center space-y-8 my-10">
      {/* Contact Information */}
      <div className="text-center">
        <h2 className=" text-base font-semibold md:text-3xl font-fairy uppercase">{t("contact_us")}</h2>
        <p className="mt-2 text-gray-700 text-2xl font-montserrat">
         {t("our")}<span className="font-semibold">from 09:00 to 22:00</span>
        </p>
      </div>

      {/* Contact Methods */}
      <div className="flex justify-center flex-wrap gap-20">
        <div className="text-center flex flex-col justify-center items-center">
          <PiWhatsappLogoLight className=" text-4xl md:text-7xl text-green pr-1" />
          <p className="mt-2 text-[12px] font-[600] leading-7 md:text-[24px]">+994 50 820 55 55</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <MdOutlineCall className=" text-4xl md:text-6xl text-green pr-1" />

          <p className="mt-2 text-[12px] font-[600] leading-7 md:text-[24px]">+994 50 820 55 55</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <FaRegEnvelope className=" text-4xl md:text-6xl text-red pr-1" />
          <p className="mt-2 text-[12px] font-[600] leading-7 md:text-[24px]">info@iyde.az</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%]  lg:py-4 mx-auto py-5">
        <h3 className="text-base font-semibold md:text-3xl font-fairy text-center">{t("doyo")}</h3>
        <form className="mt-8 space-y-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <textarea
              type="text"
              placeholder="Your question"
              className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          
          
          <button type="submit" className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
           {t("send")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
