// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array of cart items
  totalPrice: 0, // Total price of the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { name, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name,
          price: parseInt(price, 10),
          image,
          quantity: 1,
        });
      }
      state.totalPrice += parseInt(price, 10);
    },
    increment: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload);
      if (item) {
        state.totalPrice -= item.price;
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => i.name !== item.name);
        } else {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
