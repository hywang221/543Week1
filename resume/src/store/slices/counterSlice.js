import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 1 },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    addBy: (state, action) => { state.value += action.payload }
  }
})

export const { increment, decrement, addBy } = counterSlice.actions
export default counterSlice.reducer