import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const isInCart = state.data.find(i => i.id === payload.id)

      state.data = isInCart
        ? state.data.map(i =>
            i.id === payload.id
              ? { ...i, quantity: i.quantity + payload.quantity }
              : i
          )
        : [...state.data, payload]
    },
    removeFromCart(state, { payload }) {
      state.data = state.data.filter(i => i.id !== payload)
    },
    adjustQty(state, { payload }) {
      state.data = state.data.map(i =>
        i.id === payload.id ? { ...i, quantity: payload.qty } : i
      )
    },
  },
})

export const { addToCart, removeFromCart, adjustQty } = cartSlice.actions

export default cartSlice.reducer
