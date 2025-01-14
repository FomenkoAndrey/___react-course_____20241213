import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store.ts'

export type CounterState = {
  count: number
}

const initialState = {
  count: 0
}

const asyncDelay = (value: number): Promise<{ value: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ value }), 1000)
  })
}

// Async thunks
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => asyncDelay(1)
)

export const decrementAsync = createAsyncThunk(
  'counter/decrementAsync',
  async () => asyncDelay(1)
)

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload.value
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.count -= action.payload.value
      })
  }
})

export const selectCount = (state: RootState) => state.counter.count
export default counterSlice.reducer
