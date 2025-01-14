import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.ts'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './counterSaga.ts'
import { useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
