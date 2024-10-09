// import React from "react";

// import { useGetDataQuery } from "../api/slices/data";

// const CategoryFilter = ({ handleCategorySelection, selectedCategory }) => {
//   const { data, isLoading, error } = useGetDataQuery();

//   const filteredcategory = data ? [...new Set(data.en.map((item) => item.category))] : [];
//   return (
//     <div className="p-4">
//       <h3 className="font-semibold text-lg mb-4">Categories</h3>

//       {isLoading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error loading Categories</div>
//       ) : (
// <ul className="space-y-3">
//   {filteredcategory.map((category, index) => (
//     <li key={index} className="flex items-center">
//       <input
//         type="checkbox"
//         className="mr-2"
//         id={`category-${index}`}
//         checked={selectedCategory.includes(category)}
//         onChange={() => handleCategorySelection(category)}
//       />
//       <label
//         htmlFor={`category-${index}`}
//         className="cursor-pointer hover:text-red font-montserrat font-[400] text-[17px] transition duration-200"
//       >
//         Perfumes for {category}
//       </label>
//     </li>
//   ))}
// </ul>
//       )}
//     </div>
//   );
// };

// export default CategoryFilter;

import React, { useState } from "react";
import { useGetDataQuery } from "../api/slices/data";

const CategoryFilter = ({ handleCategorySelection, selectedCategory }) => {
  const { data, isLoading, error } = useGetDataQuery();
  const [isOpen, setIsOpen] = useState(false); // Accordion state

  const filteredCategory = data ? [...new Set(data.en.map((item) => item.category))] : [];

  return (
    <div>
      <div className="p-4 hidden md:block">
        <h3 className="font-semibold text-lg">Categories</h3>
        <ul className="space-y-3">
          {filteredCategory.map((category, index) => (
            <li key={index} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                id={`category-${index}`}
                checked={selectedCategory.includes(category)}
                onChange={() => handleCategorySelection(category)}
              />
              <label
                htmlFor={`category-${index}`}
                className="cursor-pointer hover:text-red font-montserrat font-[400] text-[17px] transition duration-200"
              >
                Perfumes for {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 block md:hidden">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Categories</h3>
          <button onClick={() => setIsOpen(!isOpen)} className="text-sm font-semibold text-gray-600">
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        {isOpen && (
          <div className="h-[200px] overflow-auto">
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error loading Categories</div>
            ) : (
              <ul className="space-y-3">
                {filteredCategory.map((category, index) => (
                  <li key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      id={`category-${index}`}
                      checked={selectedCategory.includes(category)}
                      onChange={() => handleCategorySelection(category)}
                    />
                    <label
                      htmlFor={`category-${index}`}
                      className="cursor-pointer hover:text-red font-montserrat font-[400] text-[17px] transition duration-200"
                    >
                      Perfumes for {category}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
