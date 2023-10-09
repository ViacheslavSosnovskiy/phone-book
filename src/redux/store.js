import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { authReducer } from "./auth/authSlice";
import { contactsReducer } from "./contacts/contactSlice";
import { filterContactsReducer } from "./filter/filterSlice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterContactsReducer,
    }
})

export const persistor = persistStore(store)