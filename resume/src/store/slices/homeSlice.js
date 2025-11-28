import { createSlice } from '@reduxjs/toolkit'
import homeData from "../../mockData/home.json"

const counterSlice = createSlice({
  name: 'homeData',
  initialState: { value: 1, ...homeData },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    addBy: (state, action) => { state.value += action.payload }
  }
})

export const { increment, decrement, addBy } = counterSlice.actions
export default counterSlice.reducer