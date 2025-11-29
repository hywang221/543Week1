import { createSlice } from '@reduxjs/toolkit'
import companyData from "../../mockData/company.json"

const companySlice = createSlice({
  name: 'companyData',
  initialState: { ...companyData },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    addBy: (state, action) => { state.value += action.payload },
    searchCompany: (state, action) => {
      const name = action.payload;
      state.companyList = companyData?.companyList?.filter(item => {
        return item.name.includes(name);
      })
    }
  }
})

export const { increment, decrement, addBy, searchCompany } = companySlice.actions
export default companySlice.reducer