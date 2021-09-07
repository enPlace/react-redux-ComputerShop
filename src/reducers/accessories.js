import { combineReducers } from "redux";
import keyboardReducer from "./slices/keyboardSlice";
import mouseReducer from "./slices/mouseSlice";
import headphonesReducer from "./slices/headphonesSlice";

const accessoriesReducer = combineReducers({
    keyboards: keyboardReducer,
    mice: mouseReducer,
    headphones: headphonesReducer
})


export default accessoriesReducer