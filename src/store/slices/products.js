import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loaing: false,
  error: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productsSlice.reducer
