import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/data";
import basketReducer from "./slices/basketSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    basketSlice: basketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
