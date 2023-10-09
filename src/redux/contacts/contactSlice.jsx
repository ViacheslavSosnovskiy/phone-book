import { createSlice } from "@reduxjs/toolkit";
import { getAllContacts, createContact, removeContact } from "./contactsOperations";

const contactsInitialState = { 
    contacts: [],
    isLoading: false,
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: {
        [getAllContacts.fulfilled] (state, {payload}) {
            state.contacts = payload
        },
        [createContact.fulfilled] (state, {payload}) {
            state.contacts.push(payload)
        },
        [removeContact.fulfilled] (state, {payload}) {
            state.contacts.filter(contact => contact.id !== payload.id)
        },
    }
})

export const contactsReducer = contactSlice.reducer