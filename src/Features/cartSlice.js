// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial cart state
const initialState = {
  items: [], // Empty cart array
  totalPrice: 0, // Total price of the cart
};

// Slice definition which contains the state and reducer logic for cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a new item to cart or increment quantity by 1 if item already exists in cart
    addToCart: (state, action) => {
      const { name, price, image } = action.payload; // Desctructing the payload to extract the specific item's details
      const existingItem = state.items.find((item) => item.name === name); //Checks if the item already exists in the cart
      if (existingItem) {
        existingItem.quantity += 1; // If true, meaning if the item already exists then increment quantity by 1
      } else {
        state.items.push({
          // If item doesn't already exist then add it to cart
          name,
          price: price,
          image,
          quantity: 1,
        });
      }
      state.totalPrice += price; // Updates total price with the added item's price
    },

    // Action that increments the quantity of a specific item that already exists in cart
    increment: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload); // Looking for the corresponding name that is passed in the action payload
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price; // Updates current total price with the added item's price
      }
    },

    // Action that increments the quantity of a specific item that already exists in cart
    decrement: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload);
      if (item) {
        state.totalPrice -= item.price; // Subtracts item's price from total price
        if (item.quantity === 1) {
          // If the quantity is 1 when decrementing then remove the item from the cart by filtering it out
          state.items = state.items.filter((i) => i.name !== item.name);
        } else {
          // If quantity is not equal to 1 then just decrement the quantity by 1
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
