import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
// import { contactReducer } from "./contacts/contactSlice";
import { filterContactsReducer } from "./contacts/filterSlice";
import { userReducer } from "./user/userSlice";
import { contactsApi } from "./contacts/contactsApi";

export const store = configureStore({
    reducer: {
        // contacts: contactReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterContactsReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(contactsApi.middleware)
})

setupListeners(store.dispatch)