import React from "react";
import { Link } from "react-router-dom";

function Category({ color, name, img, size }) {
  return (
    <Link to={`/products/${name}`} className={` h-[40vh] md:h-[60vh] overflow-hidden  py-12 px-10 relative  ${color}`}>
      <h3 className=" font-montserrat text-[32px] leading-10 font-semibold">{name}</h3>
      <img className={`   absolute bottom-0 right-10 md:right-3 hover:scale-125 transition-all duration-500 ${size}`} src={img} alt="man" />
    </Link>
  );
}

export default Category;
