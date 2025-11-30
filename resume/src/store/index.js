import { configureStore } from '@reduxjs/toolkit'
import homeDataReducer from './slices/homeSlice'
import skillDataReducer from './slices/skillSlice'
import companyDataReducer from './slices/companySlice'
import workDataReducer from './slices/workSlice'

export const store = configureStore({
  reducer: {
    homeData: homeDataReducer,
    skillData: skillDataReducer,
    companyData: companyDataReducer,
    workData: workDataReducer
  }
})