import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
// import { filterContactsReducer } from "./contacts/filterSlice";
// import { userReducer } from "./user/userSlice";
// import { contactsApi } from "./contacts/contactsApi";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
    // reducer: {
    //     [contactsApi.reducerPath]: contactsApi.reducer,
    //     filter: filterContactsReducer,
    //     user: userReducer,
    // },
    // middleware: (getDefaultMiddleware) => 
    //     getDefaultMiddleware().concat(contactsApi.middleware)
})