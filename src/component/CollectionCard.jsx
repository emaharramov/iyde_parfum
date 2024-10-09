import React from "react";
import { Link } from "react-router-dom";

function CollectionCard({ color, img, name, id }) {
  return (
    <Link to={`/product/${id}`} className={` px-4 py-8 hover_show  flex flex-col justify-between ${color} `}>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="flex justify-end">
        <img className="w-[120px] object-cover" src={img} alt="Khan Perfume" />
      </div>
    </Link>
  );
}

export default CollectionCard;
