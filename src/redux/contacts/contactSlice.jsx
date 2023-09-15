// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactSlice = createSlice({
//     name: 'contact',
//     initialState: initialState,
//     reducers: {
//         addContact: {
//             reducer: (state, action) => {
//                 state.push(action.payload)
//             },
//             prepare: (name, number) => {
//                 return { 
//                     payload: {
//                         id: nanoid(),
//                         name: name.trim(),
//                         number: number.trim(),
//                     }
//                 }
//             }
//         },
//         removeContact(state, action) {
//             return state.filter(contact => contact.id !== action.payload)
//         },
//     }
// })

// export const { addContact, removeContact, filterContact } = contactSlice.actions

// export const contactReducer = contactSlice.reducer