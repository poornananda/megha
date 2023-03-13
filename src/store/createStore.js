import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName : '',
    engineName: 'Engine 1'
};

export const slice  = createSlice({
    name:'loginDetails',
    initialState,
    reducers: {
        setUserName (state, action) {
            state.userName = action.payload;
        },
        setEngineName (state, action){
            state.engineName = action.payload;
        }
    }
});