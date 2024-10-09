import React from "react";

function Parameters({selectedProduct}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center text-base md:text-xl gap-4 md:gap-8 text-gray-800 mt-8 px-4">
      <div className="space-y-4">
        <div>
          <span className="font-semibold">Published date: </span>
          <span>{selectedProduct.date}</span>
        </div>
        <div>
          <span className="font-semibold">Brand: </span>
          <a href="#" className="underline hover:text-blue-500">
            {selectedProduct.brand}
          </a>
        </div>
        <div>
          <span className="font-semibold">Gender: </span>
          <a href="#" className="underline hover:text-blue-500">
            {selectedProduct.category}
          </a>
        </div>
        <div>
          <span className="font-semibold">Perfumer: </span>
          <a href="#" className="underline hover:text-blue-500">
            Iyde Parfum
          </a>
        </div>
        <div>
          <span className="font-semibold">Season: </span>
          <a href="#" className="underline hover:text-blue-500">
            {selectedProduct.season}
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <span className="font-semibold">Groups: </span>
          {selectedProduct.group.map((item, index) => (
            <a key={index} href="#" className="underline hover:text-blue-500 mr-2">
              {item}
            </a>
          ))}
        </div>
        <div>
          <span className="font-semibold">Top notes: </span>
          <a href="#" className="underline hover:text-blue-500 mr-2">
            Mandarin Orange
          </a>
          <a href="#" className="underline hover:text-blue-500">
            Red Apple
          </a>
        </div>
        <div>
          <span className="font-semibold">Heart notes: </span>
          <a href="#" className="underline hover:text-blue-500 mr-2">
            Violet
          </a>
          <a href="#" className="underline hover:text-blue-500">
            Leather
          </a>
        </div>
        <div>
          <span className="font-semibold">Base notes: </span>
          <a href="#" className="underline hover:text-blue-500 mr-2">
            Vanilla
          </a>
          <a href="#" className="underline hover:text-blue-500 mr-2">
            Ambergris
          </a>
          <a href="#" className="underline hover:text-blue-500 mr-2">
            Oak
          </a>
          <a href="#" className="underline hover:text-blue-500">
            Labdanum
          </a>
        </div>
        <div>
          <span className="font-semibold">Day/Night: </span>
          <a href="#" className="underline hover:text-blue-500">
            {selectedProduct.dayNight}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Parameters;
