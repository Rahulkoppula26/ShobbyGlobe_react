import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// creating a store for the application to store diff slices
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
