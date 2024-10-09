
// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useGetDataQuery } from "../api/slices/data";
// import { Link } from "react-router-dom";

// const SearchBar = () => {
//   const { t, i18n } = useTranslation();
//   const { data } = useGetDataQuery();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [language, setLanguage] = useState(i18n.language);
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     if (term.length > 0) {
//       const results = data[language].filter((item) => item.name.toLowerCase().includes(term)).map((item) => item.name);
//       setFilteredResults(results);
//     } else {
//       setFilteredResults([]);
//     }
//   };

//   return (
//     <div className="flex relative items-center justify-center flex-col">
//       <div className="relative w-[30vw]">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder={t("input_message")}
//           className="w-full py-3 pl-4 pr-10 text-sm border font-montserrat  border-footer_black rounded-full  outline-none"
//         />
//         <button className="absolute inset-y-0 right-4 flex items-center pr-3">
//           <svg
//             className="w-5 h-5 text-gray-600 hover:text-red duration-150"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-4.35-4.35M3 10.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
//             />
//           </svg>
//         </button>
//       </div>

      
//       {filteredResults.length > 0 && (
//         <div className="mt-2 absolute top-[100%] z-30 w-[30vw] bg-white shadow-lg rounded-lg max-h-60 overflow-auto">
//           <ul>
//             {filteredResults.map((result, index) => (
//               <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                 <Link to={`/product/${result}`}>{result}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetDataQuery } from "../api/slices/data";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { t, i18n } = useTranslation();
  const { data } = useGetDataQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [language, setLanguage] = useState(i18n.language);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const results = data[language].filter((item) => item.name.toLowerCase().includes(term)).map((item) => item.name);
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleResultClick = () => {
    // Arama kutusunu sıfırlama
    setSearchTerm("");
    // Filtrelenmiş sonuçları sıfırlama
    setFilteredResults([]);
  };

  return (
    <div className="flex relative items-center justify-center flex-col">
      <div className="relative w-[30vw]">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder={t("input_message")}
          className="w-full py-3 pl-4 pr-10 text-sm border font-montserrat border-footer_black rounded-full outline-none"
        />
        <button className="absolute inset-y-0 right-4 flex items-center pr-3">
          <svg
            className="w-5 h-5 text-gray-600 hover:text-red duration-150"
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

      {filteredResults.length > 0 && (
        <div className="mt-2 absolute top-[100%] z-30 w-[30vw] bg-white shadow-lg rounded-lg max-h-60 overflow-auto">
          <ul>
            {filteredResults.map((result, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to={`/product/${result}`} onClick={handleResultClick}>
                  {result}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

