import { useState } from 'react'
import { ProviderProps } from '../types/ProviderProps.ts'
import { TodoInterface } from '../types/Todo.interface.ts'
import { MOCK_TODOS } from '../data/mock-todos.ts'
import { Context } from '../context/Context.ts'

const Provider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = useState(MOCK_TODOS as TodoInterface[])

  const addTodo = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const completedTodosCount: number = todos.filter(todo => todo.completed).length

  const completedTodosExist: boolean = todos.some(todo => todo.completed)

  return (
    <Context.Provider value={{
      todos,
      addTodo,
      deleteTodo,
      deleteAllTodos,
      clearCompletedTodos,
      toggleTodo,
      completedTodosCount,
      completedTodosExist
    }}>
      {children}
    </Context.Provider>)
}

export default Provider
