import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Button from './Button.tsx'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../context/Context.ts'

const Form = () => {
  const { addTodo } = useContext(Context)
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    addTodo({
      id: uuidv4(),
      title: trimmedTitle,
      completed: false
    })
    setTitle('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={'Enter new todo'} value={title} onChange={handleInputChange} />
      <Button type="submit" title="Submit Form" disabled={!title.trim()}>Save</Button>
    </form>
  )
}

export default Form
