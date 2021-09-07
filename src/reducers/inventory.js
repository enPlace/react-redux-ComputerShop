import { combineReducers } from "redux";
import laptopSlice from "./slices/laptopSlice";
import tabletSlice from "./slices/tabletSlice";
import accessoriesReducer from "./accessories";

const inventoryReducer = combineReducers({
  laptops: laptopSlice,
  tablets: tabletSlice,
  accessories: accessoriesReducer,
});

export const selectAccessories = (state) => {
  return state.inventory.accessories;
};
export const selectLaptops = (state) => {
  return state.inventory.laptops;
};
export const selectTablets = (state) => {
  return state.inventory.tablets;
};

export default inventoryReducer;
