import { combineReducers } from "redux";
import laptopSlice from "./slices/laptopSlice";
import tabletSlice from "./slices/tabletSlice";
import keyboardReducer from "./slices/keyboardSlice";
import mouseReducer from "./slices/mouseSlice";
import headphonesReducer from "./slices/headphonesSlice";

const inventoryReducer = combineReducers({
  laptops: laptopSlice,
  tablets: tabletSlice,
  keyboards: keyboardReducer,
  mice: mouseReducer,
  headphones: headphonesReducer,
});

export default inventoryReducer;
