import { createContext } from 'react'
import { ContextInterface } from '../types/Context.interface.ts'
import { initialState } from './initialState.ts'

export const Context = createContext<ContextInterface>(initialState)
