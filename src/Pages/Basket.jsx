import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketData, removeItem, updateQuantity } from "../api/slices/basketSlice";
import { useTranslation } from "react-i18next";
import { GoTrash } from "react-icons/go";
import { PiHandbagLight } from "react-icons/pi";

import DeliveryForm from "../component/DeliveryForm";
import CartItem from "../component/CartItem";
import { Link } from "react-router-dom";
function Basket() {
  const { i18n, t } = useTranslation();
  const cartItems = useSelector(basketData);

  const dispatch = useDispatch();

  return (
    <main className="w-full flex flex-col py-[50px] max-w-[1200px] mx-auto items-center justify-center gap-5 lg:px-0 px-4">
      {cartItems.items.length === 0 ? (
        <>
        <PiHandbagLight className="text-[10vw] mt-[2px]" />
          <h1 className="text-neutral-700  text-center text-xl md:text-3xl font-[590] font-['SF Pro Text']">
            {t("basket_empty")}
          </h1>
          <p className=" font-[510] text-base md:text-lg text-neutral-500 text-center">
          
          </p>
          <Link
            to="/products/0"
            className=" max-w-[350px] flex items-center gap-2 justify-center   py-4 px-8 rounded-full bg-footer_black hover:bg-[#000000cc] text-white transition-all duration-300 font-semibold"
          >
            {t("back")}
          </Link>
        </>
      ) : (
        <div className="w-full">
          <div className=" mb-6 md:mb-16 ">
            <h1 className=" text-4xl sm:text-5xl md:text-6xl font-[590] leading-10 text-center pb-3 md:pb-4">{t("my_busket")}</h1>
           
          </div>
          <div className="flex  sm:px-6 xl:px-0  flex-col lg:flex-row gap-14 w-full">
            <DeliveryForm />
            <div className=" w-full lg:w-1/2 flex flex-col gap-4">
              {cartItems.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row bg-[#fcfcfd] justify-between gap-4 border p-2  md:px-6 md:py-7 rounded-lg md:rounded-3xl"
                >
                  <div className=" flex gap-6">
                    <img
                      src={item.img}
                      width={140}
                      height={140}
                      alt={item.title}
                      className=" w-[120px] h-auto sm:w-[140px] sm:h-[140px] bg-[#C5CAE9]  object-cover rounded-[20px]"
                    />
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <h2 className=" text-base md:text-lg font-montserrat font-[590] text-[#121316]">{item.name}</h2>
                        <p className=" text-sm md:text-[1em] font-montserrat text-[#777e90] leading-6">{item?.brand}</p>
                      </div>
                      <CartItem item={item} />
                    </div>
                  </div>
                  <div className=" flex flex-col justify-between">
                    <div className=" flex gap-2">
                      <div className="  w-6 h-6 md:w-10 md:h-10    rounded-full inline-flex bg-[#F4F5F6]  justify-center items-center ">
                        <button
                          type="button"
                          onClick={() => dispatch(removeItem(item.id))}
                          className=" text-neutral-600 text-base md:text-lg "
                        >
                          <GoTrash />
                        </button>
                      </div>
                    </div>
                    <div className="text-right text-neutral-700 text-base md:text-lg font-[590] font-['SF Pro Text'] leading-7">
                      {(item.price[1] * item.quantity).toFixed(2)}₼
                    </div>
                  </div>
                </div>
              ))}

              <div className=" bg-white border p-2  md:px-6 md:py-4  rounded-lg md:rounded-3xl">
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-gray-500">{t("total")}</span>
                      <span className="text-xl font-semibold">{cartItems.totalPrice} ₼</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 gap-4">
                      <span className="text-gray-500">{t("delivery")}</span>
                      <span className="text-xl font-semibold">0 ₼</span>
                    </div>
                  </div>
                  <span className="border-l h-16"></span>
                  <div className="ml-8 flex gap-4 items-center ">
                    <div className="text-gray-500">{t("total_price")}

                    </div>
                    <div className="text-2xl font-bold">{cartItems.totalPrice} ₼</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link to="/products/1" className="text-gray-600 underline hover:text-gray-900">
                 {t("back")}
                </Link>
                <button className="py-3 px-6 bg-green text-white font-bold rounded-full hover:bg-green-600">
                  {t("place")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Basket;
