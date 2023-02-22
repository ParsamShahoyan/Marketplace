import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from './slices/basketSlice/basketSlice'
import { searchReducer } from './slices/searchSlice/searchSlice'

const store = configureStore({
    reducer:{
        basket: basketReducer,
        search: searchReducer
    }
})
export default store