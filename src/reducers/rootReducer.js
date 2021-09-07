import { combineReducers } from "redux";
import inventoryReducer from "./inventory";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
    cart: cartReducer, 
    inventory: inventoryReducer
})

export const selectCart = (state) =>{
    return state.cart
}

export default rootReducer