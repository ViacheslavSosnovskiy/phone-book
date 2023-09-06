import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = { inputValue: '' };

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setContactsFilter: {
            reducer: (state, action) => {
                state.inputValue = action.payload
            },
            prepare: inputValue => {
                return {
                    payload: inputValue
                }
            },
        },
    },
})

export const { setContactsFilter } = filterSlice.actions

export const filterContactsReducer = filterSlice.reducer