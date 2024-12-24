import { Todo } from './Todo.ts'

export interface TodoProps {
  todo: Todo,
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}
