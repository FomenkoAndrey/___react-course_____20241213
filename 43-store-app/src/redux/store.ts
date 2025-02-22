import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import usersReducer from './slices/usersSlice'
import postsReducer from './slices/postsSlice'
import productsReducer from './slices/productsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer,
    products: productsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
