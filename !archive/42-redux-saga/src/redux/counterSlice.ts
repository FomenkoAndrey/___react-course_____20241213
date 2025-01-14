import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store.ts'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload
    },
    decrement: (state, action) => {
      state.count -= action.payload
    },
    incrementAsync: () => {},
    decrementAsync: () => {}
  }
})

export const { increment, decrement, incrementAsync, decrementAsync } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.count
export default counterSlice.reducer
