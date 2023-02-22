import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        toggleText (state, {payload}) {
            return payload
        },
        resetSearch(state, {payload}) {
            return ''
        },
        searchIphone(state, {payload}) {
            return payload
        },
        searchXiaomi(state, {payload}) {
            return payload
        },
        allProducts(state, {payload}) {
            return payload
        },
        searchSamsung(state, {payload}) {
            return payload
        },

    }
})

export const selectSearch = state => state.search

export const { toggleText, resetSearch, searchIphone, searchXiaomi, allProducts, searchSamsung } = searchSlice.actions

export const searchReducer = searchSlice.reducer