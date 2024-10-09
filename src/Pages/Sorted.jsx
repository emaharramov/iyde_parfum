import React, { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";

const Sorted = ({ onSortOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("From A to Z");

  const options = [
    { value: "AtoZ", label: "From A to Z" },
    { value: "ZtoA", label: "From Z to A" },
    { value: "popularity", label: "Popularity" },
    { value: "cheapToExpensive", label: "Cheap to expensive" },
    { value: "expensiveToCheap", label: "Expensive to cheap" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSortOptionChange(option.value); // Pass the selected option to the parent
  };

  return (
    <div className="relative inline-block w-48 text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-full justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <BsArrowDownUp className="mr-2" />
          {selectedOption}
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-sm text-gray-700"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorted;
