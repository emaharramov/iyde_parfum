import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../api/slices/basketSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };
  const handleDecrease = () => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <div className=" max-w-[120px] w-full  border border-slate-400 rounded-full py-1 px-3 flex items-center font-[400] font-montserrat">
      <button onClick={handleDecrease} className="w-1/3">
        +
      </button>
      <span className="w-1/3 text-center">{item.quantity}</span>
      <button onClick={handleIncrease} className="w-1/3">
        -
      </button>
    </div>
  );
};

export default CartItem;
