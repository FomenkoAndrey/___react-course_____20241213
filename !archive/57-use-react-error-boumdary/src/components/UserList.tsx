import { use } from 'react'
import { fetchDataWithFallback } from '../utils/api.ts'
import { UserInterface } from '../types/user.interface.ts'

const UserList = () => {
  const users: UserInterface[] = use(fetchDataWithFallback)

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList
