import { createSlice } from "@reduxjs/toolkit";

const itemType = createSlice({
    name: "itemType",
    initialState: "",
    reducers:{
        typeSelected: (state, action)=>{
            state = action.payload.type
        },
        typeReset: (state) =>{
            state = ""
        }
    }
})

export const selectItemType = (state) => state
export const {typeSelected, typeReset} = itemType.actions
export default itemType.reducer