import { Todo } from './Todo.ts'

export interface FormProps {
  addTodo: (todo: Todo) => void
}
