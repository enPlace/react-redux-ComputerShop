import { combineReducers } from "redux";
import laptopSlice from "./slices/laptopSlice";
import tabletSlice from "./slices/tabletSlice";
import accessoriesReducer from "./accessories";

const inventoryReducer = combineReducers({
    laptops: laptopSlice,
    tablets: tabletSlice,
    accesories: accessoriesReducer
})

export default inventoryReducer