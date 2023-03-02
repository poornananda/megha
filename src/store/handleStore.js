import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./createStore";

export const sliceStore = configureStore ({reducer : {
    loginDetails : slice.reducer
}});