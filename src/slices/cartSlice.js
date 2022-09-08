import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(state, payload)
      const index = state.findIndex((item) => item.id === payload.id)
      if (index === -1) {
        state.push(payload)
      } else {
        state[index].amount++
      }
    },
    removeFromCart: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id)
      if (index === -1) {
        return state
      } else {
        if (state[index].amount === 1) {
          state.splice(index, 1)
        } else {
          state[index].amount--
        }
      }
    },
    deleteCart: () => {
      return []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer