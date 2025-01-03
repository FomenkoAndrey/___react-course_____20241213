import Todo from './Todo.tsx'
import { useContext } from 'react'
import { Context } from '../context/Context.ts'

const Todos = () => {
  const { todos, completedTodosCount } = useContext(Context)
  return (
    <div className={'todos'}>
      {!todos.length && <p className={'todos__empty'}>Todos list is empty</p>}
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      {completedTodosCount > 0 && <p
        className={'todos__message'}>You have completed {completedTodosCount} {completedTodosCount > 1 ? 'todos' : 'todo'}</p>}
    </div>
  )
}

export default Todos
