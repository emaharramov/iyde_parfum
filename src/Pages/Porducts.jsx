import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useGetDataQuery } from "../api/slices/data";
import { PiHandbagLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addItem } from "../api/slices/basketSlice";
import ModalAddToBasket from "../component/ModalAddToBasket";
import Stars from "../component/Stars";
import BrandFilter from "../component/BrandFilter";
import CategoryFilter from "../component/CategoryFilter";
import PriceFilter from "../component/PriceFilter";
import Sorted from "./Sorted";
function Products() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const { data, isLoading, error } = useGetDataQuery();
  const [language, setLanguage] = useState(i18n.language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [main, setMain] = useState([]);
  const [chosen, setChosen] = useState({
    price: [],
    id: null,
    quantity: 1,
    items: {
      price: {},
      img: "",
      name: "",
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const chosenItem = data[language].find((item) => item.id === chosen.id);
    dispatch(
      addItem({
        id: chosen.id,
        name: chosenItem.name,
        price: chosen.price,
        collection: chosenItem.collection,
        category: chosenItem.category,
        date: chosenItem.date,
        brand: chosenItem.brand,
        season: chosenItem.season,
        dayNight: chosenItem.dayNight,
        group: chosenItem.group,
        img: chosenItem.img,
        quantity: chosen.quantity,
      })
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function addToBasket(id) {
    const chosenItem = data[language]?.find((item) => item.id === id);
    if (!chosenItem) {
      console.error(`Item with ID ${id} not found`);
      return;
    }
    setChosen((prev) => ({
      ...prev,
      id: id,
      items: {
        price: chosenItem.price,
        img: chosenItem.img,
        name: chosenItem.name,
      },
    }));
    showModal(chosenItem);
  }

  const handleBrandSelection = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand) ? prevSelected.filter((b) => b !== brand) : [...prevSelected, brand]
    );
  };
  const handleCategorySelection = (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(category) ? prevSelected.filter((b) => b !== category) : [...prevSelected, category]
    );
  };
  const handlePriceSelection = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };
  useEffect(() => {
    if (data) {
      const products = data[language].filter((item) => {
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(item.category);
        const priceMatch = (() => {
          const price = Object.values(item.price)[0];
          if (selectedPriceRange === "0-50") return price >= 0 && price <= 50;
          if (selectedPriceRange === "50-100") return price > 50 && price <= 100;
          if (selectedPriceRange === "100-200") return price > 100 && price <= 200;
          return true;
        })();
        return brandMatch && categoryMatch && priceMatch;
      });
      setFilteredProducts(products);
    }
  }, [data, language, selectedBrands, selectedCategory, selectedPriceRange]);

  const [sortOption, setSortOption] = useState("AtoZ");

  const sortProducts = (products) => {
    switch (sortOption) {
      case "AtoZ":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "ZtoA":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case "popularity":
        return products;
      case "cheapToExpensive":
        return products.sort((a, b) => Object.values(a.price)[0] - Object.values(b.price)[0]);
      case "expensiveToCheap":
        return products.sort((a, b) => Object.values(b.price)[0] - Object.values(a.price)[0]);
      default:
        return products;
    }
  };

  useEffect(() => {
    const sortedProducts = sortProducts([...filteredProducts]);
    setFilteredProducts(sortedProducts);
  }, [sortOption]);
  useEffect(() => {
    if (filteredProducts.length > 0) {
      setMain(filteredProducts);
    } else {
      setMain(data?.[language]);
    }
  }, [data, filteredProducts]);

  return (
    <div className=" bg-bg_grey py-10 ">
      <div className="w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto">
        <div className=" flex justify-between">
          <h2 className="  font-fairy text-3xl md:text-4xl uppercase font-semibold mb-8">Perfumes</h2>
          <Sorted onSortOptionChange={setSortOption} />
        </div>
        <div className=" flex relative ">
          <div className=" md:w-1/4 ">
            <div className=" absolute flex flex-col w-full justify-between z-10 bg-bg_white  md:static md:block md:bg-transparent">
              <BrandFilter handleBrandSelection={handleBrandSelection} selectedBrands={selectedBrands} />
              <CategoryFilter handleCategorySelection={handleCategorySelection} selectedCategory={selectedCategory} />
              <PriceFilter handlePriceSelection={handlePriceSelection} />
            </div>
          </div>
          <div className=" mt-52 md:mt-0 md:w-3/4  grid grid-cols-2 lg:grid-cols-3 gap-4 p-2 ">
            {main &&
              main.map((item) => (
                <div
                  key={item.id}
                  className=" mx-auto  max-h-[400px] bg-white rounded-xl flex flex-col justify-between shadow-md overflow-hidden"
                >
                  <div className=" hover_show relative  overflow-hidden bg-white py-2">
                    <Link to={`/product/${item.id}`}>
                      <img className=" w-full object-cover" src={item.img} alt={item.name} />
                    </Link>
                    <button
                      onClick={() => addToBasket(item.id)}
                      className=" absolute -bottom-12 flex items-center gap-2 justify-center w-[96%] left-[2%] py-1 px-2 md:py-3 md:px-6 rounded-full bg-white hover:bg-[#E5EFDC] text-black font-semibold"
                    >
                      <PiHandbagLight className="text-lg mt-[2px]" />
                      Add To Basket
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-semibold text-gray-900">
                      {Object.values(item.price)[0]}₼-
                      {Object.values(item.price)[3]}₼
                    </div>
                    <div className="text-gray-700 mt-1 font-montserrat font-semibold text-sm">{item.name}</div>
                    <div className="mt-2">
                      <Stars />
                    </div>
                  </div>
                </div>
              ))}
            {isModalOpen && (
              <ModalAddToBasket
                price={chosen.items.price}
                img={chosen.items.img}
                name={chosen.items.name}
                isModalOpen={isModalOpen}
                setChosen={setChosen}
                handleOk={handleOk}
                handleCancel={handleCancel}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
