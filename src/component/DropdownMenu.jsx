import React, { useEffect, useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import { useGetDataQuery } from "../api/slices/data";
import { Link } from "react-router-dom";
<LiaAngleDownSolid />;
const DropdownMenu = ({ toggleHamburgerMenu, isMenuOpen }) => {
  const { i18n, t } = useTranslation();
  const { data, isLoading, error } = useGetDataQuery();
  const [language, setLanguage] = useState(i18n.language);
  const [activeMenu, setActiveMenu] = useState(null);
  const [filteredData, setFilteredData] = useState({
    collection: [],
    category: [],
    names: [],
  });
  const [groupedBrands, setGroupedBrands] = useState({});

  const groupByFirstLetter = (data) => {
    return data.reduce((acc, item) => {
      const firstLetter = item.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(item);
      return acc;
    }, {});
  };

  useEffect(() => {
    if (data) {
      const collections = [...new Set(data[language].map((item) => item.collection))];
      setFilteredData((prev) => ({ ...prev, collection: [...collections] }));
      const categories = [...new Set(data[language].map((item) => item.category))];
      setFilteredData((prev) => ({ ...prev, category: [...categories] }));
      const groupedData = groupByFirstLetter(data[language]);
      setGroupedBrands(groupedData);
    }
  }, [data, language]);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Dropdown veya buton dışında bir alana tıklanmışsa menüyü kapat
      if (!event.target.closest(".dropdown-button") && !event.target.closest(".dropdown-menu")) {
        setActiveMenu(null);
      }
    };

    if (window.innerWidth > 768) {
      document.addEventListener("mouseover", handleClickOutside);
    }

    return () => {
      if (window.innerWidth > 768) {
        document.removeEventListener("mouseover", handleClickOutside);
      }
    };
  }, [activeMenu]);
  if (isLoading) return <div>{t("loading")}</div>;
  if (error) return <div>{t("error_loading_data")}</div>;

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full bg-white w-[80%] z-50 p-4 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => toggleMenu("etirler")}
              className="flex items-center justify-between w-full text-[20px] font-montserrat"
            >
              {t("perfumes")}
              <LiaAngleDownSolid />
            </button>
            {activeMenu === "etirler" && (
              <ul className="pl-4 space-y-2">
                {filteredData.collection.map((item, i) => (
                  <li key={i}>
                    <Link className="text-[15px] font-montserrat" key={item} to={`/products/${item}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleMenu("brendler")}
              className="flex items-center justify-between w-full text-[20px] font-montserrat"
            >
              {t("brands")}
              <LiaAngleDownSolid />
            </button>
            {activeMenu === "brendler" && (
              <ul className="pl-4 space-y-2">
                {Object.keys(groupedBrands)
                  .sort()
                  .map((letter) => (
                    <div key={letter}>
                      <h2 className="text-[15px] font-montserrat">{letter}</h2>
                      <ul>
                        {groupedBrands[letter].map((brand, index) => (
                          <li key={index}>
                            <Link className="text-[14px] font-montserrat" to={`/product/${brand.name}`}>
                              {brand.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleMenu("iyde")}
              className="flex items-center justify-between w-full text-[20px] font-montserrat"
            >
              {t("iyde_perfumery")}
              <LiaAngleDownSolid />
            </button>
            {activeMenu === "iyde" && (
              <ul className="pl-4 space-y-2 text-[14px] font-montserrat">
                <li>
                  {" "}
                  <Link to="/about">{t("about_company")}</Link>
                </li>
                <li>{t("gift_cards")}</li>
                <li>{t("gift_packages")}</li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer flex items-center justify-between w-full text-[20px] font-montserrat">
            <Link to="/stores">{t("stores")}</Link>
          </li>
          <li className="cursor-pointer flex items-center justify-between w-full text-[20px] font-montserrat">
            <Link to="/blogs">{t("blog")}</Link>
          </li>
          <li>
            <button
              onClick={() => toggleMenu("destek")}
              className="flex items-center justify-between w-full text-[20px] font-montserrat"
            >
              {t("support")}
              <LiaAngleDownSolid />
            </button>
            {activeMenu === "destek" && (
              <ul className="pl-4 space-y-2 text-[14px] font-montserrat">
                <li className=" font-montserrat cursor-pointer">
                  <Link to="/contact">{t("contact_us")}</Link>
                </li>
                <li className=" font-montserrat cursor-pointer">
                  <Link to="/others/how_to_order">{t("how_to_order")}</Link>
                </li>
                <li className=" font-montserrat cursor-pointer">
                  <Link to="/others/delivery">{t("delivery")}</Link>
                </li>
                <li className=" font-montserrat cursor-pointer">
                  <Link to="/others/payment">{t("payment")}</Link>
                </li>
                <li className=" font-montserrat cursor-pointer">
                  <Link to="/others/loyalty_program">{t("loyalty_program")}</Link>
                </li>
                <li className=" font-montserrat cursor-pointer">
                  <Link to="/others/faq">{t("faq")}</Link>
                </li>
                <li className=" font-montserrat cursor-pointer">
                  <Link to="/others/privacy_policy">{t("privacy_policy")}</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className=" hidden w-full md:flex  relative">
        <div className="flex w-full  pb-2 justify-center items-center ">
          <div>
            <button
              onMouseOver={() => toggleMenu("etirler")}
              className="dropdown-button  px-4 py-4 font-fairy uppercase font-[500] text-[18px] leading-4 flex items-center gap-2 "
            >
              {t("perfumes")}
              <LiaAngleDownSolid className=" text-base" />
            </button>
          </div>

          <div>
            <button
              onMouseOver={() => toggleMenu("brendler")}
              className=" dropdown-button px-4 py-2 font-fairy uppercase font-[500] text-[18px] leading-4 flex items-center gap-2 "
            >
              {t("brands")}
              <LiaAngleDownSolid className=" text-base" />
            </button>
          </div>

          <div className=" relative">
            <button
              onMouseOver={() => toggleMenu("iyde")}
              className="dropdown-button px-4 py-2  font-fairy uppercase font-[500] text-[18px] leading-4 flex items-center gap-2"
            >
              {t("iyde_perfumery")}
              <LiaAngleDownSolid className=" text-base" />
            </button>
            {activeMenu === "iyde" && (
              <div className="dropdown-menu md:min-w-[200px] h-auto absolute  bg-white rounded-xl z-20 top-[100%] left-0 px-4 py-2">
                <ul>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/about">{t("about_company")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    {t("gift_cards")}
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    {t("gift_packages")}
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    {t("create_your_perfume")}
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    {t("special_perfumes")}
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    {t("discount_cards")}
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button className="px-4 py-2  font-fairy uppercase font-[500] text-[18px] leading-4">
            <Link to="/stores">{t("stores")}</Link>
          </button>
          <button className="px-4 py-2  font-fairy uppercase font-[500] text-[18px] leading-4">
            <Link to="/blogs">{t("blog")}</Link>
          </button>

          <div className="relative">
            <button
              onMouseOver={() => toggleMenu("destek")}
              className="dropdown-button px-4 py-2   font-fairy uppercase font-[500] text-[18px] leading-4 flex items-center gap-2"
            >
              {t("support")}
              <LiaAngleDownSolid className=" text-base" />
            </button>
            {activeMenu === "destek" && (
              <div className="dropdown-menu md:min-w-[200px] absolute  bg-white rounded-xl z-20 left-0 px-4 py-1">
                <ul>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/contact">{t("contact_us")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/others/how_to_order">{t("how_to_order")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/others/delivery">{t("delivery")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/others/payment">{t("payment")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/others/loyalty_program">{t("loyalty_program")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/others/faq">{t("faq")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat cursor-pointer">
                    <Link to="/others/privacy_policy">{t("privacy_policy")}</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className=" absolute dropdown-menu  z-10 left-0  w-full top-[40px] py-2 bg-white ">
            {activeMenu === "etirler" && (
              <div className="dropdown-menu flex   gap-7 w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%]  lg:py-4 mx-auto">
                <div>
                  <h4 className=" pl-4 font-montserrat text-[18px] font-semibold leading-6 uppercase mb-5">
                    {t("home_collection_h2")}
                  </h4>
                  <ul>
                    {filteredData.collection.map((item, i) => (
                      <li key={i} className="px-4 py-2 hover_pink text-base font-[500] font-montserrat">
                        <Link key={item} to={`/products/${item}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                    <li className="px-4 py-2 hover_pink text-base font-[500] font-montserrat">Qarabağ</li>
                    <li className="px-4 py-2 hover_pink text-base font-[500] font-montserrat">Sport</li>
                    <li className="px-4 py-2 hover_pink text-base font-[500] font-montserrat">Baku</li>
                  </ul>
                </div>
                <div>
                  <h4 className=" pl-4 font-montserrat text-[18px] font-semibold leading-6 uppercase mb-5">{t("perfumes")}</h4>
                  <ul>
                    {filteredData.category.map((item) => (
                      <li key={item} className="px-4 py-2 hover_pink text-base font-[500] font-montserrat">
                        <Link to={`/products/${item}`}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className=" pl-4 font-montserrat text-[18px] font-semibold leading-6 uppercase mb-5">
                    {t("car_fragrances")}
                  </h4>
                  <ul>
                    <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat">{t("rudder")}</li>
                    <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat">
                      {t("romantik")}
                    </li>
                    <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat">{t("secret")}</li>
                    <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat">{t("envy")}</li>
                    <li className="px-4 py-2 hover:text-red duration-300 text-base font-[500] font-montserrat">{t("mery")}</li>
                  </ul>
                </div>
              </div>
            )}
            {activeMenu === "brendler" && (
              <div className="dropdown-menu flex gap-7 w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto">
                {Object.keys(groupedBrands)
                  .sort()
                  .map((letter) => (
                    <div key={letter} className="mr-8">
                      <h2 className=" font-montserrat text-[12px] font-semibold  leading-4 text-red">{letter}</h2>
                      <ul>
                        {groupedBrands[letter].map((brand, index) => (
                          <li className=" text-[12px] font-semibold leading-4 font-montserrat" key={index}>
                            <Link to={`/product/${brand.name}`}> {brand.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DropdownMenu;
