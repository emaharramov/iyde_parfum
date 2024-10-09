import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { CiUser } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { PiHandbagLight } from "react-icons/pi";
import TopNavbar from "./TopNavbar";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { basketData } from "../api/slices/basketSlice";
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const quantityData = useSelector(basketData);

  useEffect(() => {
    console.log(quantityData);
  }, [quantityData]);
  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div div className=" bg-bg_white ">
      <TopNavbar />
      <div className=" flex items-center justify-between w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto">
        <div className=" w-full md:w-[initial] pl-10 md:p-0 flex justify-between md:justify-start items-center gap-6">
          <Link to="/">
            <img className=" w-24 lg:w-32 h-auto" src="/iydee.png" alt="iyde" />
          </Link>
          <SearchBar />
          <div className="md:hidden flex justify-between items-center px-4 py-2">
            <button onClick={toggleHamburgerMenu}>
              {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
        {/* OTHERS */}
        <div className=" fixed bottom-1 left-0 w-full p-3 px-9  md:p-0 md:w-[initial] overflow-hidden md:overflow-visible bg-white md:bg-transparent rounded-full md:rounded-none z-30 md:static flex items-center justify-between md:space-x-8">
          <div className="flex items-center space-x-2 w-1/2 md:w-[initial] justify-around  md:justify-start">
            <div className="flex flex-col items-center justify-between ">
              <PiWhatsappLogoLight className=" text-4xl lg:text-5xl text-green pr-1" />
              <span className="block md:hidden text-[10px] lg:text-sm  lg:font-semibold font-montserrat">Whatsapp</span>
            </div>
            <a
              href="https://wa.me/994555555555"
              target="_blank"
              className=" hidden md:block text-base lg:text-2xl font-montserrat font-semibold hover:text-red duration-200 underline   border-l  pl-4 py-1  border-slate-400"
            >
              +994 55 555 55 55
            </a>
            <div className="flex flex-col items-center justify-between ">
              <MdOutlineCall className="md:hidden text-3xl text-green" />
              <span className=" block md:hidden text-[10px] lg:text-sm  lg:font-semibold font-montserrat">Call</span>
            </div>
          </div>

          <div className="flex items-center  w-1/2 md:w-[initial] justify-around md:justify-start space-x-6">
            <div className=" hover_pink flex flex-col items-center justify-between ">
              <Link to="/login">
                <CiUser className=" text-3xl lg:text-5xl" />
                <span className=" text-[10px] lg:text-sm  lg:font-semibold font-montserrat">{t("signin")} </span>
              </Link>
            </div>

            <div className=" hover_pink relative flex flex-col items-center ">
              <Link to="/basket">
                <PiHandbagLight className=" text-3xl lg:text-5xl  " />
                <span className=" text-[10px] lg:text-sm  lg:font-semibold font-montserrat">{t("basket")}</span>
              </Link>
              <div className="absolute -top-1 -right-1 md:-top-3 md:-right-2 font-semibold flex items-center justify-center w-5 h-5 md:w-7 md:h-7 bg-green p-1 text-white bg-green-500 rounded-full text-sm md:text-[18px]">
                {quantityData.totalQuantity > 0 ? quantityData.totalQuantity : 0}
              </div>
            </div>
          </div>
        </div>
        {/* OTHERS */}
      </div>
      <DropdownMenu toggleHamburgerMenu={toggleHamburgerMenu} isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default Navbar;
