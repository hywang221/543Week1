import { configureStore } from '@reduxjs/toolkit'
import homeDataReducer from './slices/homeSlice'
import skillDataReducer from './slices/skillSlice'
import companyDataReducer from './slices/companySlice'

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
    skillData: skillDataReducer,
    companyData: companyDataReducer
  }
})