import React from "react";
import { RiStarFill, RiStarLine } from "react-icons/ri";

function Stars() {
  return (
    <div className=" flex">
      <RiStarFill className="text-[#CCCCCC]" />
      <RiStarFill className="text-[#CCCCCC]" />
      <RiStarFill className="text-[#CCCCCC]" />
      <RiStarFill className="text-[#CCCCCC]" />
      <RiStarLine className="text-[#CCCCCC]" />
    </div>
  );
}

export default Stars;
