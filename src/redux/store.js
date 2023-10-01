import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import { authReducer } from "./auth/authSlice";
import { persistReducer, persistStore } from "redux-persist";
// import { filterContactsReducer } from "./contacts/filterSlice";
// import { userReducer } from "./user/userSlice";
// import { contactsApi } from "./contacts/contactsApi";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer)
    }
    // reducer: {
    //     [contactsApi.reducerPath]: contactsApi.reducer,
    //     filter: filterContactsReducer,
    //     user: userReducer,
    // },
    // middleware: (getDefaultMiddleware) => 
    //     getDefaultMiddleware().concat(contactsApi.middleware)
})

export const persistor = persistStore(store)