import { createSelector } from "@reduxjs/toolkit"
import { selectFilter } from "../filter/filterSelectors"

export const selectContacts = state => state.contacts.contacts

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
)