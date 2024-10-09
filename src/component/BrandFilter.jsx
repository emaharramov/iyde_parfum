// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useGetDataQuery } from "../api/slices/data";

// const BrandFilter = ({ selectedBrands, handleBrandSelection }) => {
//   const { t } = useTranslation();
//   const { data, isLoading, error } = useGetDataQuery();
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };
//   const filteredBrands = data
//     ? [...new Set(data.en.map((item) => item.brand))].filter((brand) => brand.toLowerCase().includes(searchTerm))
//     : [];
//   return (
// <div className="p-4">
//   <h3 className="font-semibold text-lg mb-4">{t("brands")}</h3>
//   <div className="relative mb-4">
//     <input
//       type="text"
//       placeholder={t("brand_search_placeholder")}
//       value={searchTerm}
//       onChange={handleSearch}
//       className="w-full py-3 pl-4 pr-10 text-sm border rounded-lg outline-none"
//     />
//     <button className="absolute inset-y-0 right-4 flex items-center pr-3">
//       <svg
//         className="w-5 h-5 text-gray-600"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M21 21l-4.35-4.35M3 10.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
//         />
//       </svg>
//     </button>
//   </div>

//   {isLoading ? (
//     <div>Loading...</div>
//   ) : error ? (
//     <div>Error loading brands</div>
//   ) : (
//     <ul className="space-y-3">
//       {filteredBrands.map((brand, index) => (
//         <li key={index} className="flex items-center">
//           <input
//             type="checkbox"
//             className="mr-2"
//             id={`brand-${index}`}
//             checked={selectedBrands.includes(brand)}
//             onChange={() => handleBrandSelection(brand)}
//           />
//           <label
//             htmlFor={`brand-${index}`}
//             className="cursor-pointer hover:text-red font-montserrat font-[400] text-[17px] transition duration-200"
//           >
//             {brand}
//           </label>
//         </li>
//       ))}
//     </ul>
//   )}
// </div>
//   );
// };

// export default BrandFilter;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetDataQuery } from "../api/slices/data";

const BrandFilter = ({ selectedBrands, handleBrandSelection }) => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetDataQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Accordion state

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBrands = data
    ? [...new Set(data.en.map((item) => item.brand))].filter((brand) => brand.toLowerCase().includes(searchTerm))
    : [];

  return (
    <div>
      <div className="p-4 hidden md:block">
        <h3 className="font-semibold text-lg mb-4">{t("brands")}</h3>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder={t("brand_search_placeholder")}
            value={searchTerm}
            onChange={handleSearch}
            className="w-full py-3 pl-4 pr-10 text-sm border rounded-lg outline-none"
          />
          <button className="absolute inset-y-0 right-4 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M3 10.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
              />
            </svg>
          </button>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading brands</div>
        ) : (
          <ul className="space-y-3">
            {filteredBrands.map((brand, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  id={`brand-${index}`}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandSelection(brand)}
                />
                <label
                  htmlFor={`brand-${index}`}
                  className="cursor-pointer hover:text-red font-montserrat font-[400] text-[17px] transition duration-200"
                >
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4  block md:hidden rounded-lg">
        <div className="flex justify-between items-center py-2">
          <h3 className="font-semibold text-lg">{t("brands")}</h3>
          <button onClick={() => setIsOpen(!isOpen)} className="text-sm font-semibold text-gray-600">
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        {isOpen && (
          <div className=" absolute z-10 w-full bg-white left-0">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder={t("brand_search_placeholder")}
                value={searchTerm}
                onChange={handleSearch}
                className="w-full py-3 pl-4 pr-10 text-sm border rounded-lg outline-none"
              />
              <button className="absolute inset-y-0 right-4 flex items-center pr-3">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M3 10.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="h-[200px] overflow-auto">
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error loading brands</div>
              ) : (
                <ul className="space-y-3">
                  {filteredBrands.map((brand, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        id={`brand-${index}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandSelection(brand)}
                      />
                      <label
                        htmlFor={`brand-${index}`}
                        className="cursor-pointer hover:text-red font-montserrat font-[400] text-[17px] transition duration-200"
                      >
                        {brand}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandFilter;
