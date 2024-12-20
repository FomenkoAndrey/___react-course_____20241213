import { useEffect, useState } from 'react'
import { fetchData } from './utils/api.ts'

interface UserInterface {
  id: number
  name: string
  email: string
  username: string
}

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        console.log(error)

        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()


  }, [])

  console.log('App component rendered')
  console.log(users)

  return (
    <div>
      <h1>Users List</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      {!isLoading && !error && users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
