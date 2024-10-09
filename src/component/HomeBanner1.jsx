

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HomeBanner1() {
  const { t } = useTranslation();
  return (
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
          <Link to="/about" className="font-montserrat text-[15px] md:text-[17px] font-semibold leading-5 underline p-1" href="#">
            {t("more")}
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] lg:w-[60%] mb-6 lg:mb-0">
          <img className="w-full h-auto object-cover" src="./img/home_img1.png" alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner1;
