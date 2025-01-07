import { ActionTypes } from './actionTypes.ts'
import { CounterState } from './types.ts'
import { Action } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

const counterReducer = (
  state: CounterState = initialState,
  action: Action
): CounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        count: state.count + 1
      }
    case ActionTypes.DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

export default counterReducer
