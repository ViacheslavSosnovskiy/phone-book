import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactSlice";
import { filterContactsReducer } from "./contacts/filterSlice";
import { userReducer } from "./user/userSlice";

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterContactsReducer,
        user: userReducer,
    }
})