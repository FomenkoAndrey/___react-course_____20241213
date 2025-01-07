import { Action, configureStore, MiddlewareAPI } from '@reduxjs/toolkit'
import counterReducer from './reducers.ts'

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
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
