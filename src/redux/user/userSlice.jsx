import { createSlice } from "@reduxjs/toolkit";

const userInitialValue = {login: '', isLoggedIn: false}

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialValue,
    reducers: {
        logIn(state, action) {
            state.login = action.payload;
            state.isLoggedIn = true;
        },
        logOut(state, action) {
            state.login = '';
            state.isLoggedIn = false;
        }
    }
})

export const { logIn, logOut } = userSlice.actions

export const userReducer = userSlice.reducer