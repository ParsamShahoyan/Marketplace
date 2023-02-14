import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
    name : 'basket',
    initialState: [],
    reducers: {
        addToBasket: (state, {payload}) => {
            console.log(state)           
            return  [
                ...state,
                { basket: payload}    
            ]
        }
    }
})

export const selectBasket = state => state.basket

export const { addToBasket } = basketSlice.actions

export const basketReducer = basketSlice.reducer