import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllContacts = createAsyncThunk('contacts/getAllContcts', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/contacts')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const createContact = createAsyncThunk('contacts/createContact', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/contacts', credentials)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const removeContact = createAsyncThunk('contacts/removeContact', async (contactId, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/contacts/${contactId}`)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
