import { Todo } from './Todo.ts'

export interface TodosProps {
  todos: Todo[]
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}
