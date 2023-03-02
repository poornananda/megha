import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName : ''
};

export const slice  = createSlice({
    name:'loginDetails',
    initialState,
    reducers: {
        setUserName (state, action) {
            state.userName = action.payload;
        }
    }
});