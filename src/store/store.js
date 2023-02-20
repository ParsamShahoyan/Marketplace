import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from './slices/basketSlice/basketSlice'

const store = configureStore({
    reducer:{
        basket: basketReducer,
    }
})
export default store