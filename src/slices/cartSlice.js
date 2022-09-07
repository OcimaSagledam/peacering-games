import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
        state.push(payload)
    },
    removeFromCart: (state, {payload}) => {
        const index = state.findIndex((item) => item._id === payload._id)
        state.splice(index, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer