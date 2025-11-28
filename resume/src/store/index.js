import { configureStore } from '@reduxjs/toolkit'
import homeDataReducer from './slices/homeSlice'

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer
  }
})