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
        let newState = {
          ...state,
        };
        allIds.push(action.payload.id)
        newState[action.payload.id] = action.payload;
        newState.allIds = allIds
        return newState;
      } else {
        state[action.payload.id].count += action.payload.count;
      }
    },
    itemDeleted: (state, action) => {
      delete state[action.payload.id];
    },
    itemIncremented: (state, action) => {
      state[action.payload.id].count++;
    },
    itemDecremented: (state, action) => {
      state[action.payload.id].count--;
    },
    countChanged: (state, action) => {
      state[action.payload.id].count = action.payload.count;
    },
  },
});

export const selectcountById = (id) => (state) => {
  if (state.cart[id]) return state.cart[id].count;
  else return undefined;
};

export const {
  itemAdded,
  itemDeleted,
  itemIncremented,
  itemDecremented,
  countChanged,
} = cartSlice.actions;

export default cartSlice.reducer;
