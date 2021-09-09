import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    itemAdded: (state, action) => {
      if (!state.hasOwnProperty(action.payload.id)) {
        state[action.payload.id] = action.payload;
      } else {
        state[action.payload.id].quantity += action.payload.quantity;
      }
    },
    itemDeleted: (state, action) => {
      delete state[action.payload.id];
    },
    itemIncremented: (state, action) => {
      state[action.payload.id].quantity++;
    },
    itemDecremented: (state, action) => {
      state[action.payload.id].quantity--;
    },
    quantityChanged: (state, action) => {
      state[action.payload.id].quantity = action.payload.quantity;
    },
  },
});

export const selectQuantityById = (id) => (state) => {
  if (state.cart[id]) return state.cart[id].quantity;
  else return undefined;
};

export const {
  itemAdded,
  itemDeleted,
  itemIncremented,
  itemDecremented,
  quantityChanged,
} = cartSlice.actions;

export default cartSlice.reducer;
