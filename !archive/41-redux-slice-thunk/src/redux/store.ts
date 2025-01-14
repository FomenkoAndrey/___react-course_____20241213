import { Action, configureStore, MiddlewareAPI, ThunkDispatch } from '@reduxjs/toolkit'
import counterReducer, { CounterState } from './slices/counterSlice.ts'
import userReducer from './slices/userSlice.ts'

export type AppDispatch = ThunkDispatch<CounterState, unknown, Action>
export type RootState = ReturnType<typeof store.getState>

const logger = (store: MiddlewareAPI) => (next: any) => (action: any) => {
  const prevState = store.getState().counter.count
  const result = next(action)
  const nextState = store.getState().counter.count
  console.log(`
    prev state:     ${prevState}
      dispatching:  ${(action as Action).type}
        next state: ${nextState}`)
  return result
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
