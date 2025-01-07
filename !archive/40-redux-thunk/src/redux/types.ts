import store from './store.ts'
import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'

export type CounterState = {
  count: number
}

export type AsyncCounterAction = ThunkAction<void, CounterState, unknown, Action>

export type AppDispatch = ThunkDispatch<CounterState, unknown, Action>

export type RootState = ReturnType<typeof store.getState>
