import store from './store.ts'

export type CounterState = {
  count: number
}

export type RootState = ReturnType<typeof store.getState>
