import React, { useEffect, useState } from "react";
import { Modal } from "antd";
function ModalAddToBasket({ setChosen, isModalOpen, handleOk, handleCancel, price, img, name }) {
  console.log(isModalOpen);

  const [count, setCount] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(null); // To track the selected price

  useEffect(() => {
    setChosen((prev) => ({ ...prev, quantity: count }));
  }, [count]);
  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="border  flex rounded-2xl  items-center p-1 md:p-4">
          <img className=" w-14 md:w-24 " src={img} alt="img" />
          <div>
            <h4 className=" font-montserrat text-sm font-semibold mb-1">{name}</h4>
            <div className="flex gap-3">
              {price &&
                Object.entries(price).map((item, i) => (
                  <button
                    onClick={() => {
                        setSelectedPrice(item[0]); // Set the selected price
                        setChosen((prev) => ({ ...prev, price: item }))}}
                    key={i}
                    className={` flex flex-col border p-2 md:py-3 md:px-5 rounded-2xl hover:border-slate-700 cursor-pointer
                        ${selectedPrice === item[0] ? "border-slate-700": "border-slate-300"}`}
                  >
                    <span className="font-[400]">{item[0]} </span>
                    <span className="font-[500] text-base">{item[1]}₼</span>
                  </button>
                ))}
            </div>
            <div className=" mt-4 border border-slate-400 rounded-full w-20 py-[2px] flex font-semibold font-montserrat">
              <button onClick={() => setCount((prev) => Math.min(prev + 1, 10))} className="w-1/3">
                +
              </button>
              <span className="w-1/3 text-center">{count}</span>
              <button onClick={() => setCount((prev) => Math.max(prev - 1, 1))} className="w-1/3">
                -
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalAddToBasket;
