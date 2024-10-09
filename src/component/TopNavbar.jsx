import React from "react";
import { useTranslation } from "react-i18next";
import { PiFacebookLogo, PiMusicNoteSimpleThin, PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi";

function TopNavbar() {
  const { t, i18n } = useTranslation();
  async function setLanguage(lang) {
    localStorage.setItem("i18Next", lang);
    await i18n.changeLanguage(lang);
  }
  return (
    <div className="border-b py-1 hidden md:block">
      <div className="top_navbar flex justify-between items-center w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-1  mx-auto">
        <div className="flex  gap-2 items-center">
          <PiFacebookLogo className=" text-[18px]  text-gray-600 hover:text-red duration-150" />
          <PiInstagramLogoThin className=" text-[18px]   text-gray-600 hover:text-red duration-150" />
          <PiYoutubeLogoThin className=" text-[18px]  text-gray-600 hover:text-red duration-150" />
          <PiMusicNoteSimpleThin className=" text-[18px]  text-gray-600 hover:text-red duration-150" />
        </div>
        <div className="flex gap-2 items-center ">
          <span
            onClick={() => setLanguage("en")}
            className=" text-[14px] font-[510]  font-montserrat text-gray-600 border-r py-0 pr-2 border-slate-400 hover:text-red duration-150 cursor-pointer"
          >
            en
          </span>
          <span
            onClick={() => setLanguage("ru")}
            className="text-[14px] font-[510] font-montserrat   text-gray-600 border-r py-0 pr-2 border-slate-400  hover:text-red duration-150 cursor-pointer"
          >
            ru
          </span>
          <span
            onClick={() => setLanguage("az")}
            className=" text-[14px] font-[510] font-montserrat  text-gray-600 py-0 pr-1 hover:text-red duration-150 cursor-pointer"
          >
            az
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
