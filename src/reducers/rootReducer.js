import { combineReducers } from "redux";
import inventoryReducer from "./inventory";
import cartReducer from "./slices/cartSlice";
import shopDisplayReducer from "./slices/shopDisplaySlice";

const rootReducer = combineReducers({
    cart: cartReducer, 
    inventory: inventoryReducer,
    shopDisplay: shopDisplayReducer
})

export const selectInventoryByType = (type) => (state)=>{
    return type==="all" ? state.inventory : state.inventory[type]
}

export default rootReducer