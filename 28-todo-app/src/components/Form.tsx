import { FormProps } from '../types/FormProps.ts'
import { ChangeEvent, FormEvent, useState } from 'react'

const Form = ({ addTodo }: FormProps) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addTodo({
      id: Date.now(),
      title: title,
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
      <button type={'submit'}>Save</button>
    </form>
  )
}

export default Form
