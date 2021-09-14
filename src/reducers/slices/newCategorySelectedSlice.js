import { createSlice } from "@reduxjs/toolkit";

const newCategorySelectedSlice = createSlice({
  name: "newCategorySlecected",
  initialState: true,
  reducers: {
    setNewCategorySelected: (state, action) => {
     return action.payload.bool;
    },
  },
});
export const selectCategoryBool=(state)=> state.newCategorySelected

export const {setNewCategorySelected} = newCategorySelectedSlice.actions

export default newCategorySelectedSlice.reducer


