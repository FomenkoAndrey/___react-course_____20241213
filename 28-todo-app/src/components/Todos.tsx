import { TodosProps } from '../types/TodosProps.ts'
import Todo from './Todo.tsx'

const Todos = ({ todos, deleteTodo, toggleTodo }: TodosProps) => {
  return (
    <div className={'todos'}>
      {todos.length === 0 && <p className={'todos__empty'}>No todos</p>}
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}

export default Todos
