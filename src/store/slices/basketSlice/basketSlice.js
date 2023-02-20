import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name : 'basket',
    initialState: [],
    reducers: {
        addToBasket: (state, {payload}) => {          
            return [
                ...state,
                payload,
            ]      
        },
        delItem: (state, {payload}) => {
            return [
                ...state.filter(phone => phone.ID !== payload)
            ]
        }
    }
})

export const selectBasket = state => state.basket

export const { addToBasket, delItem } = basketSlice.actions

export const basketReducer = basketSlice.reducer

