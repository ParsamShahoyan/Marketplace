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
        },
        increment: (state, {payload}) => {
            const idx = state.findIndex(phone => phone.ID === payload)
                state[idx].price = state[idx].price + state[idx].price
                state[idx].count++
        },
        decrement: (state, {payload}) => {
            const idx = state.findIndex(phone => phone.ID === payload.id)
            if(state[idx].count > 1){
                state[idx].count--
                state[idx].price = state[idx].price / 2
            }

        }
    }
})

export const selectBasket = state => state.basket

export const { addToBasket, delItem, increment, decrement } = basketSlice.actions

export const basketReducer = basketSlice.reducer

