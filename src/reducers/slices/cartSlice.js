import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allIds: [],
  },
  reducers: {
    itemAdded: (state, action) => {
      if (!state.hasOwnProperty(action.payload.id)) {
        let allIds = [...state.allIds];
        let newState = { ...state };
        allIds.push(action.payload.id);
        newState[action.payload.id] = action.payload;
        newState.allIds = allIds;
        return newState;
      } else {
        state[action.payload.id].count += action.payload.count;
      }
    },
    itemDeleted: (state, action) => {
      const newIds = state.allIds.filter((id) => id !== action.payload.id);
      const newState = { ...state };
      delete newState[action.payload.id];
      newState.allIds = newIds;
      return newState;
    },
    itemIncremented: (state, action) => {
      state[action.payload.id].count++;
    },
    itemDecremented: (state, action) => {
      if (state[action.payload.id].count > 0) state[action.payload.id].count--;
    },
    countChanged: (state, action) => {
      state[action.payload.id].count = action.payload.count;
    },
  },
});

export const selectCart = (state) => {
  return state.cart;
};
export const selectAllCartIds = (state) => {
  return state.cart.allIds;
};
export const selectcountById = (id) => (state) => {
  return state.cart[id].count;
};
export const selectItemById = (id) => (state) => {
  return state.cart[id];
};

export const selectTotalCount = (state) => {
  let count = 0;
  state.cart.allIds.map((id) => (count += state.cart[id].count));
  return count;
};

export const selectTotalPrice = (state) => {
  let price = 0;
  state.cart.allIds.forEach((id) => {
    let itemPrice = state.cart[id].price;
    itemPrice *= state.cart[id].count;
    price += itemPrice;
  });
  const num = Math.round(price * 100) / 100;
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
export const selectItemPriceById = (id) => (state) => {
  const num =
    Math.round(
      state.cart[id].count * (parseFloat(state.cart[id].price) * 100)
    ) / 100;
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const {
  itemAdded,
  itemDeleted,
  itemIncremented,
  itemDecremented,
  countChanged,
} = cartSlice.actions;

export default cartSlice.reducer;
