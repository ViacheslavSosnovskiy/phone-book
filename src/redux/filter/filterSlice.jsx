import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = { inputValue: '' };

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setContactsFilter(state, {payload}) {
            state.inputValue = payload
        }
        // setContactsFilter: {
        //     reducer: (state, {payload}) => {
        //         state.inputValue = payload
        //     },
        // },
    },
})

export const { setContactsFilter } = filterSlice.actions

export const filterContactsReducer = filterSlice.reducer