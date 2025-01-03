import Button from './Button.tsx'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import { useContext } from 'react'
import { Context } from '../context/Context.ts'

const Actions = () => {
  const { deleteAllTodos, clearCompletedTodos, completedTodosExist, todos } = useContext(Context)

  if (!todos.length) return null

  return (
    <div className={'todos__actions'}>
      <Button title={'Delete All Todos'}
              type={'button'}
              onClick={deleteAllTodos}>
        <RiDeleteBin5Line />
      </Button>
      <Button title={'Clear Completed Todos'}
              type={'button'}
              onClick={clearCompletedTodos}
              disabled={!completedTodosExist}>
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions
