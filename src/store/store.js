import { configureStore } from '@reduxjs/toolkit'

import cartReducer from 'store/slices/cart'
import productsReducer from 'store/slices/products'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
})
