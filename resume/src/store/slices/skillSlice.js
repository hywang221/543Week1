import { createSlice } from '@reduxjs/toolkit'
import skillData from "../../mockData/skill.json"

const skillSlice = createSlice({
  name: 'skillData',
  initialState: { ...skillData },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    addBy: (state, action) => { state.value += action.payload }
  }
})

export const { increment, decrement, addBy } = skillSlice.actions
export default skillSlice.reducer