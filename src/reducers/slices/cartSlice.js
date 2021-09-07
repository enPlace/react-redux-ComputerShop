import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
  },
  reducers: {
    itemAdded: (state, action) => {
      if (!state.cart.hasOwnProperty(action.payload.id)) {
        state.cart[action.payload.id] = action.payload;
      } else {
        state.cart[action.payload.id].quantity += action.payload.quantity;
      }
    },
    itemDeleted: (state, action) => {
      delete state.cart[action.payload.id];
    },
    itemIncremented: (state, action) => {
      state.cart[action.payload.id].quantity++;
    },
    itemDecremented: (state, action) => {
      state.cart[action.payload.id].quantity--;
    },
    quantityChanged: (state, action) =>{
        state.cart[action.payload.id].quantity = action.payload.quantity
    }
  },
});

export const { itemAdded, itemDeleted, itemIncremented, itemDecremented, quantityChanged} =
  cartSlice.actions;

export default cartSlice.reducer;
