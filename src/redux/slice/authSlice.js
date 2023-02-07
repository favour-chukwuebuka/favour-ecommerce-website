import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state,action) => {
     
        }
    }
});

export const {SET_ACTIVE_USER} = authSlice.actions

export default authSlice.reducer