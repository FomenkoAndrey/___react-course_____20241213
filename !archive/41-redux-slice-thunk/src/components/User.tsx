import { useDispatch, useSelector } from 'react-redux'
import { selectUsername, setUsername } from '../redux/slices/userSlice.ts'
import { ChangeEvent, FormEvent, useState } from 'react'

const User = () => {
  const username = useSelector(selectUsername)
  const dispatch = useDispatch()
  const [newUsername, setNewUsername] = useState('')

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value)
  }

  const handleNameSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(setUsername(newUsername))
  }

  return (
    <div>
      <h2>User: {username}</h2>
      <form onSubmit={handleNameSubmit}>
        <input type="text" value={newUsername} onChange={handleNameChange} />
        <button type="submit">Change Name</button>
      </form>
    </div>
  )
}

export default User
