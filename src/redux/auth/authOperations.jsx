import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeader = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const removeAuthHeader = () => {
    axios.defaults.headers.common['Authorization'] = ''
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/users/signup', credentials)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/users/login', credentials)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout')
        removeAuthHeader()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})