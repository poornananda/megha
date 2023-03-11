import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName : '',
    engineName: ''
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