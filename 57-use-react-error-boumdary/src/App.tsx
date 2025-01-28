import UserList from './components/UserList.tsx'
import { Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary.tsx'

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<h2>⌛Downloading message...</h2>}>
          <UserList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
