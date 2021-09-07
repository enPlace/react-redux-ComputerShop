import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/rootReducer";

export default configureStore({reducer})