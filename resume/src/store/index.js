import { configureStore } from '@reduxjs/toolkit'
import homeDataReducer from './slices/homeSlice'
import skillDataReducer from './slices/skillSlice'

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
    skillData: skillDataReducer
  }
})