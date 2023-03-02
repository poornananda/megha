import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName : ''
};

export const slice  = createSlice(({
    name:'loginDetails',
    initialState,
    reducers: {
        saveUserName (state, action) {
            state.userName = action.payload;
        }
    }
}));