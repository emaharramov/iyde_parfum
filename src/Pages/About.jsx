import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[#F8F0F0]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-end py-10 w-[97%] md:w-[90%] gap-3 lg:w-[84%] mx-auto">
          {/* Text Section */}
          <div className="w-full md:w-[50%] lg:w-[40%] flex flex-col justify-between items-start gap-6 lg:gap-8 text-left">
            <h2 className="font-fairy text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-tight">
              {t("home_banner_h2")}
            </h2>
            <p className="font-montserrat text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-7 lg:leading-8 text-[rgb(18, 18, 18)]">
              {t("home_banner1_p")}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] lg:w-[60%] mb-6 lg:mb-0">
            <img className="w-full h-auto object-cover" src="./img/home_img1.png" alt="banner" />
          </div>
        </div>
      </div>
      <div className="w-[97%] md:w-[90%] gap-3 lg:w-[84%] mx-auto">
        <div className="border bg-white border-gray-300 rounded-lg p-8 text-center my-10">
          <h2 className="text-xl md:text-4xl font-[500] font-montserrat mb-4">{t("our_vision_title")}</h2>
          <p className="text-base md:text-2xl font-[400] font-montserrat  text-gray-800">
           {t("our_vision_text")}
          </p>
        </div>
        <div className="border bg-white border-gray-300 rounded-lg p-8 text-center my-10">
          <h2 className="text-xl md:text-4xl font-[500] font-montserrat mb-4">{t("our_vision_title2")}</h2>
          <p className="text-base md:text-2xl font-[400] font-montserrat  text-gray-800">
           {t("our_vision_text2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
