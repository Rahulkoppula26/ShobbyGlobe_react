import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // defining reducers (actions) to perform an operation
  reducers: {
    // adding an item
    addItem: (state, action) => {
      let item = state.items.find((item) => item._id == action.payload._id);
      const data = { ...action.payload, quantity: 1 };
      if (!item) {
        state.items.push(data);
      } else {
        item.quantity++;
      }
    },
    // removing an item
    removeItem: (state, action) => {
      let item = state.items.find((item) => item._id == action.payload._id);
      item.quantity = "";
      if (item.quantity == 0) {
        const arr = state.items.filter((item) => item._id != action.payload._id);
        state.items = arr;
      }
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
