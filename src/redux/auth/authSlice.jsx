import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./authOperations";

const authInitialValue = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'user',
    initialState: authInitialValue,
    extraReducers: {
        [register.fulfilled] (state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled] (state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled] (state) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
    }
})

export const authReducer = authSlice.reducer