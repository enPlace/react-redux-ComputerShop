import { createSlice } from "@reduxjs/toolkit";

const shopDisplaySlice = createSlice({
  name: "shopDisplay",
  initialState: "all",
  reducers: {
    displayChanged: (state, action) => {
      state = action.payload.type;
    },
  },
});

export const { displayChanged } = shopDisplaySlice.actions;
export default shopDisplaySlice.reducer;
