import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../api/slices/data";
import { PiHandbagLight } from "react-icons/pi";
import Stars from "./../component/Stars";
import { useDispatch } from "react-redux";
import { addItem } from "../api/slices/basketSlice";

import Parameters from "./../component/Parameters";
const imgs = ["./../public/img/15ml.png", "./../public/img/30ml.png", "./../public/img/50.png", "./../public/img/100ml.png"];
function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const { data, isLoading, error } = useGetDataQuery();
  const [language, setLanguage] = useState(i18n.language);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState("15ml");

  console.log(data);

  function addItemToBasket() {
    console.log(selectedProduct);

    dispatch(
      addItem({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedPrice,
        collection: selectedProduct.collection,
        category: selectedProduct.category,
        date: selectedProduct.date,
        brand: selectedProduct.brand,
        season: selectedProduct.season,
        dayNight: selectedProduct.dayNight,
        group: selectedProduct.group,
        img: selectedProduct.img,
        quantity: count,
      })
    );
    setCount(1);
  }

  useEffect(() => {
    if (data && !isLoading) {
      const product = data[language].find((item) => item.id === parseInt(id) || item.name === id);

      if (product) {
        setSelectedProduct(product);
      } else {
        console.error("Product not found");
      }
    }
  }, [id, data, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <div className=" my-10 w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto">
      <h4 className=" font-montserrat text-[32px] font-bold ">{selectedProduct?.name}</h4>
      <div className="flex items-center gap-4 mb-5 ">
        <Stars />
        <h4 className=" font-montserrat text-gray-400 text-[18px] font-[500] ">{selectedProduct?.brand}</h4>
      </div>
      {selectedProduct ? (
        <div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className=" w-full md:w-1/2">
              {/* <div className=" h-[80vh] mt-16 lg:mt-0  bg-white border rounded-2xl p-10 overflow-hidden ">
                <img className=" w-full  xl:w-[90%]   object-cover mx-auto" src={selectedProduct.img} alt="img" />
              </div> */}
              <div className="h-[80vh] mt-16 lg:mt-0 bg-white border rounded-2xl p-10 overflow-hidden flex justify-center items-center">
                <img className="w-[80%] xl:w-[50%] object-contain mx-auto" src={selectedProduct.img} alt="img" />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start  ">
              <div>
                <h4 className=" font-montserrat text-gray-700 text-[24px] font-[400] mb-5">{t("selectValume")}:</h4>

                <div className="grid grid-cols-2  gap-3">
                  {Object.entries(selectedProduct.price).map((item, i) => (
                    <button
                      onClick={() => {
                        setSelectedPrice(item);
                      }}
                      key={i}
                      className={` w-[44vw] md:w-[20vw] lg:w-[15vw] flex items-center flex-col border py-3 px-5 rounded-2xl hover:border-slate-700 cursor-pointer
                      ${selectedPrice[0] === item[0] ? "border-slate-700" : "border-slate-300"}`}
                    >
                      <img className="max-w-24" src={imgs[i]} alt="" />
                      <span className="font-[400]">{item[0]} </span>
                      <span className="font-[500] text-lg">{item[1]}₼</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex w-full mt-5 gap-6">
                <div className=" w-1/3  border border-slate-400 rounded-full py-3 px-6 flex items-center font-[400] font-montserrat">
                  <button onClick={() => setCount((prev) => Math.min(prev + 1, 10))} className="w-1/3">
                    +
                  </button>
                  <span className="w-1/3 text-center">{count}</span>
                  <button onClick={() => setCount((prev) => Math.max(prev - 1, 1))} className="w-1/3">
                    -
                  </button>
                </div>

                <button
                  onClick={() => addItemToBasket()}
                  className=" w-2/3 flex items-center gap-2 justify-center   py-3 px-6 rounded-full bg-red hover:bg-[#700022] text-white transition-all duration-300 font-semibold"
                >
                  <PiHandbagLight className="text-lg mt-[2px]" />
                  {t("addToBasket")}
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className=" font-montserrat text-2xl font-[600] border-b-4 border-footer_black text-center my-10">Parameters</h4>

            <Parameters selectedProduct={selectedProduct} />
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}

export default SingleProduct;
