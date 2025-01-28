import UserList from './components/UserList.tsx'
import { Suspense } from 'react'

const App = () => {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserList />
      </Suspense>
    </div>
  )
}

export default App
