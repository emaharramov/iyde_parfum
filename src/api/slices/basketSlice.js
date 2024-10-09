import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
export const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        console.log(newItem, "basketslice"),
          state.items.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            collection: newItem.collection,
            category: newItem.category,
            date: newItem.date,
            brand: newItem.brand,
            season: newItem.season,
            dayNight: newItem.dayNight,
            group: newItem.group,
            img: newItem.img,
            quantity: newItem.quantity,
            totalPrice: +newItem.price[1] * +newItem.quantity,
          });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price[1];
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price[1] * newItem.quantity;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id );

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const difference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price[1] * quantity;

        // state.totalQuantity--;
        state.totalPrice += existingItem.price[1] * difference;
      }
    },
  },
});
export const { addItem, removeItem, updateQuantity } = basketSlice.actions;
export const basketData = (state) => state.basketSlice;
export default basketSlice.reducer;
