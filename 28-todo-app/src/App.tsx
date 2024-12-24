import Form from './components/Form.tsx'
import Todos from './components/Todos.tsx'
import { useState } from 'react'
import { MOCK_TODOS } from './data/mock-todos.ts'
import { Todo } from './types/Todo.ts'
import Actions from './components/Actions.tsx'

// TODO: Приховувати блок кнопок, якщо немає задач

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(MOCK_TODOS)

  const addTodoHandler = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodoHandler = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const deleteAllTodosHandler = () => {
    setTodos([])
  }

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const toggleTodoHandler = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      <Form addTodo={addTodoHandler} />
      <Actions deleteAllTodos={deleteAllTodosHandler} clearCompletedTodos={clearCompletedTodosHandler} />
      <Todos todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
    </div>
  )
}

export default App
