import { createSlice } from '@reduxjs/toolkit'
import workData from "../../mockData/work.json"

const workSlice = createSlice({
  name: 'workData',
  initialState: { ...workData },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    addBy: (state, action) => { state.value += action.payload },
    onFetchSearch: (state, action) => {
      const framework = action.payload;
      state.workList = workData?.workList?.filter(item => {
        return item.framework === framework || !framework
      })
    }
  }
})

export const { increment, decrement, addBy, onFetchSearch } = workSlice.actions
export default workSlice.reducer