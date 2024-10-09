// import React from "react";

// const PriceFilter = ({ handlePriceSelection }) => {
//   return (
// <div className="p-4">
//   <h3 className="font-semibold text-lg mb-4">Price</h3>
//   <ul className="space-y-3">
//     <li className="flex items-center">
//       <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("0-50")} />
//       <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
//         0 - 50 ₼
//       </label>
//     </li>
//     <li className="flex items-center">
//       <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("50-100")} />
//       <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
//         50 - 100 ₼
//       </label>
//     </li>
//     <li className="flex items-center">
//       <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("100-200")} />
//       <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
//         100 - 200 ₼
//       </label>
//     </li>
//     <li className="flex items-center">
//       <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("all")} />
//       <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
//         All perfumes
//       </label>
//     </li>
//   </ul>
// </div>
//   );
// };

// export default PriceFilter;

import React, { useState } from "react";

const PriceFilter = ({ handlePriceSelection }) => {
  const [isOpen, setIsOpen] = useState(false); // Accordion state

  return (
    <div>
      <div className="p-4 hidden md:block">
        <h3 className="font-semibold text-lg mb-4">Price</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("0-50")} />
            <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
              0 - 50 ₼
            </label>
          </li>
          <li className="flex items-center">
            <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("50-100")} />
            <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
              50 - 100 ₼
            </label>
          </li>
          <li className="flex items-center">
            <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("100-200")} />
            <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
              100 - 200 ₼
            </label>
          </li>
          <li className="flex items-center">
            <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("all")} />
            <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
              All perfumes
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4  md:hidden">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Price</h3>
          <button onClick={() => setIsOpen(!isOpen)} className="text-sm font-semibold text-gray-600">
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        {isOpen && (
          <ul className="space-y-3">
            <li className="flex items-center">
              <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("0-50")} />
              <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
                0 - 50 ₼
              </label>
            </li>
            <li className="flex items-center">
              <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("50-100")} />
              <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
                50 - 100 ₼
              </label>
            </li>
            <li className="flex items-center">
              <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("100-200")} />
              <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
                100 - 200 ₼
              </label>
            </li>
            <li className="flex items-center">
              <input type="radio" className="mr-2 mt-1" name="price" onChange={() => handlePriceSelection("all")} />
              <label className="cursor-pointer hover:text-red transition font-montserrat font-[400] text-[17px] duration-200">
                All perfumes
              </label>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default PriceFilter;
