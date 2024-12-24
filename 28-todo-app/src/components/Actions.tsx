import Button from './Button.tsx'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import { ActionsProps } from '../types/ActionsProps.ts'

const Actions = ({ deleteAllTodos, clearCompletedTodos }: ActionsProps) => {
  return (
    <div className={'todos__actions'}>
      <Button title={'Delete All Todos'} type={'button'} onClick={deleteAllTodos}>
        <RiDeleteBin5Line />
      </Button>
      <Button title={'Clear Completed Todos'} type={'button'} onClick={clearCompletedTodos}>
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions
