import { combineReducers } from "redux";
import inventoryReducer from "./inventory";
import cartReducer from "./slices/cartSlice";
import itemTypeReducer from "./slices/itemTypeSlice";

const rootReducer = combineReducers({
    cart: cartReducer, 
    itemType: itemTypeReducer,
    inventory: inventoryReducer
})

export const selectCart = (state) =>{
    return state.cart
}

export default rootReducer